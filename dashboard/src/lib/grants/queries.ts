// Server-side data access for the Grants UI.
// Uses the service-role Supabase client + jsforce for Account-name resolution.

import { getSupabase } from "@/lib/supabase";
import { getConnection } from "@/lib/salesforce";
import type { UnifiedGrantRow, GrantKpis, FieldDefinition } from "./types";

// Short per-request cache for SF Account names. Next.js server components
// re-run on every request so this is effectively request-scoped.
const accountNameCache = new Map<string, string>();

async function resolveAccountNames(accountIds: string[]): Promise<Map<string, string>> {
  const missing = accountIds.filter((id) => id && !accountNameCache.has(id));
  if (missing.length === 0) {
    return new Map(accountIds.filter(Boolean).map((id) => [id, accountNameCache.get(id)!]));
  }
  const conn = await getConnection();
  // SOQL: batch in 200s
  for (let i = 0; i < missing.length; i += 200) {
    const batch = missing.slice(i, i + 200);
    const ids = batch.map((id) => `'${id}'`).join(",");
    const res = await conn.query<{ Id: string; Name: string }>(
      `SELECT Id, Name FROM Account WHERE Id IN (${ids})`
    );
    for (const r of res.records) accountNameCache.set(r.Id, r.Name);
  }
  return new Map(accountIds.filter(Boolean).map((id) => [id, accountNameCache.get(id) ?? ""]));
}

interface GrantRowRaw {
  id: string;
  name: string | null;
  account_id: string | null;
  stage_name: string | null;
  amount: number | null;
  close_date: string | null;
  is_closed: boolean | null;
  is_won: boolean | null;
}

interface InstrumentlRowRaw {
  id: string;
  opportunity_name: string;
  account_name: string | null;
  status: string | null;
  amount: number | null;
  amount_range: string | null;
  internal_deadline: string | null;
  deadline: string | null;
  sf_opportunity_id: string | null;
}

/**
 * Fetches the unified list for /grants. Merges SF-mirror grants and Instrumentl
 * pipeline rows. Instrumentl rows with sf_opportunity_id set are marked
 * [Linked] and hidden by default.
 */
export async function getUnifiedGrants(): Promise<UnifiedGrantRow[]> {
  const sb = getSupabase();

  const [grantsRes, instRes] = await Promise.all([
    sb
      .from("grants")
      .select(
        "id, name, account_id, stage_name, amount, close_date, is_closed, is_won"
      )
      .order("close_date", { ascending: false, nullsFirst: false }),
    sb
      .from("instrumentl_opportunities")
      .select(
        "id, opportunity_name, account_name, status, amount, amount_range, internal_deadline, deadline, sf_opportunity_id"
      )
      .order("internal_deadline", { ascending: true, nullsFirst: false }),
  ]);

  if (grantsRes.error) throw new Error(`grants query failed: ${grantsRes.error.message}`);
  if (instRes.error) throw new Error(`instrumentl query failed: ${instRes.error.message}`);

  const grantsData = (grantsRes.data ?? []) as GrantRowRaw[];
  const instData = (instRes.data ?? []) as InstrumentlRowRaw[];

  // Resolve SF Account names for grants (and for any Instrumentl row that
  // might have an sf_account_id in the future — not yet populated).
  const accountIds = [
    ...new Set(grantsData.map((g) => g.account_id).filter((x): x is string => !!x)),
  ];
  const accountNames = await resolveAccountNames(accountIds);

  const sfRows: UnifiedGrantRow[] = grantsData.map((g) => ({
    id: g.id,
    source: "sf",
    name: g.name ?? "(unnamed)",
    funder_name: g.account_id ? accountNames.get(g.account_id) ?? null : null,
    sf_account_id: g.account_id,
    status: g.stage_name,
    amount: g.amount,
    amount_range: null,
    internal_deadline: g.close_date,
    deadline: null,
    next_action: null,
    grant_id: g.id,
    instrumentl_id: null,
  }));

  const instRows: UnifiedGrantRow[] = instData.map((i) => {
    const linked = !!i.sf_opportunity_id;
    return {
      id: i.id,
      source: linked ? "linked" : "instrumentl",
      name: i.opportunity_name,
      funder_name: i.account_name,
      sf_account_id: null,
      status: i.status,
      amount: i.amount,
      amount_range: i.amount_range,
      internal_deadline: i.internal_deadline,
      deadline: i.deadline,
      next_action: null,
      grant_id: i.sf_opportunity_id,
      instrumentl_id: i.id,
    };
  });

  // Default view: hide linked Instrumentl rows (SF row takes precedence).
  return [...sfRows, ...instRows.filter((r) => r.source !== "linked")];
}

