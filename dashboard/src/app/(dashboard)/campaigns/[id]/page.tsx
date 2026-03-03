import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCampaign } from "@/lib/queries/campaigns";
import {
  getOpportunitiesByCampaign,
  groupByGiftType,
  computeSummary,
} from "@/lib/queries/opportunities";
import { getInstanceUrl } from "@/lib/salesforce";
import { CampaignSummary } from "@/components/campaign-summary";
import { GiftTypeGroup } from "@/components/gift-type-group";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CampaignDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [campaign, opportunities] = await Promise.all([
    getCampaign(id),
    getOpportunitiesByCampaign(id),
  ]);

  if (!campaign) notFound();

  const instanceUrl = await getInstanceUrl();
  const summary = computeSummary(opportunities);
  const groups = groupByGiftType(opportunities);

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/campaigns"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-3"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Campaigns
        </Link>
        <div className="flex items-baseline gap-3">
          <h1 className="text-2xl font-bold">{campaign.Name}</h1>
          <span className="inline-flex items-center rounded-full bg-success-light px-2.5 py-0.5 text-xs font-semibold text-success">
            {campaign.Status}
          </span>
        </div>
        {(campaign.StartDate || campaign.EndDate) && (
          <p className="text-sm text-muted-foreground mt-1">
            {formatDate(campaign.StartDate)}
            {campaign.EndDate ? ` — ${formatDate(campaign.EndDate)}` : ""}
          </p>
        )}
      </div>

      <CampaignSummary summary={summary} />

      {groups.length === 0 ? (
        <p className="text-muted-foreground py-8 text-center">
          No opportunities found for this campaign.
        </p>
      ) : (
        <div className="space-y-8">
          {groups.map((group) => (
            <GiftTypeGroup key={group.giftType} group={group} instanceUrl={instanceUrl} />
          ))}
        </div>
      )}
    </div>
  );
}
