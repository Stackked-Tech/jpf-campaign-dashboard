import { getSupabase } from "@/lib/supabase";
import type {
  Grant,
  GrantAttachment,
  GrantNote,
  GrantReport,
  GrantTask,
  GrantTemplate,
  FieldDefinition,
} from "@/lib/grants/types";

export async function getGrants(filter?: { status?: Grant["status"] }): Promise<Grant[]> {
  const s = getSupabase();
  let q = s.from("grants").select("*").order("updated_at", { ascending: false });
  if (filter?.status) q = q.eq("status", filter.status);
  const { data, error } = await q;
  if (error) throw new Error(`getGrants: ${error.message}`);
  return data as Grant[];
}

export async function getGrantById(id: string): Promise<Grant | null> {
  const s = getSupabase();
  const { data, error } = await s.from("grants").select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(`getGrantById: ${error.message}`);
  return data as Grant | null;
}

export async function getReportsForGrant(grantId: string): Promise<GrantReport[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_reports")
    .select("*")
    .eq("grant_id", grantId)
    .order("due_date", { ascending: true });
  if (error) throw new Error(`getReportsForGrant: ${error.message}`);
  return data as GrantReport[];
}

export async function getTasksForGrant(grantId: string): Promise<GrantTask[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_tasks")
    .select("*")
    .eq("grant_id", grantId)
    .order("sort_order", { ascending: true });
  if (error) throw new Error(`getTasksForGrant: ${error.message}`);
  return data as GrantTask[];
}

export async function getAttachmentsForGrant(grantId: string): Promise<GrantAttachment[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_attachments")
    .select("*")
    .eq("grant_id", grantId)
    .order("uploaded_at", { ascending: false });
  if (error) throw new Error(`getAttachmentsForGrant: ${error.message}`);
  return data as GrantAttachment[];
}

export async function getNotesForGrant(grantId: string): Promise<GrantNote[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_notes")
    .select("*")
    .eq("grant_id", grantId)
    .order("created_at", { ascending: false });
  if (error) throw new Error(`getNotesForGrant: ${error.message}`);
  return data as GrantNote[];
}

export async function getTemplates(): Promise<GrantTemplate[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_templates")
    .select("*")
    .order("name", { ascending: true });
  if (error) throw new Error(`getTemplates: ${error.message}`);
  return data as GrantTemplate[];
}

export async function getFieldDefinitions(templateId: string | null = null): Promise<FieldDefinition[]> {
  const s = getSupabase();
  let q = s.from("field_definitions").select("*").order("sort_order", { ascending: true });
  q = templateId ? q.or(`template_id.is.null,template_id.eq.${templateId}`) : q.is("template_id", null);
  const { data, error } = await q;
  if (error) throw new Error(`getFieldDefinitions: ${error.message}`);
  return data as FieldDefinition[];
}

export async function getDueSoonReports(days = 30): Promise<GrantReport[]> {
  const s = getSupabase();
  const today = new Date().toISOString().slice(0, 10);
  const until = new Date(Date.now() + days * 86400_000).toISOString().slice(0, 10);
  const { data, error } = await s
    .from("grant_reports")
    .select("*")
    .is("submitted_date", null)
    .gte("due_date", today)
    .lte("due_date", until)
    .order("due_date", { ascending: true });
  if (error) throw new Error(`getDueSoonReports: ${error.message}`);
  return data as GrantReport[];
}

export async function getUpcomingRenewals(days = 60): Promise<Grant[]> {
  const s = getSupabase();
  const today = new Date().toISOString().slice(0, 10);
  const until = new Date(Date.now() + days * 86400_000).toISOString().slice(0, 10);
  const { data, error } = await s
    .from("grants")
    .select("*")
    .gte("renewal_due_date", today)
    .lte("renewal_due_date", until)
    .order("renewal_due_date", { ascending: true });
  if (error) throw new Error(`getUpcomingRenewals: ${error.message}`);
  return data as Grant[];
}
