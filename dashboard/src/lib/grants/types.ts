// Shared types for the Grants UI.
// Aligned with the schema in supabase/migrations/0006_grants_ui_schema.sql
// and the SF-mirror grants table in 0004_grants_sf_mirror.sql.

export type GrantSource = "sf" | "instrumentl" | "linked";

export type GrantStatus = string; // free-text; see spec §Landing for display chip mapping

export interface UnifiedGrantRow {
  /**
   * For SF rows: SF Id. For Instrumentl rows: uuid. For linked rows: SF Id.
   */
  id: string;
  source: GrantSource;

  /** Display name of the grant (opportunity name or pursuit name). */
  name: string;

  /** Funder / account name. */
  funder_name: string | null;

  /** SF Account Id if known. */
  sf_account_id: string | null;

  /** Status string — SF stage_name or Instrumentl status. */
  status: GrantStatus | null;

  /** Scalar amount (SF Amount, or Instrumentl midpoint for ranges). */
  amount: number | null;

  /**
   * Raw amount text when the source was a range or bounded phrase
   * (Instrumentl only). Null for SF rows or simple single-value amounts.
   */
  amount_range: string | null;

  /** Internal target deadline (Instrumentl.internal_deadline or SF close_date). */
  internal_deadline: string | null;

  /** External hard deadline — only present for Instrumentl rows. */
  deadline: string | null;

  /** Next action across tasks+reports, if any. */
  next_action: {
    type: "task" | "report";
    label: string;
    due_date: string | null;
  } | null;

  /** SF Opportunity Id (present on SF rows and linked-Instrumentl rows). */
  grant_id: string | null;

  /** Instrumentl opportunity Id (present on Instrumentl rows, linked or not). */
  instrumentl_id: string | null;
}

export interface GrantKpis {
  fy_awarded_total: number;
  fy_awarded_count: number;
  pipeline_value: number;
  pipeline_count: number;
  reports_due_30d: number;
  reports_overdue: number;
  renewals_next_90d: number;
}

export interface FieldDefinition {
  id: string;
  key: string;
  label: string;
  field_type:
    | "text"
    | "long_text"
    | "number"
    | "currency"
    | "date"
    | "bool"
    | "select"
    | "multi_select";
  options: string[] | null;
  sort_order: number;
  is_hidden_default: boolean;
}

export interface GrantReport {
  id: string;
  grant_id: string;
  name: string;
  due_date: string;
  submitted_date: string | null;
  notes: string | null;
  status: "not_started" | "in_progress" | "submitted" | "waived";
}

export interface GrantTask {
  id: string;
  grant_id: string;
  label: string;
  due_date: string | null;
  completed_at: string | null;
  sort_order: number;
}

export interface GrantAttachment {
  id: string;
  grant_id: string;
  report_id: string | null;
  filename: string;
  storage_path: string;
  content_type: string;
  size_bytes: number;
  category: string | null;
  uploaded_at: string;
}

export interface GrantNote {
  id: string;
  grant_id: string;
  body: string;
  author: string;
  created_at: string;
}
