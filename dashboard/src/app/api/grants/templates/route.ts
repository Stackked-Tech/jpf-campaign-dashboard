import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getTemplates } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET() {
  const templates = await getTemplates();
  return NextResponse.json({ templates });
}

export async function POST(request: NextRequest) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { name, description, default_checklist_items } = await request.json();
  if (!name || !name.trim()) return NextResponse.json({ error: "name required" }, { status: 400 });
  const s = getSupabase();
  const { data, error } = await s.from("grant_templates").insert({
    name: name.trim(), description: description ?? null,
    default_checklist_items: default_checklist_items ?? [],
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ template: data }, { status: 201 });
}
