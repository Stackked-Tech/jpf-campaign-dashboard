import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import type { GrantReport } from "@/lib/grants/types";

export const dynamic = "force-dynamic";

export default async function ReportsIndexPage() {
  const s = getSupabase();
  const { data: reports } = await s.from("grant_reports")
    .select("*").order("due_date", { ascending: true });
  const { data: grants } = await s.from("grants").select("id, funder_name");
  const byId = new Map((grants ?? []).map((g) => [g.id, g.funder_name]));
  const today = new Date().toISOString().slice(0, 10);
  const pending = (reports as GrantReport[] | null ?? []).filter((r) => !r.submitted_date);
  const submitted = (reports as GrantReport[] | null ?? []).filter((r) => r.submitted_date);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Reports</h1>
        <p className="text-sm text-muted-foreground mt-1">All reports across all grants</p>
      </div>

      <section className="rounded-lg border border-border bg-card">
        <header className="px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold">Outstanding</h2>
        </header>
        <table className="w-full text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="text-left px-4 py-2 font-medium">Grant</th>
              <th className="text-left px-4 py-2 font-medium">Report</th>
              <th className="text-left px-4 py-2 font-medium">Due</th>
              <th className="text-left px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pending.length === 0 && (
              <tr><td className="px-4 py-6 text-center text-muted-foreground" colSpan={4}>None outstanding.</td></tr>
            )}
            {pending.map((r) => {
              const overdue = r.due_date < today;
              return (
                <tr key={r.id} className="hover:bg-muted/50">
                  <td className="px-4 py-2">
                    <Link href={`/grants/${r.grant_id}`} className="hover:underline">
                      {byId.get(r.grant_id) ?? "—"}
                    </Link>
                  </td>
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{formatDate(r.due_date)}</td>
                  <td className="px-4 py-2">
                    {overdue ? (
                      <span className="inline-flex items-center rounded-full bg-red-100 text-red-800 px-2 py-0.5 text-xs font-semibold">Overdue</span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-xs font-semibold">Upcoming</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {submitted.length > 0 && (
        <section className="rounded-lg border border-border bg-card">
          <header className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold">Submitted</h2>
          </header>
          <table className="w-full text-sm">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="text-left px-4 py-2 font-medium">Grant</th>
                <th className="text-left px-4 py-2 font-medium">Report</th>
                <th className="text-left px-4 py-2 font-medium">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {submitted.map((r) => (
                <tr key={r.id} className="hover:bg-muted/50">
                  <td className="px-4 py-2">
                    <Link href={`/grants/${r.grant_id}`} className="hover:underline">
                      {byId.get(r.grant_id) ?? "—"}
                    </Link>
                  </td>
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{formatDate(r.submitted_date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}