/**
 * KPIs for the landing page. Simple aggregate queries against grants +
 * grant_reports. FY is July–June per JPF convention.
 */
export async function getGrantKpis(): Promise<GrantKpis> {
  const sb = getSupabase();

  // Current fiscal year (Jul–Jun)
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = now.getUTCMonth(); // 0-indexed
  const fyStart = m >= 6 ? `${y}-07-01` : `${y - 1}-07-01`;
  const fyEnd = m >= 6 ? `${y + 1}-06-30` : `${y}-06-30`;

  const today = now.toISOString().slice(0, 10);
  const in30 = new Date(now.getTime() + 30 * 86_400_000).toISOString().slice(0, 10);
  const in90 = new Date(now.getTime() + 90 * 86_400_000).toISOString().slice(0, 10);

  const [awardedRes, pipelineRes, reports30Res, reportsOverdueRes, renewalsRes] =
    await Promise.all([
      // Awarded total this FY: stage_name in {Awarded- Active, Awarded- Closed, Paid in Full}
      sb
        .from("grants")
        .select("amount", { count: "exact" })
        .gte("close_date", fyStart)
        .lte("close_date", fyEnd)
        .in("stage_name", ["Awarded- Active", "Awarded- Closed", "Paid in Full"]),
      // Pipeline: LOI Submitted / Application Submitted / Prospecting
      sb
        .from("grants")
        .select("amount", { count: "exact" })
        .in("stage_name", [
          "LOI Submitted",
          "Application Submitted",
          "Prospecting",
          "First Contact",
          "Discovery",
          "Engagement Details",
          "Researcing", // sic — SF picklist typo preserved
          "Planned",
        ]),
      // Reports due next 30 days (unsubmitted)
      sb
        .from("grant_reports")
        .select("id", { count: "exact", head: true })
        .is("submitted_date", null)
        .gte("due_date", today)
        .lte("due_date", in30),
      // Reports overdue
      sb
        .from("grant_reports")
        .select("id", { count: "exact", head: true })
        .is("submitted_date", null)
        .lt("due_date", today),
      // Renewals (grant_period_end) in next 90 days
      sb
        .from("grants")
        .select("id", { count: "exact", head: true })
        .gte("npsp_grant_period_end_date_c", today)
        .lte("npsp_grant_period_end_date_c", in90),
    ]);

  const awardedTotal = (awardedRes.data ?? []).reduce(
    (sum, r) => sum + (typeof r.amount === "number" ? r.amount : 0),
    0
  );
  const pipelineTotal = (pipelineRes.data ?? []).reduce(
    (sum, r) => sum + (typeof r.amount === "number" ? r.amount : 0),
    0
  );

  return {
    fy_awarded_total: awardedTotal,
    fy_awarded_count: awardedRes.count ?? 0,
    pipeline_value: pipelineTotal,
    pipeline_count: pipelineRes.count ?? 0,
    reports_due_30d: reports30Res.count ?? 0,
    reports_overdue: reportsOverdueRes.count ?? 0,
    renewals_next_90d: renewalsRes.count ?? 0,
  };
}

export async function getFieldDefinitions(): Promise<FieldDefinition[]> {
  const sb = getSupabase();
  const { data, error } = await sb
    .from("field_definitions")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw new Error(`field_definitions query: ${error.message}`);
  return (data ?? []) as FieldDefinition[];
}
