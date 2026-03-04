import { getFundraisingCampaigns } from "@/lib/queries/campaigns";
import { CampaignList } from "@/components/campaign-list";
import { StatsCard } from "@/components/stats-card";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function CampaignsPage() {
  const campaigns = await getFundraisingCampaigns();

  const totalOpps = campaigns.reduce(
    (sum, c) => sum + c.NumberOfOpportunities,
    0
  );
  const totalAmount = campaigns.reduce(
    (sum, c) => sum + (c.AmountAllOpportunities ?? 0),
    0
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Fundraising Campaigns</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Overview of all fundraising campaigns
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatsCard label="Campaigns" value={String(campaigns.length)} />
        <StatsCard label="Total Opportunities" value={String(totalOpps)} />
        <StatsCard label="Total Amount" value={formatCurrency(totalAmount)} />
      </div>

      <CampaignList campaigns={campaigns} />
    </div>
  );
}
