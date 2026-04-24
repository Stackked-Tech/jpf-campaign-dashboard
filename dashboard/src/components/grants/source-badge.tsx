import { cn } from "@/lib/utils";
import type { GrantSource } from "@/lib/grants/types";

const LABELS: Record<GrantSource, string> = {
  sf: "SF",
  instrumentl: "Instrumentl",
  linked: "Linked",
};

const STYLES: Record<GrantSource, string> = {
  sf: "bg-blue-50 text-blue-700 border-blue-200",
  instrumentl: "bg-purple-50 text-purple-700 border-purple-200",
  linked: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function SourceBadge({ source }: { source: GrantSource }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        STYLES[source]
      )}
    >
      {LABELS[source]}
    </span>
  );
}
