import { queryAll } from "@/lib/salesforce";
import type { DonorContact } from "@/lib/types";
import { getGivingSocietyTier } from "@/lib/types";

/**
 * Donor rollup strategy:
 *
 * Roll up all opportunities and payments by Account.
 *
 * - Default: use the Opportunity's Account. The displayed contact is that
 *   Account's primary contact (npe01__One2OneContact__r).
 *
 * - DAF exception: when the Opportunity's Account Type is
 *   "DAF Sponsoring Organization", the Account is the DAF fund — not the
 *   real donor. Instead, roll up under the Opportunity's Primary Contact's
 *   Account, and display the Primary Contact as the contact.
 */

const DAF_ACCOUNT_TYPE = "DAF sponsoring organization";

/** Opportunity with account and primary contact relationships. */
interface OppRecord {
  Id: string;
  Amount: number | null;
  CloseDate: string;
  AccountId: string | null;
  Account: {
    Name: string;
    Type: string | null;
    npe01__One2OneContact__r: {
      Id: string;
      Name: string;
      FirstName: string | null;
      LastName: string;
      Email: string | null;
      Phone: string | null;
      MailingCity: string | null;
      MailingState: string | null;
    } | null;
  } | null;
  ContactId: string | null;
  npsp__Primary_Contact__c: string | null;
  npsp__Primary_Contact__r: {
    Id: string;
    Name: string;
    FirstName: string | null;
    LastName: string;
    Email: string | null;
    Phone: string | null;
    MailingCity: string | null;
    MailingState: string | null;
    AccountId: string | null;
    Account: {
      Name: string;
      Type: string | null;
    } | null;
  } | null;
}

/** Payment with opportunity relationship data for rollup determination. */
interface PaymentRecord {
  npe01__Payment_Amount__c: number;
  npe01__Payment_Date__c: string | null;
  npe01__Paid__c: boolean;
  npe01__Opportunity__r: {
    AccountId: string | null;
    Account: { Type: string | null } | null;
    ContactId: string | null;
    npsp__Primary_Contact__c: string | null;
    npsp__Primary_Contact__r: {
      AccountId: string | null;
    } | null;
  };
}

interface ContactInfo {
  id: string;
  name: string;
  firstName: string | null;
  lastName: string;
  email: string | null;
  phone: string | null;
  mailingCity: string | null;
  mailingState: string | null;
}

interface AccountRollup {
  accountName: string;
  accountType: string | null;
  contact: ContactInfo | null;
  opportunityCount: number;
  lastCloseDate: string | null;
  lastPaidPaymentDate: string | null;
  totalPaid: number;
  pledgesOutstanding: number;
  fiveYearGiving: number;
}

/** Compute the start date for the past 5 full fiscal years (July–June). */
function getFiveYearFYStart(): string {
  const now = new Date();
  const currentFYStartYear = now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
  return `${currentFYStartYear - 5}-07-01`;
}

/** Contact record fetched in bulk for ContactId fallback. */
interface ContactRecord {
  Id: string;
  Name: string;
  FirstName: string | null;
  LastName: string;
  Email: string | null;
  Phone: string | null;
  MailingCity: string | null;
  MailingState: string | null;
  AccountId: string | null;
  Account: {
    Name: string;
    Type: string | null;
  } | null;
}

/**
 * Determine the rollup account ID for an opportunity or payment.
 * If the opportunity's account is a DAF Sponsoring Organization, roll up
 * under the contact's account instead.
 */
function getRollupAccountId(
  oppAccountType: string | null,
  oppAccountId: string | null,
  contactId: string | null,
  contactAccountId: string | null,
): string | null {
  if (oppAccountType === DAF_ACCOUNT_TYPE) {
    // DAF orgs are pass-through — attribute to the contact's account.
    // If there's no contact, skip (return null) rather than
    // rolling up under the DAF org itself.
    return contactId && contactAccountId ? contactAccountId : null;
  }
  return oppAccountId;
}

