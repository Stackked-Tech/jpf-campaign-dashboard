import { formatCurrency, formatDate } from "@/lib/utils";

export interface FieldRowProps {
  label: string;
  value: unknown;
  editor?:
    | "text"
    | "long_text"
    | "number"
    | "currency"
    | "date"
    | "datetime"
    | "bool"
    | "reference"
    | "json";
  fallback?: string;
  badge?: "sf" | "custom";
}

/**
 * Read-only field-row renderer. Phase 3 adds the inline editor on top of this.
 */
export function FieldRow({ label, value, editor = "text", fallback = "—", badge }: FieldRowProps) {
  return (
    <div className="grid grid-cols-[180px_1fr] gap-4 py-2.5 border-b border-border last:border-0 items-start">
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        {badge === "sf" && (
          <span className="text-[9px] font-semibold uppercase text-blue-600/70 tracking-wider">
            SF
          </span>
        )}
        {badge === "custom" && (
          <span className="text-[9px] font-semibold uppercase text-purple-600/70 tracking-wider">
            Dash
          </span>
        )}
      </div>
      <div className="text-sm text-foreground">
        <FieldValue value={value} editor={editor} fallback={fallback} />
      </div>
    </div>
  );
}

function FieldValue({
  value,
  editor,
  fallback,
}: {
  value: unknown;
  editor: FieldRowProps["editor"];
  fallback: string;
}) {
  if (value === null || value === undefined || value === "") {
    return <span className="text-muted-foreground">{fallback}</span>;
  }
  switch (editor) {
    case "currency":
      return <span className="font-mono">{formatCurrency(Number(value))}</span>;
    case "number":
      return <span className="font-mono">{String(value)}</span>;
    case "date":
      return <span>{formatDate(String(value))}</span>;
    case "datetime":
      return <span>{formatDate(String(value).slice(0, 10))}</span>;
    case "bool":
      return <span>{value ? "Yes" : "No"}</span>;
    case "long_text":
      return <p className="whitespace-pre-wrap text-sm leading-relaxed">{String(value)}</p>;
    case "reference":
      return <span className="font-mono text-xs">{String(value)}</span>;
    case "json":
      return (
        <pre className="text-xs bg-slate-50 rounded p-2 overflow-x-auto">
          {JSON.stringify(value, null, 2)}
        </pre>
      );
    default:
      return <span>{String(value)}</span>;
  }
}
