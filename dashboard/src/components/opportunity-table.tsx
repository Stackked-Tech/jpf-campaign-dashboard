import type { Opportunity } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { SfLink } from "./sf-link";

interface OpportunityTableProps {
  opportunities: Opportunity[];
  instanceUrl: string;
}

export function OpportunityTable({ opportunities, instanceUrl }: OpportunityTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/60">
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Name</th>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contact</th>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Account</th>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Stage</th>
            <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Close Date</th>
            <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Amount</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((opp) => (
            <tr
              key={opp.Id}
              className="border-b border-border last:border-0 hover:bg-accent/40 transition-colors"
            >
              <td className="px-5 py-3 font-medium">
                <SfLink instanceUrl={instanceUrl} recordId={opp.Id}>
                  {opp.Name}
                </SfLink>
              </td>
              <td className="px-5 py-3 text-muted-foreground">
                {opp.npsp__Primary_Contact__r?.Name ?? "—"}
              </td>
              <td className="px-5 py-3 text-muted-foreground">
                {opp.Account?.Name ?? "—"}
              </td>
              <td className="px-5 py-3">
                <StageBadge stage={opp.StageName} />
              </td>
              <td className="px-5 py-3 text-muted-foreground">
                {formatDate(opp.CloseDate)}
              </td>
              <td className="px-5 py-3 text-right tabular-nums font-semibold">
                {formatCurrency(opp.Amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StageBadge({ stage }: { stage: string }) {
  const isWon = stage.toLowerCase().includes("closed won") || stage.toLowerCase().includes("pledged");
  const isLost = stage.toLowerCase().includes("closed lost");

  const colorClass = isWon
    ? "bg-success-light text-success"
    : isLost
      ? "bg-red-50 text-destructive"
      : "bg-accent text-accent-foreground";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${colorClass}`}
    >
      {stage}
    </span>
  );
}
