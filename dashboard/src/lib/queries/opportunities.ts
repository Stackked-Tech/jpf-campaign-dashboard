import { queryAll } from "@/lib/salesforce";
import type { Opportunity, GiftTypeGroup, CampaignSummary } from "@/lib/types";

export async function getOpportunitiesByCampaign(
  campaignId: string
): Promise<Opportunity[]> {
  return queryAll<Opportunity>(`
    SELECT Id, Name, Amount, StageName, CloseDate, Gift_Type__c,
           RecordType.Name, Account.Name,
           npsp__Primary_Contact__r.Name,
           npsp__Primary_Contact__r.Id,
           npsp__Primary_Contact__r.npo02__NumberOfClosedOpps__c,
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

  // % Collected and Average Gift
  const percentCollected =
    totalAmount > 0 ? (totalPaid / totalAmount) * 100 : 0;
  const averageGift =
    opportunities.length > 0 ? totalAmount / opportunities.length : 0;

  // Gift Type Breakdown
  const giftTypeMap = new Map<string, { count: number; amount: number }>();
  for (const opp of opportunities) {
    const key = opp.Gift_Type__c || "Uncategorized";
    const entry = giftTypeMap.get(key) ?? { count: 0, amount: 0 };
    entry.count += 1;
    entry.amount += opp.Amount ?? 0;
    giftTypeMap.set(key, entry);
  }
  const giftTypeBreakdown = Array.from(giftTypeMap.entries())
    .map(([giftType, { count, amount }]) => ({ giftType, count, amount }))
    .sort((a, b) => b.amount - a.amount);

  // New vs. Returning donors (deduplicated by contact Id)
  const contactMap = new Map<string, number | null>();
  for (const opp of opportunities) {
    const contact = opp.npsp__Primary_Contact__r;
    if (!contact) continue;
    if (!contactMap.has(contact.Id)) {
      contactMap.set(contact.Id, contact.npo02__NumberOfClosedOpps__c);
    }
  }
  let newDonors = 0;
  let returningDonors = 0;
  for (const closedOpps of contactMap.values()) {
    if (closedOpps != null && closedOpps > 1) {
      returningDonors += 1;
    } else {
      newDonors += 1;
    }
  }

  return {
    totalOpportunities: opportunities.length,
    totalAmount,
    totalPaid,
    totalOutstanding,
    percentCollected,
    averageGift,
    giftTypeBreakdown,
    newDonors,
    returningDonors,
  };
}
