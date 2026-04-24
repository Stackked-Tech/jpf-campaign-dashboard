import { MessageSquare } from "lucide-react";

export function NotesPanel({ count }: { count: number }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-slate-500" />
          <h3 className="text-sm font-semibold">Notes</h3>
        </div>
        <span className="text-xs text-muted-foreground">{count}</span>
      </div>

      <p className="text-xs text-muted-foreground italic py-4 text-center">
        {count === 0 ? "No notes yet" : "Notes feed in Phase 4"}
      </p>
    </div>
  );
}
