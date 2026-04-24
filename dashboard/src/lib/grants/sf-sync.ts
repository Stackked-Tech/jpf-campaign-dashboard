// Salesforce sync helpers for the grants UI.
// Reference: docs/superpowers/specs/2026-04-24-grants-ui-design.md §5 "Sync-to-Salesforce flow"

import { getConnection } from "@/lib/salesforce";

/** Convert a SF field name to snake_case (matches scripts/import-sf-grants.mjs). */
export function toSnakeCase(name: string): string {
  let s = name.replace(/__/g, "_");
  s = s.replace(/([a-z0-9])([A-Z])/g, "$1_$2");
  s = s.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2");
  return s.toLowerCase();
}

interface SfFieldMeta {
  name: string;
  type: string;
  updateable: boolean;
  /** Present for picklist / multipicklist fields; ordered, active values only. */
  picklistValues?: string[];
}

interface SfMappingCache {
  /** snake_case column → SF field metadata */
  columnToSf: Map<string, SfFieldMeta>;
  /** SF field name → snake_case column */
  sfToColumn: Map<string, string>;
}

let mappingCache: SfMappingCache | null = null;

export async function getSfMapping(): Promise<SfMappingCache> {
  if (mappingCache) return mappingCache;
  const conn = await getConnection();
  const describe = await conn.sobject("Opportunity").describe();
  const columnToSf = new Map<string, SfFieldMeta>();
  const sfToColumn = new Map<string, string>();
  for (const f of describe.fields) {
    if (f.type === "address" || f.type === "location") continue;
    if (f.name === "CompoundName") continue;
    const col = toSnakeCase(f.name);
    const meta: SfFieldMeta = {
      name: f.name,
      type: f.type,
      updateable: f.updateable,
    };
    if (
      (f.type === "picklist" || f.type === "multipicklist") &&
      Array.isArray(f.picklistValues)
    ) {
      meta.picklistValues = f.picklistValues
        .filter((p) => p.active)
        .map((p) => p.value);
    }
    columnToSf.set(col, meta);
    sfToColumn.set(f.name, col);
  }
  mappingCache = { columnToSf, sfToColumn };
  return mappingCache;
}

/**
 * Returns active picklist values for the given snake_case columns.
 * Columns that aren't picklist fields are omitted from the result.
 *
 * If `recordTypeId` is provided, values are scoped to that record type
 * (using SF's UI API). Otherwise the master picklist values are returned.
 */
export async function getPicklistOptions(
  columns: readonly string[],
  recordTypeId?: string
): Promise<Record<string, string[]>> {
  const { columnToSf } = await getSfMapping();

  // Without a record type, return master picklist values from describe.
  if (!recordTypeId) {
    const out: Record<string, string[]> = {};
    for (const col of columns) {
      const meta = columnToSf.get(col);
      if (meta?.picklistValues && meta.picklistValues.length > 0) {
        out[col] = meta.picklistValues;
      }
    }
    return out;
  }

  // Record-type-scoped values come from the UI API. This returns picklist
  // values restricted to the fields that are active for the given record
  // type (e.g. Grant record type may expose only 12 of the 27 master stages).
  const scoped = await getRecordTypeScopedPicklists(recordTypeId);
  const out: Record<string, string[]> = {};
  for (const col of columns) {
    const meta = columnToSf.get(col);
    if (!meta) continue;
    const sfFieldName = meta.name;
    const values = scoped[sfFieldName];
    if (values && values.length > 0) {
      out[col] = values;
    } else if (meta.picklistValues && meta.picklistValues.length > 0) {
      // Field is a picklist but the UI API didn't return record-type-scoped
      // values — fall back to master values so the dropdown isn't empty.
      out[col] = meta.picklistValues;
    }
  }
  return out;
}

interface UiApiPicklistResponse {
  picklistFieldValues: Record<
    string,
    {
      values: Array<{ value: string; label: string }>;
    }
  >;
}

const picklistsByRecordType = new Map<string, Record<string, string[]>>();

async function getRecordTypeScopedPicklists(
  recordTypeId: string
): Promise<Record<string, string[]>> {
  const cached = picklistsByRecordType.get(recordTypeId);
  if (cached) return cached;

  const conn = await getConnection();
  // SF UI API: returns only values valid for the specified record type.
  // Note: this endpoint is part of the /ui-api namespace, not the REST SObject API.
  const resp = (await conn.request<UiApiPicklistResponse>({
    method: "GET",
    url: `/services/data/v62.0/ui-api/object-info/Opportunity/picklist-values/${recordTypeId}`,
  })) as UiApiPicklistResponse;

  const out: Record<string, string[]> = {};
  for (const [sfFieldName, details] of Object.entries(
    resp.picklistFieldValues ?? {}
  )) {
    out[sfFieldName] = details.values.map((v) => v.value);
  }
  picklistsByRecordType.set(recordTypeId, out);
  return out;
}

