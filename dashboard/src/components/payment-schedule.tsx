import type { Payment } from "@/lib/types";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import { Check, Clock } from "lucide-react";
import { SfLink } from "./sf-link";

interface PaymentScheduleProps {
  payments: Payment[];
  instanceUrl: string;
}

export function PaymentSchedule({ payments, instanceUrl }: PaymentScheduleProps) {
  if (payments.length === 0) {
    return (
      <p className="text-sm text-muted-foreground py-2">
        No payment records.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/60">
            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Scheduled Date</th>
            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Payment Date</th>
            <th className="px-4 py-2 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Amount</th>
            <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Method</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr
              key={p.Id}
              className={cn(
                "border-b border-border last:border-0",
                p.npe01__Paid__c ? "bg-success-light/40" : ""
              )}
            >
              <td className="px-4 py-2">
                {p.npe01__Paid__c ? (
                  <span className="inline-flex items-center gap-1 text-success text-xs font-semibold">
                    <Check className="h-3 w-3" /> Paid
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-warning text-xs font-semibold">
                    <Clock className="h-3 w-3" /> Pending
                  </span>
                )}
              </td>
              <td className="px-4 py-2 text-muted-foreground">
                {formatDate(p.npe01__Scheduled_Date__c)}
              </td>
              <td className="px-4 py-2 text-muted-foreground">
                {formatDate(p.npe01__Payment_Date__c)}
              </td>
              <td className="px-4 py-2 text-right tabular-nums font-medium">
                <SfLink instanceUrl={instanceUrl} recordId={p.Id}>
                  {formatCurrency(p.npe01__Payment_Amount__c)}
                </SfLink>
              </td>
              <td className="px-4 py-2 text-muted-foreground">
                {p.npe01__Payment_Method__c ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
