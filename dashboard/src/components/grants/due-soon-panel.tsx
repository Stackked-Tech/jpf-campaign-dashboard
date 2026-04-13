import Link from "next/link";
import { FileText, CalendarClock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Grant, GrantReport } from "@/lib/grants/types";

interface Props {
  reports: GrantReport[];
  renewals: Grant[];
  grantNameById: Record<string, string>;
}

function daysUntil(date: string): number {
  const d = new Date(date).getTime();
  return Math.ceil((d - Date.now()) / 86400_000);
}

export function DueSoonPanel({ reports, renewals, grantNameById }: Props) {
  if (reports.length === 0 && renewals.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
        Nothing due in the next 30 days.
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {reports.length > 0 && (
        <section className="rounded-lg border border-border bg-card">
          <header className="px-4 py-3 border-b border-border flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold">Reports due in 30 days</h2>
          </header>
          <ul className="divide-y divide-border">
            {reports.map((r) => (
              <li key={r.id} className="px-4 py-3 flex items-center justify-between text-sm">
                <Link href={`/grants/${r.grant_id}`} className="hover:underline font-medium">
                  {r.name} — {grantNameById[r.grant_id] ?? "Grant"}
                </Link>
                <span className="text-muted-foreground">
                  {formatDate(r.due_date)} ({daysUntil(r.due_date)}d)
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {renewals.length > 0 && (
        <section className="rounded-lg border border-border bg-card">
          <header className="px-4 py-3 border-b border-border flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold">Renewals due in 60 days</h2>
          </header>
          <ul className="divide-y divide-border">
            {renewals.map((g) => (
              <li key={g.id} className="px-4 py-3 flex items-center justify-between text-sm">
                <Link href={`/grants/${g.id}`} className="hover:underline font-medium">
                  {g.funder_name}
                </Link>
                <span className="text-muted-foreground">
                  {formatDate(g.renewal_due_date)} ({daysUntil(g.renewal_due_date!)}d)
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