/** Non-editable columns we never include in a diff (system/audit). */
const SKIP_IN_DIFF = new Set([
  "id",
  "is_deleted",
  "is_closed",
  "is_won",
  "system_modstamp",
  "created_date",
  "created_by_id",
  "last_modified_date",
  "last_modified_by_id",
  "last_stage_change_date",
  "last_activity_date",
  "last_viewed_date",
  "last_referenced_date",
  "fiscal_quarter",
  "fiscal_year",
  "fiscal",
  "push_count",
  "has_open_activity",
  "has_overdue_task",
  "has_opportunity_line_item",
]);

export interface DiffedField {
  column: string;
  sf_field: string;
  label: string; // human label from SF describe
  local_value: unknown;
  sf_value: unknown;
  sf_type: string;
}

/**
 * Compute the delta between a local Supabase grants row and the current SF
 * Opportunity record. Only SF-mirror columns that are editable in SF and
 * not in the skip list are considered.
 */
export async function diffGrantAgainstSf(
  id: string,
  localRow: Record<string, unknown>
): Promise<DiffedField[]> {
  const { columnToSf } = await getSfMapping();
  const conn = await getConnection();
  const sfRecord = await conn
    .sobject("Opportunity")
    .retrieve(id) as Record<string, unknown>;

  const diffs: DiffedField[] = [];
  for (const [col, meta] of columnToSf) {
    if (SKIP_IN_DIFF.has(col)) continue;
    if (!meta.updateable) continue;
    const localValue = localRow[col] ?? null;
    const sfValue = sfRecord[meta.name] ?? null;
    if (!valuesEqual(localValue, sfValue, meta.type)) {
      diffs.push({
        column: col,
        sf_field: meta.name,
        label: prettyLabel(meta.name),
        local_value: localValue,
        sf_value: sfValue,
        sf_type: meta.type,
      });
    }
  }
  return diffs.sort((a, b) => a.label.localeCompare(b.label));
}

function valuesEqual(a: unknown, b: unknown, type: string): boolean {
  if (a === b) return true;
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;
  // Numeric compare — Supabase returns strings for numeric columns sometimes
  if (type === "currency" || type === "double" || type === "int" || type === "percent") {
    return Number(a) === Number(b);
  }
  if (type === "date") {
    return String(a).slice(0, 10) === String(b).slice(0, 10);
  }
  if (type === "datetime") {
    return new Date(a as string).getTime() === new Date(b as string).getTime();
  }
  if (type === "boolean") {
    return Boolean(a) === Boolean(b);
  }
  return String(a) === String(b);
}

/**
 * Pushes the specified columns' current local values to Salesforce.
 * Returns the new SF SystemModstamp on success.
 */
export async function pushToSf(
  id: string,
  localRow: Record<string, unknown>,
  columnsToPush: string[]
): Promise<{ system_modstamp: string; pushed: Record<string, unknown> }> {
  const { columnToSf } = await getSfMapping();
  const update: Record<string, unknown> = { Id: id };
  const pushed: Record<string, unknown> = {};
  for (const col of columnsToPush) {
    const meta = columnToSf.get(col);
    if (!meta) throw new Error(`Unknown column: ${col}`);
    if (!meta.updateable) throw new Error(`Column not updateable: ${col}`);
    update[meta.name] = localRow[col] ?? null;
    pushed[col] = localRow[col] ?? null;
  }

  const conn = await getConnection();
  // jsforce's typed update requires a specific SObjectUpdateRecord shape. Our
  // field set is dynamic (built from the SF describe at runtime), so we cast.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = await conn.sobject("Opportunity").update(update as any);
  if (!result.success) {
    const errs = (result.errors ?? []).map((e: { message: string }) => e.message).join("; ");
    throw new Error(errs || "SF update failed");
  }

  // Fetch new SystemModstamp
  const refreshed = await conn
    .sobject("Opportunity")
    .retrieve(id) as Record<string, unknown>;
  return {
    system_modstamp: (refreshed.SystemModstamp as string) ?? new Date().toISOString(),
    pushed,
  };
}

function prettyLabel(sfName: string): string {
  return sfName
    .replace(/__c$/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
