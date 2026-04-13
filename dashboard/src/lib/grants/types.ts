// Grants Hub domain types. Mirror the Supabase schema in 0001_create_grants_schema.sql.

export type GrantStatus =
  | "pending"
  | "awarded"
  | "received"
  | "open"
  | "declined";

export type FunderType =
  | "corporate"
  | "private_foundation"
  | "individual"
  | "other";

export type RestrictionKind = "restricted" | "unrestricted";

export type FieldType = "text" | "number" | "date" | "bool" | "select";

export interface Grant {
  id: string;
  funder_name: string;
  sf_account_id: string | null;
  funder_type: FunderType | null;
  status: GrantStatus;
  declined_date: string | null;
  sf_opportunity_id: string | null;
  request_amount: number | null;
  amount_awarded: number | null;
  amount_received: number | null;
  submission_date: string | null;
  award_date: string | null;
  receipt_date: string | null;
  acknowledged_date: string | null;
  grant_closes_date: string | null;
  program_name: string | null;
  restriction: RestrictionKind | null;
  is_recurring: boolean;
  renewal_due_date: string | null;
  template_id: string | null;
  custom_fields: Record<string, unknown>;
  notes: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface ChecklistItemTemplate {
  label: string;
  offset_days_from_award: number | null;
}

export interface GrantTemplate {
  id: string;
  name: string;
  description: string | null;
  default_checklist_items: ChecklistItemTemplate[];
  created_at: string;
  updated_at: string;
}

export interface FieldDefinition {
  id: string;
  key: string;
  label: string;
  field_type: FieldType;
  options: string[] | null;
  template_id: string | null;
  sort_order: number;
  created_at: string;
}

export type ReportSectionType = "narrative" | "financial" | "metric";

export interface ReportSection {
  type: ReportSectionType;
  title: string;
  content: unknown;
}

export interface NarrativeContent {
  markdown: string;
}

export interface FinancialRow {
  category: string;
  planned: number | null;
  spent: number | null;
}

export interface FinancialContent {
  rows: FinancialRow[];
}

export interface MetricRow {
  key: string;
  target: number | null;
  actual: number | null;
}

export interface MetricContent {
  rows: MetricRow[];
}

export interface GrantReport {
  id: string;
  grant_id: string;
  name: string;
  due_date: string;
  submitted_date: string | null;
  sections: ReportSection[];
  created_at: string;
  updated_at: string;
}

export interface GrantTask {
  id: string;
  grant_id: string;
  label: string;
  due_date: string | null;
  completed_at: string | null;
  completed_by: string | null;
  sort_order: number;
  created_at: string;
}

export interface GrantAttachment {
  id: string;
  grant_id: string;
  filename: string;
  storage_path: string;
  content_type: string;
  size_bytes: number;
  uploaded_at: string;
  uploaded_by: string | null;
}

export interface GrantNote {
  id: string;
  grant_id: string;
  body: string;
  author: string;
  created_at: string;
}
