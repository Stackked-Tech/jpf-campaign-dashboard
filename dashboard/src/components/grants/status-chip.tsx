import { cn } from "@/lib/utils";

// Status → chip color scheme. SF picklist values + Instrumentl values.
const STATUS_STYLES: Record<string, string> = {
  // Awarded / received
  "Awarded- Active": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Awarded- Closed": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Awarded-Active": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Awarded-Closed": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Paid in Full": "bg-emerald-50 text-emerald-700 border-emerald-200",
  // Submitted
  "Application Submitted": "bg-sky-100 text-sky-800 border-sky-200",
  "LOI Submitted": "bg-amber-100 text-amber-800 border-amber-200",
  // In-progress
  "LOI In Progress": "bg-amber-50 text-amber-700 border-amber-200",
  "Application In Progress": "bg-sky-50 text-sky-700 border-sky-200",
  // Declined
  Declined: "bg-red-100 text-red-800 border-red-200",
  // Pipeline / early
  Prospecting: "bg-slate-100 text-slate-700 border-slate-200",
  "First Contact": "bg-slate-100 text-slate-700 border-slate-200",
  Discovery: "bg-slate-100 text-slate-700 border-slate-200",
  "Engagement Details": "bg-slate-100 text-slate-700 border-slate-200",
  Researcing: "bg-violet-50 text-violet-700 border-violet-200",
  Researching: "bg-violet-50 text-violet-700 border-violet-200",
  Planned: "bg-slate-50 text-slate-600 border-slate-200",
};

const DEFAULT_STYLE = "bg-slate-100 text-slate-700 border-slate-200";

export function StatusChip({ status }: { status: string | null }) {
  if (!status) {
    return (
      <span className="inline-flex items-center rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-500">
        —
      </span>
    );
  }
  const style = STATUS_STYLES[status] ?? DEFAULT_STYLE;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium whitespace-nowrap",
        style
      )}
    >
      {status}
    </span>
  );
}
