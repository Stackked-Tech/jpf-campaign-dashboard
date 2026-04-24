"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { CORE_FIELD_COLUMNS } from "@/lib/grants/core-fields";
import { FieldRow } from "./field-row";
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
    <div className="pt-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        {open ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        Show all SF fields ({totalCount})
      </button>

      {open && (
        <div className="mt-4 space-y-6">
          {(["Standard", "NPSP", "npe01", "Custom (SF)"] as const).map((bucket) => {
            const cols = grouped[bucket] ?? [];
            if (cols.length === 0) return null;
            return (
              <div key={bucket}>
                <h3
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wider mb-2",
                    "text-slate-500 border-b border-border pb-1"
                  )}
                >
                  {bucket} <span className="text-muted-foreground">({cols.length})</span>
                </h3>
                <div className="divide-y divide-border">
                  {cols.sort().map((col) => (
                    <FieldRow
                      key={col}
                      label={col}
                      value={row[col]}
                      editor={editorFor(col, row[col])}
                      badge="sf"
                    />
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
