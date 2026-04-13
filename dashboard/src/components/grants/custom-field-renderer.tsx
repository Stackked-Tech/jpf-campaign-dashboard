"use client";

import type { FieldDefinition } from "@/lib/grants/types";

interface Props {
  definitions: FieldDefinition[];
  values: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
}

export function CustomFieldRenderer({ definitions, values, onChange }: Props) {
  if (definitions.length === 0) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {definitions.map((def) => {
        const v = values[def.key];
        const id = `cf-${def.key}`;
        return (
          <div key={def.id} className="flex flex-col gap-1">
            <label htmlFor={id} className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {def.label}
            </label>
            {def.field_type === "text" && (
              <input id={id} type="text" value={typeof v === "string" ? v : ""}
                onChange={(e) => onChange(def.key, e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            )}
            {def.field_type === "number" && (
              <input id={id} type="number" value={typeof v === "number" ? v : ""}
                onChange={(e) => onChange(def.key, e.target.value === "" ? null : Number(e.target.value))}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            )}
            {def.field_type === "date" && (
              <input id={id} type="date" value={typeof v === "string" ? v : ""}
                onChange={(e) => onChange(def.key, e.target.value || null)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            )}
            {def.field_type === "bool" && (
              <label className="flex items-center gap-2 text-sm">
                <input id={id} type="checkbox" checked={Boolean(v)}
                  onChange={(e) => onChange(def.key, e.target.checked)} />
                {def.label}
              </label>
            )}
            {def.field_type === "select" && (
              <select id={id} value={typeof v === "string" ? v : ""}
                onChange={(e) => onChange(def.key, e.target.value || null)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
                <option value="">—</option>
                {(def.options ?? []).map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            )}
          </div>
        );
      })}
    </div>
  );
}
