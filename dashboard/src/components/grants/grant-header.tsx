import Link from "next/link";
import { ChevronLeft, RefreshCcw } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { StatusChip } from "./status-chip";

export function GrantHeader({
  name,
  funderName,
  status,
  amount,
}: {
  name: string;
  funderName: string | null;
  status: string | null;
  amount: number | null;
}) {
  return (
    <div className="space-y-3">
      <Link
        href="/grants"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-3 w-3" />
        All grants
      </Link>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
          <div className="mt-1.5 flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
            {funderName && (
              <span className="font-medium text-foreground/80">{funderName}</span>
            )}
            {funderName && <span>·</span>}
            <StatusChip status={status} />
            {amount != null && (
              <>
                <span>·</span>
                <span className="font-mono text-foreground/70">
                  {formatCurrency(amount)}
                </span>
              </>
            )}
          </div>
        </div>

        <button
          disabled
          title="Enabled in Phase 3"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-200 text-slate-500 px-3 py-2 text-sm font-medium cursor-not-allowed"
        >
          <RefreshCcw className="h-4 w-4" />
          Sync to Salesforce
        </button>
      </div>
    </div>
  );
}
