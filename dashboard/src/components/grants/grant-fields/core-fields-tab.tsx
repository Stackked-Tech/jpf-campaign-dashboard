import { CORE_FIELDS } from "@/lib/grants/core-fields";
import { FieldRow } from "./field-row";
import { EditableFieldRow } from "./editable-field-row";

export function CoreFieldsTab({
  grantId,
  row,
  funderName,
}: {
  grantId: string;
  row: Record<string, unknown>;
  funderName: string | null;
}) {
  return (
    <div className="divide-y divide-border">
      {CORE_FIELDS.map((f) => {
        // Funder is derived from account_id → SF Account.Name. Read-only here
        // — editing the account assignment is a bigger action (we'd need a
        // funder picker), deferred from this phase.
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
          <EditableFieldRow
            key={f.column}
            grantId={grantId}
            column={f.column}
            label={f.label}
            value={row[f.column]}
            editor={f.editor}
            syncsToSf
          />
        );
      })}
    </div>
  );
}