export async function getDonorContacts(): Promise<DonorContact[]> {
  const fiveYearStart = getFiveYearFYStart();

  const [opportunities, payments] = await Promise.all([
    queryAll<OppRecord>(`
      SELECT Id, Amount, CloseDate,
             AccountId, Account.Name, Account.Type,
             Account.npe01__One2OneContact__r.Id,
             Account.npe01__One2OneContact__r.Name,
             Account.npe01__One2OneContact__r.FirstName,
             Account.npe01__One2OneContact__r.LastName,
             Account.npe01__One2OneContact__r.Email,
             Account.npe01__One2OneContact__r.Phone,
             Account.npe01__One2OneContact__r.MailingCity,
             Account.npe01__One2OneContact__r.MailingState,
             ContactId,
             npsp__Primary_Contact__c,
             npsp__Primary_Contact__r.Id,
             npsp__Primary_Contact__r.Name,
             npsp__Primary_Contact__r.FirstName,
             npsp__Primary_Contact__r.LastName,
             npsp__Primary_Contact__r.Email,
             npsp__Primary_Contact__r.Phone,
             npsp__Primary_Contact__r.MailingCity,
             npsp__Primary_Contact__r.MailingState,
             npsp__Primary_Contact__r.AccountId,
             npsp__Primary_Contact__r.Account.Name,
             npsp__Primary_Contact__r.Account.Type
      FROM Opportunity
      WHERE StageName != 'Closed Lost'
    `),
    queryAll<PaymentRecord>(`
      SELECT npe01__Payment_Amount__c, npe01__Payment_Date__c, npe01__Paid__c,
             npe01__Opportunity__r.AccountId,
             npe01__Opportunity__r.Account.Type,
             npe01__Opportunity__r.ContactId,
             npe01__Opportunity__r.npsp__Primary_Contact__c,
             npe01__Opportunity__r.npsp__Primary_Contact__r.AccountId
      FROM npe01__OppPayment__c
      WHERE npe01__Payment_Amount__c > 0
        AND npe01__Opportunity__r.StageName != 'Closed Lost'
    `),
  ]);

  // Collect ContactIds that need a separate lookup (DAF opps where
  // npsp__Primary_Contact__c is null but ContactId is set)
  const contactIdsToFetch = new Set<string>();
  for (const opp of opportunities) {
    if (
      opp.Account?.Type === DAF_ACCOUNT_TYPE &&
      !opp.npsp__Primary_Contact__c &&
      opp.ContactId
    ) {
      contactIdsToFetch.add(opp.ContactId);
    }
  }
  for (const payment of payments) {
    const oppRef = payment.npe01__Opportunity__r;
    if (
      oppRef.Account?.Type === DAF_ACCOUNT_TYPE &&
      !oppRef.npsp__Primary_Contact__c &&
      oppRef.ContactId
    ) {
      contactIdsToFetch.add(oppRef.ContactId);
    }
  }

  // Fetch contact details for ContactId fallbacks
  const contactMap = new Map<string, ContactRecord>();
  if (contactIdsToFetch.size > 0) {
    const ids = [...contactIdsToFetch].map((id) => `'${id}'`).join(",");
    const contacts = await queryAll<ContactRecord>(`
      SELECT Id, Name, FirstName, LastName, Email, Phone,
             MailingCity, MailingState, AccountId,
             Account.Name, Account.Type
      FROM Contact
      WHERE Id IN (${ids})
    `);
    for (const c of contacts) {
      contactMap.set(c.Id, c);
    }
  }

  const rollups = new Map<string, AccountRollup>();

  // --- Process opportunities ---

  for (const opp of opportunities) {
    // Resolve contact: prefer npsp__Primary_Contact__c, fall back to ContactId
    const primaryContact = opp.npsp__Primary_Contact__r;
    const fallbackContact = opp.ContactId ? contactMap.get(opp.ContactId) ?? null : null;
    const contactId = opp.npsp__Primary_Contact__c ?? opp.ContactId;
    const contactRecord = primaryContact ?? fallbackContact;
    const contactAccountId = contactRecord?.AccountId ?? null;

    const isDAF = opp.Account?.Type === DAF_ACCOUNT_TYPE && !!contactId;

    const rollupAccountId = getRollupAccountId(
      opp.Account?.Type ?? null,
      opp.AccountId,
      contactId,
      contactAccountId,
    );
    if (!rollupAccountId) continue;

    let rollup = rollups.get(rollupAccountId);

    if (!rollup) {
      let accountName: string;
      let accountType: string | null;
      let contact: ContactInfo | null = null;

      if (isDAF && contactRecord) {
        // DAF: account is contact's account, contact is the opp's contact
        accountName = contactRecord.Account?.Name ?? "Unknown";
        accountType = contactRecord.Account?.Type ?? null;
        contact = {
          id: contactRecord.Id, name: contactRecord.Name,
          firstName: contactRecord.FirstName, lastName: contactRecord.LastName,
          email: contactRecord.Email, phone: contactRecord.Phone,
          mailingCity: contactRecord.MailingCity, mailingState: contactRecord.MailingState,
        };
      } else {
        // Non-DAF: account is opp's account, contact is account's primary contact
        accountName = opp.Account?.Name ?? "Unknown";
        accountType = opp.Account?.Type ?? null;
        const ac = opp.Account?.npe01__One2OneContact__r;
        if (ac) {
          contact = {
            id: ac.Id, name: ac.Name, firstName: ac.FirstName, lastName: ac.LastName,
            email: ac.Email, phone: ac.Phone, mailingCity: ac.MailingCity, mailingState: ac.MailingState,
          };
        }
      }

      rollup = {
        accountName, accountType, contact,
        opportunityCount: 0, lastCloseDate: null, lastPaidPaymentDate: null,
        totalPaid: 0, pledgesOutstanding: 0, fiveYearGiving: 0,
      };
      rollups.set(rollupAccountId, rollup);
    }

    // Fill in contact if still missing
    if (!rollup.contact) {
      if (isDAF && contactRecord) {
        rollup.contact = {
          id: contactRecord.Id, name: contactRecord.Name,
          firstName: contactRecord.FirstName, lastName: contactRecord.LastName,
          email: contactRecord.Email, phone: contactRecord.Phone,
          mailingCity: contactRecord.MailingCity, mailingState: contactRecord.MailingState,
        };
      } else if (opp.Account?.npe01__One2OneContact__r) {
        const ac = opp.Account.npe01__One2OneContact__r;
        rollup.contact = {
          id: ac.Id, name: ac.Name, firstName: ac.FirstName, lastName: ac.LastName,
          email: ac.Email, phone: ac.Phone, mailingCity: ac.MailingCity, mailingState: ac.MailingState,
        };
      }
    }

    rollup.opportunityCount++;

    if (opp.CloseDate && (!rollup.lastCloseDate || opp.CloseDate > rollup.lastCloseDate)) {
      rollup.lastCloseDate = opp.CloseDate;
    }

    if (opp.Amount && opp.Amount > 0 && opp.CloseDate >= fiveYearStart) {
      rollup.fiveYearGiving += opp.Amount;
    }
  }


  // --- Process payments ---

  for (const payment of payments) {
    const oppRef = payment.npe01__Opportunity__r;
    const payContactId = oppRef.npsp__Primary_Contact__c ?? oppRef.ContactId;
    const payContactAccountId =
      oppRef.npsp__Primary_Contact__r?.AccountId ??
      (oppRef.ContactId ? contactMap.get(oppRef.ContactId)?.AccountId ?? null : null);
    const rollupAccountId = getRollupAccountId(
      oppRef.Account?.Type ?? null,
      oppRef.AccountId,
      payContactId ?? null,
      payContactAccountId,
    );
    if (!rollupAccountId) continue;

    const rollup = rollups.get(rollupAccountId);
    if (!rollup) continue;

    if (payment.npe01__Paid__c) {
      rollup.totalPaid += payment.npe01__Payment_Amount__c;
      if (
        payment.npe01__Payment_Date__c &&
        (!rollup.lastPaidPaymentDate || payment.npe01__Payment_Date__c > rollup.lastPaidPaymentDate)
      ) {
        rollup.lastPaidPaymentDate = payment.npe01__Payment_Date__c;
      }
    } else {
      rollup.pledgesOutstanding += payment.npe01__Payment_Amount__c;
    }
  }

  // --- Convert to DonorContact[] ---

  const result: DonorContact[] = [];

  for (const [accountId, rollup] of rollups) {
    const fiveYearGiving = rollup.fiveYearGiving || null;
    result.push({
      accountId,
      Id: rollup.contact?.id ?? "",
      FirstName: rollup.contact?.firstName ?? null,
      LastName: rollup.contact?.lastName ?? "",
      Name: rollup.contact?.name ?? rollup.accountName,
      Email: rollup.contact?.email ?? null,
      Phone: rollup.contact?.phone ?? null,
      MailingCity: rollup.contact?.mailingCity ?? null,
      MailingState: rollup.contact?.mailingState ?? null,
      Account: { Name: rollup.accountName, Type: rollup.accountType },
      lastCloseDate: rollup.lastCloseDate,
      lastPaidPaymentDate: rollup.lastPaidPaymentDate,
      totalPaid: rollup.totalPaid || null,
      pledgesOutstanding: rollup.pledgesOutstanding || null,
      opportunityCount: rollup.opportunityCount,
      fiveYearGiving,
      givingSocietyTier: getGivingSocietyTier(fiveYearGiving),
    });
  }

  result.sort((a, b) => (b.totalPaid ?? 0) - (a.totalPaid ?? 0));

  return result;
}
