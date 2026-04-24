// Hardcoded curation of SF-mirror columns shown in the "Core fields" tab
// on the grant detail page. The rest (122 columns) are behind a
// "Show all 142 SF fields" expander.
// Reference: docs/superpowers/specs/2026-04-24-grants-ui-design.md §5

export interface CoreFieldSpec {
  /** Postgres column name on the grants table. */
  column: string;
  /** Display label for the UI. */
  label: string;
  /**
   * Display type — determines the editor used on the detail page.
   * Different from field_definitions.field_type because SF-mirror columns
   * have fixed types derived from the SF describe.
   */
  editor:
    | "text"
    | "long_text"
    | "number"
    | "currency"
    | "date"
    | "datetime"
    | "bool"
    | "reference"; // SF Id reference — read-only for now
}

export const CORE_FIELDS: readonly CoreFieldSpec[] = [
  { column: "account_id", label: "Funder", editor: "reference" },
  { column: "stage_name", label: "Stage", editor: "text" },
  { column: "amount", label: "Amount", editor: "currency" },
  { column: "close_date", label: "Close date", editor: "date" },
  {
    column: "npsp_requested_amount_c",
    label: "Requested amount",
    editor: "currency",
  },
  {
    column: "npe01_payments_made_c",
    label: "Payments made",
    editor: "currency",
  },
  {
    column: "npe01_amount_outstanding_c",
    label: "Amount outstanding",
    editor: "currency",
  },
  {
    column: "npsp_grant_period_start_date_c",
    label: "Grant period start",
    editor: "date",
  },
  {
    column: "npsp_grant_period_end_date_c",
    label: "Grant period end",
    editor: "date",
  },
  {
    column: "npsp_grant_program_area_s_c",
    label: "Program area",
    editor: "text",
  },
  {
    column: "npsp_acknowledgment_date_c",
    label: "Acknowledged date",
    editor: "date",
  },
  {
    column: "npsp_acknowledgment_status_c",
    label: "Acknowledgment status",
    editor: "text",
  },
  { column: "type", label: "Type", editor: "text" },
  {
    column: "partner_engagement_type_c",
    label: "Engagement type",
    editor: "text",
  },
  { column: "description", label: "Description", editor: "long_text" },
  { column: "owner_id", label: "Owner", editor: "reference" },
  { column: "record_type_id", label: "Record type", editor: "reference" },
  { column: "created_date", label: "Created", editor: "datetime" },
] as const;

export const CORE_FIELD_COLUMNS = CORE_FIELDS.map((f) => f.column);
