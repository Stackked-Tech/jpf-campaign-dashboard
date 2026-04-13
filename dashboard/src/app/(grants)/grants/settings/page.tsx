import { notFound } from "next/navigation";
import { isAdmin } from "@/lib/grants/role";
import { getTemplates } from "@/lib/grants/queries";
import { getSupabase } from "@/lib/supabase";
import { TemplatesAdmin } from "@/components/grants/templates-admin";
import { FieldDefinitionsAdmin } from "@/components/grants/field-definitions-admin";
import type { FieldDefinition } from "@/lib/grants/types";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  if (!(await isAdmin())) notFound();
  const templates = await getTemplates();
  const s = getSupabase();
  const { data: defs } = await s.from("field_definitions").select("*").order("sort_order", { ascending: true });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Templates and custom fields for grants</p>
      </div>
      <TemplatesAdmin initialTemplates={templates} />
      <FieldDefinitionsAdmin initialDefinitions={(defs ?? []) as FieldDefinition[]} templates={templates} />
    </div>
  );
}
