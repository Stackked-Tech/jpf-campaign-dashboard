import { StatsCard } from "@/components/stats-card";
import { formatCurrency } from "@/lib/utils";
import type { GrantKpis } from "@/lib/grants/types";

export function KpiCards({ kpis }: { kpis: GrantKpis }) {
  const reportsSubtext =
    kpis.reports_overdue > 0
      ? `${kpis.reports_overdue} overdue`
      : kpis.reports_due_30d === 0
        ? "None due"
        : "next 30 days";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        label="FY Awarded"
        value={formatCurrency(kpis.fy_awarded_total)}
        subtext={`${kpis.fy_awarded_count} grants`}
      />
      <StatsCard
        label="Pipeline Value"
        value={formatCurrency(kpis.pipeline_value)}
        subtext={`${kpis.pipeline_count} active pursuits`}
      />
      <StatsCard
        label="Reports Due"
        value={String(kpis.reports_due_30d + kpis.reports_overdue)}
        subtext={reportsSubtext}
        className={kpis.reports_overdue > 0 ? "ring-1 ring-red-200" : undefined}
      />
      <StatsCard
        label="Renewals"
        value={String(kpis.renewals_next_90d)}
        subtext="next 90 days"
      />
    </div>
  );
}
