import type { Opportunity } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { PaymentSchedule } from "./payment-schedule";
import { SfLink } from "./sf-link";

interface PledgeTrackerProps {
  opportunity: Opportunity;
  instanceUrl: string;
}

export function PledgeTracker({ opportunity, instanceUrl }: PledgeTrackerProps) {
  const payments = opportunity.npe01__OppPayment__r?.records ?? [];
  if (payments.length === 0) return null;

  const totalPledged = opportunity.Amount ?? 0;
  const paidAmount = payments
    .filter((p) => p.npe01__Paid__c)
    .reduce((sum, p) => sum + (p.npe01__Payment_Amount__c ?? 0), 0);
  const remaining = totalPledged - paidAmount;
  const pctPaid = totalPledged > 0 ? (paidAmount / totalPledged) * 100 : 0;

  const nextPayment = payments.find((p) => !p.npe01__Paid__c);

  return (
    <div className="rounded-xl border border-border p-5 bg-card shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">
          <SfLink instanceUrl={instanceUrl} recordId={opportunity.Id}>
            {opportunity.Name}
          </SfLink>
        </h4>
        <span className="text-xs text-muted-foreground">
          {opportunity.npsp__Primary_Contact__r?.Name ?? opportunity.Account?.Name ?? ""}
        </span>
      </div>

      {/* Progress bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span className="font-medium">{Math.round(pctPaid)}% paid</span>
          <span>
            {formatCurrency(paidAmount)} / {formatCurrency(totalPledged)}
          </span>
        </div>
        <div className="h-2.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${Math.min(pctPaid, 100)}%` }}
          />
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Pledged</p>
          <p className="font-semibold tabular-nums">
            {formatCurrency(totalPledged)}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground">Paid to Date</p>
          <p className="font-semibold tabular-nums text-success">
            {formatCurrency(paidAmount)}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground">Remaining</p>
          <p className="font-semibold tabular-nums text-warning">
            {formatCurrency(remaining)}
          </p>
        </div>
      </div>

      {nextPayment && (
        <p className="text-xs text-muted-foreground">
          Next payment: <span className="font-semibold text-foreground">{formatCurrency(nextPayment.npe01__Payment_Amount__c)}</span>{" "}
          due {formatDate(nextPayment.npe01__Scheduled_Date__c)}
        </p>
      )}

      {/* Full schedule */}
      <details className="group">
        <summary className="cursor-pointer text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
          View payment schedule ({payments.length} payments)
        </summary>
        <div className="mt-3">
          <PaymentSchedule payments={payments} instanceUrl={instanceUrl} />
        </div>
      </details>
    </div>
  );
}
