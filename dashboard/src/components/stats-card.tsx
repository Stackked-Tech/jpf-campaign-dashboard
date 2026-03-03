import { cn } from "@/lib/utils";

interface StatsCardProps {
  label: string;
  value: string;
  subtext?: string;
  className?: string;
}

export function StatsCard({ label, value, subtext, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-sm",
        className
      )}
    >
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight">{value}</p>
      {subtext && (
        <p className="mt-1 text-xs text-muted-foreground">{subtext}</p>
      )}
    </div>
  );
}
