import type { FieldDefinition } from "@/lib/grants/types";
import { FieldRow } from "./field-row";

export function CustomFieldsTab({
  row,
  fieldDefinitions,
}: {
  row: Record<string, unknown>;
  fieldDefinitions: FieldDefinition[];
}) {
  if (fieldDefinitions.length === 0) {
    return (
      <div className="py-16 text-center text-muted-foreground text-sm">
        <p>No custom fields yet.</p>
        <p className="mt-2 text-xs">
          Add fields from{" "}
          <a href="/grants/settings" className="text-blue-600 hover:underline">
            Settings
          </a>
          .
        </p>
      </div>
    );
  }
  const visible = fieldDefinitions.filter((d) => !d.is_hidden_default);
  return (
    <div className="divide-y divide-border">
      {visible.map((d) => (
        <FieldRow
          key={d.key}
          label={d.label}
          value={row[d.key]}
          editor={mapEditor(d.field_type)}
          badge="custom"
        />
      ))}
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
