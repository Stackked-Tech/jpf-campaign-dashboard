import { queryAll } from "@/lib/salesforce";
import type { Campaign } from "@/lib/types";

export async function getActiveCampaigns(): Promise<Campaign[]> {
  return queryAll<Campaign>(`
    SELECT Id, Name, Status, Type, StartDate, EndDate, IsActive,
           NumberOfOpportunities, AmountAllOpportunities
    FROM Campaign
    WHERE IsActive = true
      AND Type = 'Fundraising'
      AND NumberOfOpportunities > 0
    ORDER BY StartDate DESC NULLS LAST
  `);
}

export async function getCampaign(id: string): Promise<Campaign | null> {
  const results = await queryAll<Campaign>(`
    SELECT Id, Name, Status, Type, StartDate, EndDate, IsActive,
           NumberOfOpportunities, AmountAllOpportunities
    FROM Campaign
    WHERE Id = '${id}'
      AND Type = 'Fundraising'
    LIMIT 1
  `);
  return results[0] ?? null;
}
