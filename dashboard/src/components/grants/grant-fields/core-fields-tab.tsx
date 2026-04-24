import { CORE_FIELD_GROUPS, type CoreFieldSpec } from "@/lib/grants/core-fields";
import { EditableFieldCell } from "./editable-field-cell";

export function CoreFieldsTab({
  grantId,
  row,
  funderName,
  picklistOptions,
}: {
  grantId: string;
  row: Record<string, unknown>;
  funderName: string | null;
  picklistOptions: Record<string, string[]>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {CORE_FIELD_GROUPS.map((group) => (
        <GroupCard
          key={group.id}
          className={group.fullWidth ? "md:col-span-2" : ""}
        >
          {group.title !== "Description" && (
            <GroupHeader title={group.title} description={group.description} />
          )}
          <div
            className={
              group.id === "description"
                ? ""
                : "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4"
            }
          >
            {group.fields.map((f) =>
              renderField(f, grantId, row, funderName, picklistOptions)
            )}
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
  funderName: string | null,
  picklistOptions: Record<string, string[]>
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

  // If SF advertises a picklist for this column, render as a select —
  // the EditableFieldCell renders options[] as <select>. Overrides the
  // base editor type (which would otherwise be "text").
  let options = picklistOptions[f.column];
  // If the grant's current value isn't in the (record-type-scoped) picklist,
  // keep it as a valid choice — legacy data shouldn't be locked out.
  if (options && options.length > 0) {
    const current = row[f.column];
    if (typeof current === "string" && current && !options.includes(current)) {
      options = [current, ...options];
    }
  }

  return (
    <EditableFieldCell
      key={f.column}
      grantId={grantId}
      column={f.column}
      label={f.label}
      value={row[f.column]}
      editor={f.editor}
      options={options}
      className={classes}
    />
  );
}

function GroupCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-border bg-card p-5 ${className}`}
    >
      {children}
    </div>
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
