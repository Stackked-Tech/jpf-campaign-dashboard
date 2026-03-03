import { queryAll } from "@/lib/salesforce";
import type { Opportunity, GiftTypeGroup, CampaignSummary } from "@/lib/types";

export async function getOpportunitiesByCampaign(
  campaignId: string
): Promise<Opportunity[]> {
  return queryAll<Opportunity>(`
    SELECT Id, Name, Amount, StageName, CloseDate, Gift_Type__c,
           RecordType.Name, Account.Name,
           npsp__Primary_Contact__r.Name,
           (SELECT Id, npe01__Payment_Amount__c, npe01__Scheduled_Date__c,
                   npe01__Payment_Date__c, npe01__Paid__c, npe01__Payment_Method__c
            FROM npe01__OppPayment__r
            ORDER BY npe01__Scheduled_Date__c ASC)
    FROM Opportunity
    WHERE CampaignId = '${campaignId}'
    ORDER BY Gift_Type__c, CloseDate
  `);
}

export function groupByGiftType(opportunities: Opportunity[]): GiftTypeGroup[] {
  const groups = new Map<string, Opportunity[]>();

  for (const opp of opportunities) {
    const key = opp.Gift_Type__c || "Uncategorized";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(opp);
  }

  return Array.from(groups.entries()).map(([giftType, opps]) => {
    let totalPaid = 0;
    let totalUnpaid = 0;

    for (const opp of opps) {
      const payments = opp.npe01__OppPayment__r?.records ?? [];
      for (const p of payments) {
        const amt = p.npe01__Payment_Amount__c ?? 0;
        if (p.npe01__Paid__c) {
          totalPaid += amt;
        } else {
          totalUnpaid += amt;
        }
      }
    }

    const totalAmount = opps.reduce((sum, o) => sum + (o.Amount ?? 0), 0);

    return {
      giftType,
      opportunities: opps,
      count: opps.length,
      totalAmount,
      totalPaid,
      totalUnpaid,
    };
  });
}

export function computeSummary(
  opportunities: Opportunity[]
): CampaignSummary {
  let totalAmount = 0;
  let totalPaid = 0;
  let totalOutstanding = 0;

  for (const opp of opportunities) {
    totalAmount += opp.Amount ?? 0;
    const payments = opp.npe01__OppPayment__r?.records ?? [];
    for (const p of payments) {
      const amt = p.npe01__Payment_Amount__c ?? 0;
      if (p.npe01__Paid__c) {
        totalPaid += amt;
      } else {
        totalOutstanding += amt;
      }
    }
  }

  return {
    totalOpportunities: opportunities.length,
    totalAmount,
    totalPaid,
    totalOutstanding,
  };
}
