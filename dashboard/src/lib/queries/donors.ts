import { queryAll } from "@/lib/salesforce";
import type { DonorContact } from "@/lib/types";

/** Raw contact fields from SOQL (before payment merge). */
type RawDonorContact = Omit<DonorContact, "lastPaidPaymentDate">;

/** Recent paid payment with its primary contact ID. */
interface RecentPayment {
  npe01__Payment_Date__c: string;
  npe01__Opportunity__r: {
    npsp__Primary_Contact__c: string | null;
  };
}

export async function getDonorContacts(): Promise<DonorContact[]> {
  const [contacts, recentPayments] = await Promise.all([
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
  ]);

  // Build contactId → most recent payment date (first occurrence wins, sorted DESC)
  const lastPaidMap = new Map<string, string>();
  for (const p of recentPayments) {
    const contactId = p.npe01__Opportunity__r?.npsp__Primary_Contact__c;
    if (contactId && !lastPaidMap.has(contactId)) {
      lastPaidMap.set(contactId, p.npe01__Payment_Date__c);
    }
  }

  return contacts.map((c) => ({
    ...c,
    lastPaidPaymentDate: lastPaidMap.get(c.Id) ?? null,
  }));
}
