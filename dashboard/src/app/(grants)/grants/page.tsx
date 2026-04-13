import Link from "next/link";
import { getDueSoonReports, getUpcomingRenewals, getGrants } from "@/lib/grants/queries";
import { DueSoonPanel } from "@/components/grants/due-soon-panel";
import { StatsCard } from "@/components/stats-card";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function GrantsLandingPage() {
  const [reports, renewals, allGrants] = await Promise.all([
    getDueSoonReports(30),
    getUpcomingRenewals(60),
    getGrants(),
  ]);

  const active = allGrants.filter((g) => g.status !== "declined");
  const awardedTotal = allGrants
    .filter((g) => g.status === "awarded" || g.status === "received" || g.status === "open")
    .reduce((sum, g) => sum + (g.amount_awarded ?? g.amount_received ?? 0), 0);
  const pendingTotal = allGrants
    .filter((g) => g.status === "pending")
    .reduce((sum, g) => sum + (g.request_amount ?? 0), 0);

  const grantNameById: Record<string, string> = Object.fromEntries(
    allGrants.map((g) => [g.id, g.funder_name])
  );

  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-bold">Grants Hub</h1>
          <p className="text-sm text-muted-foreground mt-1">Overview of grant pipeline and upcoming work</p>
        </div>
        <Link
          href="/grants/new"
          className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90"
        >
          + New grant
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatsCard label="Active grants" value={String(active.length)} />
        <StatsCard label="Awarded / received" value={formatCurrency(awardedTotal)} />
        <StatsCard label="Pending requests" value={formatCurrency(pendingTotal)} />
      </div>
      <DueSoonPanel reports={reports} renewals={renewals} grantNameById={grantNameById} />
    </div>
  );
}
