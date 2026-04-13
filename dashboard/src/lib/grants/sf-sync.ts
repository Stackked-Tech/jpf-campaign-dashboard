import { getConnection } from "@/lib/salesforce";
import type { Grant } from "@/lib/grants/types";

export interface SfSyncResult {
  ok: boolean;
  sf_opportunity_id?: string;
  error?: string;
}

/** Upsert an SF Opportunity for a grant that's been marked awarded. */
export async function syncGrantToSalesforce(grant: Grant): Promise<SfSyncResult> {
  try {
    const conn = await getConnection();
    const oppName = grant.program_name
      ? `${grant.funder_name} - ${grant.program_name}`
      : `${grant.funder_name} - Grant`;

    const payload = {
      Name: oppName,
      StageName: "Awarded",
      CloseDate: grant.award_date ?? new Date().toISOString().slice(0, 10),
      Amount: grant.amount_awarded ?? 0,
      ...(grant.sf_account_id ? { AccountId: grant.sf_account_id } : {}),
      Type: "Grant Received",
    };

    if (grant.sf_opportunity_id) {
      await conn.sobject("Opportunity").update({ Id: grant.sf_opportunity_id, ...payload });
      return { ok: true, sf_opportunity_id: grant.sf_opportunity_id };
    }

    const result = (await conn.sobject("Opportunity").create(payload)) as { id: string; success: boolean; errors?: unknown[] };
    if (!result.success || !result.id) {
      return { ok: false, error: `SF create failed: ${JSON.stringify(result.errors)}` };
    }
    return { ok: true, sf_opportunity_id: result.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
