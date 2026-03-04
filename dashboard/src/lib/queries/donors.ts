import { queryAll } from "@/lib/salesforce";
import type { DonorContact } from "@/lib/types";
import { getGivingSocietyTier } from "@/lib/types";

/** Raw contact fields from SOQL (before payment/giving merge). */
type RawDonorContact = Omit<DonorContact, "lastPaidPaymentDate" | "totalPaid" | "pledgesOutstanding" | "opportunityCount" | "fiveYearGiving" | "givingSocietyTier">;

/** Recent paid payment with its primary contact ID. */
interface RecentPayment {
  npe01__Payment_Date__c: string;
  npe01__Opportunity__r: {
    npsp__Primary_Contact__c: string | null;
  };
}

/** Payment with amount and contact ID. */
interface ContactPayment {
  npe01__Payment_Amount__c: number;
  npe01__Opportunity__r: {
    npsp__Primary_Contact__c: string | null;
  };
}

/** Opportunity ID for counting per contact. */
interface ContactOpp {
  npsp__Primary_Contact__c: string;
}

/** Opportunity record for 5-year giving calculation. */
interface FiveYearOpp {
  npsp__Primary_Contact__c: string;
  Amount: number;
}

/** Compute the start date for the past 5 full fiscal years (July–June). */
function getFiveYearFYStart(): string {
  const now = new Date();
  const currentFYStartYear = now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
  return `${currentFYStartYear - 5}-07-01`;
}

export async function getDonorContacts(): Promise<DonorContact[]> {
  const fiveYearStart = getFiveYearFYStart();

  const [contacts, recentPayments, fiveYearOpps, paidPayments, unpaidPayments, allOpps] = await Promise.all([
    queryAll<RawDonorContact>(`
      SELECT Id, FirstName, LastName, Name, Email, Phone,
             MailingCity, MailingState,
             Account.Name, Account.Type,
             npo02__TotalOppAmount__c, npo02__NumberOfClosedOpps__c,
             npo02__FirstCloseDate__c, npo02__LastCloseDate__c,
             npo02__OppAmountThisYear__c, npo02__OppAmountLastYear__c,
             npo02__LargestAmount__c, npo02__AverageAmount__c
      FROM Contact
      WHERE Contact_Type__c INCLUDES ('Donor')
      ORDER BY npo02__TotalOppAmount__c DESC NULLS LAST
    `),
    queryAll<RecentPayment>(`
      SELECT npe01__Payment_Date__c,
             npe01__Opportunity__r.npsp__Primary_Contact__c
      FROM npe01__OppPayment__c
      WHERE npe01__Paid__c = true
        AND npe01__Payment_Date__c != null
        AND npe01__Opportunity__r.npsp__Primary_Contact__c != null
        AND npe01__Payment_Date__c >= LAST_N_YEARS:3
      ORDER BY npe01__Payment_Date__c DESC
    `),
    queryAll<FiveYearOpp>(`
      SELECT npsp__Primary_Contact__c, Amount
      FROM Opportunity
      WHERE npsp__Primary_Contact__c != null
        AND CloseDate >= ${fiveYearStart}
        AND StageName != 'Closed Lost'
        AND Amount > 0
    `),
    queryAll<ContactPayment>(`
      SELECT npe01__Payment_Amount__c,
             npe01__Opportunity__r.npsp__Primary_Contact__c
      FROM npe01__OppPayment__c
      WHERE npe01__Paid__c = true
        AND npe01__Payment_Amount__c > 0
        AND npe01__Opportunity__r.npsp__Primary_Contact__c != null
        AND npe01__Opportunity__r.StageName != 'Closed Lost'
    `),
    queryAll<ContactPayment>(`
      SELECT npe01__Payment_Amount__c,
             npe01__Opportunity__r.npsp__Primary_Contact__c
      FROM npe01__OppPayment__c
      WHERE npe01__Paid__c = false
        AND npe01__Payment_Amount__c > 0
        AND npe01__Opportunity__r.npsp__Primary_Contact__c != null
        AND npe01__Opportunity__r.StageName != 'Closed Lost'
    `),
    queryAll<ContactOpp>(`
      SELECT npsp__Primary_Contact__c
      FROM Opportunity
      WHERE npsp__Primary_Contact__c != null
        AND StageName != 'Closed Lost'
    `),
  ]);

  // Build contactId → most recent payment date (first occurrence wins, sorted DESC)
  const lastPaidMap = new Map<string, string>();
  for (const p of recentPayments) {
    const contactId = p.npe01__Opportunity__r?.npsp__Primary_Contact__c;
    if (contactId && !lastPaidMap.has(contactId)) {
      lastPaidMap.set(contactId, p.npe01__Payment_Date__c);
    }
  }

  // Sum opportunity amounts per contact for 5-year giving
  const fiveYearMap = new Map<string, number>();
  for (const opp of fiveYearOpps) {
    const id = opp.npsp__Primary_Contact__c;
    fiveYearMap.set(id, (fiveYearMap.get(id) ?? 0) + opp.Amount);
  }

  // Sum paid payments per contact
  const totalPaidMap = new Map<string, number>();
  for (const p of paidPayments) {
    const id = p.npe01__Opportunity__r?.npsp__Primary_Contact__c;
    if (id) totalPaidMap.set(id, (totalPaidMap.get(id) ?? 0) + p.npe01__Payment_Amount__c);
  }

  // Sum unpaid payments per contact
  const outstandingMap = new Map<string, number>();
  for (const p of unpaidPayments) {
    const id = p.npe01__Opportunity__r?.npsp__Primary_Contact__c;
    if (id) outstandingMap.set(id, (outstandingMap.get(id) ?? 0) + p.npe01__Payment_Amount__c);
  }

  // Count opportunities per contact
  const oppCountMap = new Map<string, number>();
  for (const opp of allOpps) {
    const id = opp.npsp__Primary_Contact__c;
    oppCountMap.set(id, (oppCountMap.get(id) ?? 0) + 1);
  }

  return contacts.map((c) => {
    const fiveYearGiving = fiveYearMap.get(c.Id) ?? null;
    const totalPaid = totalPaidMap.get(c.Id) ?? null;
    const outstanding = outstandingMap.get(c.Id) ?? null;
    return {
      ...c,
      lastPaidPaymentDate: lastPaidMap.get(c.Id) ?? null,
      totalPaid,
      pledgesOutstanding: outstanding,
      opportunityCount: oppCountMap.get(c.Id) ?? 0,
      fiveYearGiving,
      givingSocietyTier: getGivingSocietyTier(fiveYearGiving),
    };
  });
}
