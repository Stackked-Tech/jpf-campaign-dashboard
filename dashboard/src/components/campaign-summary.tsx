import type { CampaignSummary as CampaignSummaryType } from "@/lib/types";
import { StatsCard } from "@/components/stats-card";
import { formatCurrency } from "@/lib/utils";

interface CampaignSummaryProps {
  summary: CampaignSummaryType;
}

export function CampaignSummary({ summary }: CampaignSummaryProps) {
  const topGiftType = summary.giftTypeBreakdown[0];
  const totalDonors = summary.newDonors + summary.returningDonors;

  return (
    <div className="space-y-4">
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          label="% Collected"
          value={`${summary.percentCollected.toFixed(1)}%`}
        />
        <StatsCard
          label="Avg Gift"
          value={formatCurrency(summary.averageGift)}
        />
        <StatsCard
          label="Gift Types"
          value={`${summary.giftTypeBreakdown.length} type${summary.giftTypeBreakdown.length !== 1 ? "s" : ""}`}
          subtext={
            topGiftType
              ? `${topGiftType.giftType}: ${formatCurrency(topGiftType.amount)}`
              : undefined
          }
        />
        <StatsCard
          label="Donors"
          value={`${totalDonors} total`}
          subtext={`${summary.newDonors} new · ${summary.returningDonors} returning`}
        />
      </div>
    </div>
  );
}
