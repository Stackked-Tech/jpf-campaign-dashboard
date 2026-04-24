import { getSupabase } from "@/lib/supabase";
import { getConnection } from "@/lib/salesforce";

export interface ReportCalendarEntry {
  id: string;
  grant_id: string;
  name: string;
  due_date: string;
  submitted_date: string | null;
  status: string;
  grant_name: string | null;
  funder_name: string | null;
}

/**
 * Fetches all grant_reports across all grants, enriched with the parent
 * grant's name and funder name (via SF Account lookup).
 */
export async function getReportsCalendar(
  fromDate: string,
  toDate: string
): Promise<ReportCalendarEntry[]> {
  const sb = getSupabase();
  const { data: reports, error } = await sb
    .from("grant_reports")
    .select("*")
    .gte("due_date", fromDate)
    .lte("due_date", toDate)
    .order("due_date", { ascending: true });
  if (error) throw new Error(`reports calendar: ${error.message}`);
  if (!reports || reports.length === 0) return [];

  const grantIds = [...new Set(reports.map((r) => r.grant_id))];
  const { data: grants } = await sb
    .from("grants")
    .select("id, name, account_id")
    .in("id", grantIds);

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

  const grantMap = new Map<
    string,
    { name: string | null; account_id: string | null }
  >();
  for (const g of grants ?? []) {
    grantMap.set(g.id as string, {
      name: g.name as string | null,
      account_id: g.account_id as string | null,
    });
  }

  return reports.map((r) => {
    const parent = grantMap.get(r.grant_id);
    return {
      id: r.id as string,
      grant_id: r.grant_id as string,
      name: r.name as string,
      due_date: r.due_date as string,
      submitted_date: (r.submitted_date as string | null) ?? null,
      status: r.status as string,
      grant_name: parent?.name ?? null,
      funder_name:
        parent?.account_id ? accountMap.get(parent.account_id) ?? null : null,
    };
  });
}
