import { CORE_FIELDS } from "@/lib/grants/core-fields";
import { FieldRow } from "./field-row";

export function CoreFieldsTab({
  row,
  funderName,
}: {
  row: Record<string, unknown>;
  funderName: string | null;
}) {
  return (
    <div className="divide-y divide-border">
      {CORE_FIELDS.map((f) => {
        // Special case: funder is derived from account_id + SF Account.Name
        if (f.column === "account_id") {
          return (
            <FieldRow
              key={f.column}
              label={f.label}
              value={funderName ?? row[f.column]}
              editor={funderName ? "text" : "reference"}
              badge="sf"
            />
          );
        }
        return (
          <FieldRow
            key={f.column}
            label={f.label}
            value={row[f.column]}
            editor={f.editor}
            badge="sf"
          />
        );
      })}
    </div>
  );
}
