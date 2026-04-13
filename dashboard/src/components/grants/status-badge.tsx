import type { GrantStatus } from "@/lib/grants/types";

const COLORS: Record<GrantStatus, string> = {
  pending: "bg-amber-100 text-amber-800",
  awarded: "bg-green-100 text-green-800",
  received: "bg-emerald-100 text-emerald-800",
  open: "bg-blue-100 text-blue-800",
  declined: "bg-red-100 text-red-800",
};

const LABELS: Record<GrantStatus, string> = {
  pending: "Pending", awarded: "Awarded", received: "Received",
  open: "Open", declined: "Declined",
};

export function StatusBadge({ status }: { status: GrantStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${COLORS[status]}`}>
      {LABELS[status]}
    </span>
  );
}
