import { queryAll } from "@/lib/salesforce";
import type { InvoicePayment } from "@/lib/types";

export async function getUnpaidPayments(): Promise<InvoicePayment[]> {
  const payments = await queryAll<InvoicePayment>(`
    SELECT Id, npe01__Payment_Amount__c, npe01__Scheduled_Date__c, npe01__Payment_Method__c, Payment_Link__c, Payment_Acknowledgement_Email_Sent__c,
           npe01__Opportunity__r.Id,
           npe01__Opportunity__r.Name,
           npe01__Opportunity__r.Amount,
           npe01__Opportunity__r.Gift_Type__c,
           npe01__Opportunity__r.Next_payment_link__c,
           npe01__Opportunity__r.CampaignId,
           npe01__Opportunity__r.Campaign.Name,
           npe01__Opportunity__r.Account.Name,
           npe01__Opportunity__r.npsp__Primary_Contact__r.Name,
           npe01__Opportunity__r.npsp__Primary_Contact__r.Email,
           npe01__Opportunity__r.npsp__Primary_Contact__r.Account.Name,
           npe01__Opportunity__r.npsp__Primary_Contact__r.Account.Type,
           npe01__Opportunity__r.Payment_Method__c
    FROM npe01__OppPayment__c
    WHERE npe01__Paid__c = false
      AND npe01__Opportunity__r.StageName != 'Paid in Full'
      AND npe01__Opportunity__r.StageName != 'Write Off'
      AND npe01__Opportunity__r.npsp__Primary_Contact__r.Name != 'Charles E. Bailes IV'
      AND npe01__Opportunity__r.npsp__Primary_Contact__r.Name != 'Rebecca Brown'
      AND npe01__Opportunity__r.npsp__Primary_Contact__r.Name != 'Jodi Boncore'
    ORDER BY npe01__Scheduled_Date__c ASC
  `);

  // Compute per-opportunity totals for financial summary
  const totalUnpaidByOpp = new Map<string, number>();
  for (const p of payments) {
    const oppId = p.npe01__Opportunity__r.Id;
    totalUnpaidByOpp.set(oppId, (totalUnpaidByOpp.get(oppId) ?? 0) + (p.npe01__Payment_Amount__c ?? 0));
  }

  // Use the first day of the current month as the past-due cutoff.
  // Payments scheduled in the current month are NOT considered past due.
  const now = new Date();
  const firstOfMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;

  // Group payments by opp to compute past due per payment
  const paymentsByOpp = new Map<string, InvoicePayment[]>();
  for (const p of payments) {
    const oppId = p.npe01__Opportunity__r.Id;
    if (!paymentsByOpp.has(oppId)) paymentsByOpp.set(oppId, []);
    paymentsByOpp.get(oppId)!.push(p);
  }

  for (const p of payments) {
    const oppId = p.npe01__Opportunity__r.Id;
    const pledgeAmount = p.npe01__Opportunity__r.Amount ?? 0;
    const totalUnpaid = totalUnpaidByOpp.get(oppId) ?? 0;

    // Amount Paid to Date = Initial Pledge - Total Remaining Unpaid
    p.amountPaidToDate = pledgeAmount - totalUnpaid;

    // Past Due Amount = sum of OTHER unpaid payments on this opp scheduled before today
    const siblings = paymentsByOpp.get(oppId) ?? [];
    p.pastDueAmount = siblings
      .filter((s) => s.Id !== p.Id && s.npe01__Scheduled_Date__c && s.npe01__Scheduled_Date__c < firstOfMonth)
      .reduce((sum, s) => sum + (s.npe01__Payment_Amount__c ?? 0), 0);
  }

  return payments;
}
