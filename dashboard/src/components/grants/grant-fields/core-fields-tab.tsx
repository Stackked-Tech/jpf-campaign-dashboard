import { CORE_FIELD_GROUPS, type CoreFieldSpec } from "@/lib/grants/core-fields";
import { EditableFieldCell } from "./editable-field-cell";

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
    <div className="space-y-4">
      {CORE_FIELD_GROUPS.map((group) => (
        <GroupCard key={group.id}>
          {group.title !== "Description" && (
            <GroupHeader title={group.title} description={group.description} />
          )}
          <div
            className={
              group.id === "description"
                ? ""
                : "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
            }
          >
            {group.fields.map((f) => renderField(f, grantId, row, funderName))}
          </div>
        </GroupCard>
      ))}
    </div>
  );
}

function renderField(
  f: CoreFieldSpec,
  grantId: string,
  row: Record<string, unknown>,
  funderName: string | null
) {
  const classes = f.fullWidth ? "sm:col-span-2" : "";

  if (f.column === "account_id") {
    return (
      <EditableFieldCell
        key={f.column}
        grantId={grantId}
        column={f.column}
        label={f.label}
        value={row[f.column]}
        editor="reference"
        displayOverride={funderName ?? (row[f.column] as string | null) ?? null}
        className={classes}
      />
    );
  }

  return (
    <EditableFieldCell
      key={f.column}
      grantId={grantId}
      column={f.column}
      label={f.label}
      value={row[f.column]}
      editor={f.editor}
      className={classes}
    />
  );
}

function GroupCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">{children}</div>
  );
}

function GroupHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      )}
    </div>
  );
}
