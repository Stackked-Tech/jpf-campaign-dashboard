// Curation of SF-mirror columns for the "Core fields" tab on the detail page.
// Fields are organized into visual groups rather than a flat list.
// Reference: docs/superpowers/specs/2026-04-24-grants-ui-design.md §5

export interface CoreFieldSpec {
  /** Postgres column name on the grants table. */
  column: string;
  /** Display label. */
  label: string;
  editor:
    | "text"
    | "long_text"
    | "number"
    | "currency"
    | "date"
    | "datetime"
    | "bool"
    | "reference";
  /** When true, occupies the full row in its group rather than a half. */
  fullWidth?: boolean;
}

export interface CoreFieldGroup {
  id: string;
  title: string;
  description?: string;
  /** When true, this card spans the full width of the outer grid. */
  fullWidth?: boolean;
  fields: readonly CoreFieldSpec[];
}

export const CORE_FIELD_GROUPS: readonly CoreFieldGroup[] = [
  {
    id: "money",
    title: "Amounts",
    description: "Requested, awarded, paid, and outstanding dollar amounts.",
    fields: [
      { column: "npsp_requested_amount_c", label: "Requested", editor: "currency" },
      { column: "amount", label: "Awarded amount", editor: "currency" },
      { column: "npe01_payments_made_c", label: "Payments made", editor: "currency" },
      { column: "npe01_amount_outstanding_c", label: "Outstanding", editor: "currency" },
    ],
  },
  {
    id: "timeline",
    title: "Timeline",
    description: "Key dates across the grant's lifecycle.",
    fields: [
      { column: "close_date", label: "Close date", editor: "date" },
      { column: "npsp_acknowledgment_date_c", label: "Acknowledged", editor: "date" },
      { column: "npsp_grant_period_start_date_c", label: "Period start", editor: "date" },
      { column: "npsp_grant_period_end_date_c", label: "Period end", editor: "date" },
    ],
  },
  {
    id: "classification",
    title: "Classification",
    description: "Stage, type, and program area.",
    fields: [
      { column: "stage_name", label: "Stage", editor: "text" },
      { column: "type", label: "Type", editor: "text" },
      { column: "partner_engagement_type_c", label: "Engagement type", editor: "text" },
      { column: "npsp_grant_program_area_s_c", label: "Program area", editor: "text" },
      {
        column: "npsp_acknowledgment_status_c",
        label: "Ack. status",
        editor: "text",
      },
    ],
  },
  {
    id: "assignment",
    title: "Assignment",
    description: "Funder, record type, and ownership.",
    fields: [
      { column: "account_id", label: "Funder", editor: "reference", fullWidth: true },
      { column: "owner_id", label: "Owner", editor: "reference" },
      { column: "record_type_id", label: "Record type", editor: "reference" },
      { column: "created_date", label: "Created", editor: "datetime" },
    ],
  },
  {
    id: "description",
    title: "Description",
    fullWidth: true,
    fields: [
      { column: "description", label: "Description", editor: "long_text", fullWidth: true },
    ],
  },
] as const;

export const CORE_FIELDS = CORE_FIELD_GROUPS.flatMap((g) => g.fields);
export const CORE_FIELD_COLUMNS = CORE_FIELDS.map((f) => f.column);
