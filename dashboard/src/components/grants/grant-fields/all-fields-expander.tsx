"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { CORE_FIELD_COLUMNS } from "@/lib/grants/core-fields";
import { cn } from "@/lib/utils";

// Columns we never show in the "all fields" expander — system/audit.
const HIDDEN_COLUMNS = new Set([
  "id",
  "is_deleted",
  "last_synced_snapshot",
  "synced_at",
]);

/**
 * Groups non-core fields by prefix so the 120+ columns are navigable.
 * Prefix buckets: npsp_ / npe01_ / custom (_c suffix, not npsp/npe01) / system (everything else).
 */
function bucketOf(col: string): string {
  if (col.startsWith("npsp_")) return "NPSP";
  if (col.startsWith("npe01_")) return "npe01";
  if (col.endsWith("_c") && !col.startsWith("npsp_") && !col.startsWith("npe01_"))
    return "Custom (SF)";
  return "Standard";
}

export function AllFieldsExpander({
  row,
  grantColumns,
  customFieldKeys = [],
}: {
  row: Record<string, unknown>;
  grantColumns: string[];
  customFieldKeys?: string[];
}) {
  const [open, setOpen] = useState(false);

  const grouped = useMemo(() => {
    const core = new Set(CORE_FIELD_COLUMNS);
    const custom = new Set(customFieldKeys);
    const groups: Record<string, string[]> = {};
    for (const col of grantColumns) {
      if (core.has(col) || custom.has(col) || HIDDEN_COLUMNS.has(col)) continue;
      const bucket = bucketOf(col);
      if (!groups[bucket]) groups[bucket] = [];
      groups[bucket].push(col);
    }
    return groups;
  }, [grantColumns, customFieldKeys]);

  const totalCount = Object.values(grouped).reduce((n, arr) => n + arr.length, 0);

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-left"
      >
        <div>
          <h3 className="text-sm font-semibold">All Salesforce fields</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Every column on the SF Opportunity mirror, grouped by prefix. Read-only.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{totalCount}</span>
          {open ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </div>
      </button>

      {open && (
        <div className="mt-5 space-y-6">
          {(["Standard", "NPSP", "npe01", "Custom (SF)"] as const).map((bucket) => {
            const cols = grouped[bucket] ?? [];
            if (cols.length === 0) return null;
            return (
              <div key={bucket}>
                <h4
                  className={cn(
                    "text-[10.5px] font-semibold uppercase tracking-wider mb-2",
                    "text-muted-foreground pb-1 border-b border-border"
                  )}
                >
                  {bucket}{" "}
                  <span className="text-slate-400 ml-1">({cols.length})</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {cols.sort().map((col) => (
                    <div key={col} className="min-w-0">
                      <div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                        {col}
                      </div>
                      <div className="text-sm">
                        <FieldRowInline
                          value={row[col]}
                          editor={editorFor(col, row[col])}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function FieldRowInline({
  value,
  editor,
}: {
  value: unknown;
  editor: string;
}) {
  if (value === null || value === undefined || value === "") {
    return <span className="text-slate-400">—</span>;
  }
  if (editor === "currency" || editor === "number") {
    return <span className="font-mono tabular-nums">{String(value)}</span>;
  }
  if (editor === "date") {
    return <span>{String(value).slice(0, 10)}</span>;
  }
  if (editor === "datetime") {
    return <span>{String(value).slice(0, 10)}</span>;
  }
  if (editor === "bool") {
    return <span>{value ? "Yes" : "No"}</span>;
  }
  if (editor === "reference") {
    return <span className="font-mono text-xs">{String(value)}</span>;
  }
  if (editor === "json") {
    return (
      <pre className="text-xs bg-slate-50 rounded p-2 overflow-x-auto">
        {JSON.stringify(value, null, 2)}
      </pre>
    );
  }
  const str = String(value);
  return <span>{str.length > 120 ? str.slice(0, 117) + "…" : str}</span>;
}

function editorFor(
  col: string,
  v: unknown
): "text" | "number" | "currency" | "date" | "datetime" | "bool" | "reference" | "json" {
  if (typeof v === "boolean") return "bool";
  if (col.endsWith("_date") || col.endsWith("_date_c")) return "date";
  if (
    col === "created_date" ||
    col === "last_modified_date" ||
    col.endsWith("_modstamp") ||
    col.endsWith("datetime")
  )
    return "datetime";
  if (col === "amount" || col.includes("amount") || col.includes("_revenue"))
    return "currency";
  if (typeof v === "number") return "number";
  if (col.endsWith("_id")) return "reference";
  if (typeof v === "object" && v !== null) return "json";
  return "text";
}
