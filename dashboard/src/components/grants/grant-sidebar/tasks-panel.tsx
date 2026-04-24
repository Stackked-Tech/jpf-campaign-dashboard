import { CheckSquare } from "lucide-react";

export function TasksPanel({ openCount }: { openCount: number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-4 w-4 text-slate-500" />
          <h3 className="text-sm font-semibold">Tasks</h3>
        </div>
        <span className="text-xs text-muted-foreground">
          {openCount} open
        </span>
      </div>

      {openCount === 0 ? (
        <p className="text-xs text-muted-foreground italic py-4 text-center">
          No open tasks
        </p>
      ) : (
        <p className="text-xs text-muted-foreground italic py-4 text-center">
          Task list rendering in Phase 4
        </p>
      )}
    </div>
  );
}
