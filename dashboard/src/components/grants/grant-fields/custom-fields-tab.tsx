import type { FieldDefinition } from "@/lib/grants/types";
import { EditableFieldCell } from "./editable-field-cell";

export function CustomFieldsTab({
  grantId,
  row,
  fieldDefinitions,
}: {
  grantId: string;
  row: Record<string, unknown>;
  fieldDefinitions: FieldDefinition[];
}) {
  if (fieldDefinitions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-card/50 p-12 text-center">
        <p className="text-sm text-muted-foreground">No custom fields yet.</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Add dashboard-only fields from{" "}
          <a
            href="/grants/settings"
            className="text-blue-600 hover:underline font-medium"
          >
            Field settings
          </a>
          . They render here and never sync to Salesforce.
        </p>
      </div>
    );
  }

  const visible = fieldDefinitions.filter((d) => !d.is_hidden_default);

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold">Dashboard fields</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          Dashboard-only — these never sync to Salesforce.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {visible.map((d) => {
          const editor = mapEditor(d.field_type);
          return (
            <EditableFieldCell
              key={d.key}
              grantId={grantId}
              column={d.key}
              label={d.label}
              value={row[d.key]}
              editor={editor}
              options={d.options ?? undefined}
              className={editor === "long_text" ? "sm:col-span-2" : ""}
            />
          );
        })}
      </div>
    </div>
  );
}

function mapEditor(
  type: FieldDefinition["field_type"]
): "text" | "long_text" | "number" | "currency" | "date" | "bool" {
  switch (type) {
    case "long_text":
      return "long_text";
    case "number":
      return "number";
    case "currency":
      return "currency";
    case "date":
      return "date";
    case "bool":
      return "bool";
    case "select":
    case "multi_select":
    case "text":
    default:
      return "text";
  }
}
