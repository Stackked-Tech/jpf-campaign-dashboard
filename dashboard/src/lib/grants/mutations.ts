import { getSupabase } from "@/lib/supabase";
import type { Grant, GrantTemplate } from "@/lib/grants/types";

export interface CreateGrantInput {
  template_id: string | null;
  funder_name: string;
  sf_account_id: string | null;
  funder_type: Grant["funder_type"];
  restriction: Grant["restriction"];
  program_name: string | null;
  request_amount: number | null;
  submission_date: string | null;
  notes: string | null;
  custom_fields: Record<string, unknown>;
  created_by: string | null;
}

export async function createGrant(input: CreateGrantInput): Promise<Grant> {
  const s = getSupabase();
  const { data: grant, error } = await s
    .from("grants")
    .insert({ ...input, status: "pending" })
    .select("*")
    .single();
  if (error || !grant) throw new Error(`createGrant: ${error?.message ?? "unknown"}`);

  if (input.template_id) {
    const { data: tmpl } = await s
      .from("grant_templates")
      .select("default_checklist_items")
      .eq("id", input.template_id)
      .maybeSingle();
    const items = (tmpl?.default_checklist_items as GrantTemplate["default_checklist_items"]) ?? [];
    if (items.length > 0) {
      await s.from("grant_tasks").insert(
        items.map((item, idx) => ({
          grant_id: (grant as Grant).id,
          label: item.label,
          due_date: null,
          sort_order: idx,
        }))
      );
    }
  }
  return grant as Grant;
}

export async function updateGrant(id: string, patch: Partial<Grant>): Promise<Grant> {
  const s = getSupabase();
  const { data, error } = await s.from("grants").update(patch).eq("id", id).select("*").single();
  if (error || !data) throw new Error(`updateGrant: ${error?.message ?? "unknown"}`);
  return data as Grant;
}

export async function deleteGrant(id: string): Promise<void> {
  const s = getSupabase();
  const { error } = await s.from("grants").delete().eq("id", id);
  if (error) throw new Error(`deleteGrant: ${error.message}`);
}
