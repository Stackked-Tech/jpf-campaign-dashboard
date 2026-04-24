import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getConnection } from "@/lib/salesforce";
import { scoreCandidates } from "@/lib/grants/fuzzy-match";

/**
 * GET /api/grants/instrumentl/[id]/candidates
 * Returns the top 10 SF grants ranked by name-token similarity, for use in
 * the "Link to SF grant" picker.
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sb = getSupabase();

  const { data: inst, error: instErr } = await sb
    .from("instrumentl_opportunities")
    .select("id, opportunity_name, account_name")
    .eq("id", id)
    .maybeSingle();
  if (instErr)
    return NextResponse.json({ error: instErr.message }, { status: 500 });
  if (!inst) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { data: grants, error: grantsErr } = await sb
    .from("grants")
    .select("id, name, account_id, stage_name, amount, close_date");
  if (grantsErr)
    return NextResponse.json({ error: grantsErr.message }, { status: 500 });

  // Resolve SF Account names for every grant.account_id
  const accountIds = [
    ...new Set(
      (grants ?? []).map((g) => g.account_id).filter((x): x is string => !!x)
    ),
  ];
  const accountMap = new Map<string, string>();
  if (accountIds.length > 0) {
    const conn = await getConnection();
    for (let i = 0; i < accountIds.length; i += 200) {
      const batch = accountIds.slice(i, i + 200);
      const idsList = batch.map((x) => `'${x}'`).join(",");
      const res = await conn.query<{ Id: string; Name: string }>(
        `SELECT Id, Name FROM Account WHERE Id IN (${idsList})`
      );
      for (const r of res.records) accountMap.set(r.Id, r.Name);
    }
  }

  const enriched = (grants ?? []).map((g) => ({
    id: g.id,
    name: g.name,
    account_name: g.account_id ? accountMap.get(g.account_id) ?? null : null,
    stage_name: g.stage_name,
    amount: g.amount,
    close_date: g.close_date,
  }));

  const candidates = scoreCandidates(
    inst.account_name as string | null,
    inst.opportunity_name as string,
    enriched
  );

  return NextResponse.json({ candidates });
}
