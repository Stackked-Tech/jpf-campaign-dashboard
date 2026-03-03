import { queryAll } from "@/lib/salesforce";
import type { InvoicePayment } from "@/lib/types";

export async function getUnpaidPayments(): Promise<InvoicePayment[]> {
  return queryAll<InvoicePayment>(`
    SELECT Id, npe01__Payment_Amount__c, npe01__Scheduled_Date__c, npe01__Payment_Method__c,
           npe01__Opportunity__r.Name,
           npe01__Opportunity__r.Gift_Type__c,
           npe01__Opportunity__r.CampaignId,
           npe01__Opportunity__r.Campaign.Name,
           npe01__Opportunity__r.Account.Name,
           npe01__Opportunity__r.npsp__Primary_Contact__r.Name,
           npe01__Opportunity__r.npsp__Primary_Contact__r.Account.Name,
           npe01__Opportunity__r.npsp__Primary_Contact__r.Account.Type,
           npe01__Opportunity__r.Payment_Method__c
    FROM npe01__OppPayment__c
    WHERE npe01__Paid__c = false
      AND npe01__Opportunity__r.Campaign.Type = 'Fundraising'
    ORDER BY npe01__Scheduled_Date__c ASC
  `);
}
