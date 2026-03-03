import type { CampaignSummary as CampaignSummaryType } from "@/lib/types";
import { StatsCard } from "@/components/stats-card";
import { formatCurrency } from "@/lib/utils";

interface CampaignSummaryProps {
  summary: CampaignSummaryType;
}

export function CampaignSummary({ summary }: CampaignSummaryProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        label="Opportunities"
        value={String(summary.totalOpportunities)}
      />
      <StatsCard
        label="Total Amount"
        value={formatCurrency(summary.totalAmount)}
      />
      <StatsCard
        label="Total Paid"
        value={formatCurrency(summary.totalPaid)}
        className="border-success/20 bg-success-light"
      />
      <StatsCard
        label="Outstanding"
        value={formatCurrency(summary.totalOutstanding)}
        className="border-warning/20 bg-warning-light"
      />
    </div>
  );
}
