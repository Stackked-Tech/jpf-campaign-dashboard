import { queryAll } from "@/lib/salesforce";

function getFYStart(): string {
  const now = new Date();
  const year = now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
  return `${year}-07-01`;
}

export interface DevPayment {
  Id: string;
  npe01__Payment_Amount__c: number | null;
  npe01__Payment_Date__c: string | null;
  npe01__Opportunity__r: {
    Name: string;
    Account: { Name: string; Type: string | null } | null;
  };
}

export async function getFYPayments(): Promise<DevPayment[]> {
  const fyStart = getFYStart();
  return queryAll<DevPayment>(`
    SELECT Id, npe01__Payment_Amount__c, npe01__Payment_Date__c,
           npe01__Opportunity__r.Name,
           npe01__Opportunity__r.Account.Name,
           npe01__Opportunity__r.Account.Type
    FROM npe01__OppPayment__c
    WHERE npe01__Paid__c = true
      AND npe01__Payment_Date__c >= ${fyStart}
    ORDER BY npe01__Payment_Date__c ASC
  `);
}
