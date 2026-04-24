import { AlertCircle, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReportsPanel({
  count,
  overdueCount,
}: {
  count: number;
  overdueCount: number;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-slate-500" />
          <h3 className="text-sm font-semibold">Reports</h3>
        </div>
        <div className="flex items-center gap-2">
          {overdueCount > 0 && (
            <span
              className={cn(
                "inline-flex items-center gap-1 text-xs font-medium",
                "rounded bg-red-50 text-red-700 px-1.5 py-0.5 border border-red-200"
              )}
            >
              <AlertCircle className="h-3 w-3" />
              {overdueCount} overdue
            </span>
          )}
          <span className="text-xs text-muted-foreground">{count}</span>
        </div>
      </div>

      {count === 0 ? (
        <p className="text-xs text-muted-foreground italic py-4 text-center">
          No reports tracked yet
        </p>
      ) : (
        <p className="text-xs text-muted-foreground italic py-4 text-center">
          Report list rendering in Phase 4
        </p>
      )}
    </div>
  );
}
