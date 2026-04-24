import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getReportsCalendar } from "@/lib/grants/reports-calendar";
import { ReportsCalendar } from "@/components/grants/reports-calendar";

export const dynamic = "force-dynamic";

export default async function ReportsPage() {
  // Fetch a year-wide window so the user can flip months without refetching
  const now = new Date();
  const fromYear = now.getFullYear() - 1;
  const toYear = now.getFullYear() + 1;
  const from = `${fromYear}-01-01`;
  const to = `${toYear}-12-31`;

  const reports = await getReportsCalendar(from, to);
  const initialMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  return (
    <div className="space-y-6">
      <Link
        href="/grants"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-3 w-3" />
        All grants
      </Link>

      <div>
        <h1 className="text-2xl font-bold">Reports calendar</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Every reporting deadline across all grants. Click a report to open
          its grant.
        </p>
      </div>

      {reports.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center text-sm text-muted-foreground">
          No reports scheduled yet. Add reports from a grant&apos;s Reports
          panel to see them here.
        </div>
      ) : (
        <ReportsCalendar reports={reports} initialMonth={initialMonth} />
      )}
    </div>
  );
}
