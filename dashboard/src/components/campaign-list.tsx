import Link from "next/link";
import type { Campaign } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface CampaignListProps {
  campaigns: Campaign[];
}

export function CampaignList({ campaigns }: CampaignListProps) {
  if (campaigns.length === 0) {
    return (
      <p className="text-muted-foreground py-8 text-center">
        No active campaigns found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/60">
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Name</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Type</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Start Date</th>
            <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground"># Opps</th>
            <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Total Amount</th>
            <th className="w-8"></th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c) => (
            <tr
              key={c.Id}
              className="border-b border-border last:border-0 hover:bg-accent/40 transition-colors group"
            >
              <td className="px-5 py-3.5">
                <Link
                  href={`/campaigns/${c.Id}`}
                  className="text-primary hover:underline font-semibold"
                >
                  {c.Name}
                </Link>
              </td>
              <td className="px-5 py-3.5">
                <span className="inline-flex items-center rounded-full bg-success-light px-2.5 py-0.5 text-xs font-semibold text-success">
                  {c.Status}
                </span>
              </td>
              <td className="px-5 py-3.5 text-muted-foreground">
                {c.Type || "—"}
              </td>
              <td className="px-5 py-3.5 text-muted-foreground">
                {formatDate(c.StartDate)}
              </td>
              <td className="px-5 py-3.5 text-right tabular-nums">
                {c.NumberOfOpportunities}
              </td>
              <td className="px-5 py-3.5 text-right tabular-nums font-semibold">
                {formatCurrency(c.AmountAllOpportunities)}
              </td>
              <td className="pr-3">
                <ChevronRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
