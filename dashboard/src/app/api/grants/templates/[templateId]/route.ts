import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ templateId: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { templateId } = await params;
  const body = await request.json();
  const allowed = ["name", "description", "default_checklist_items"] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in body) clean[k] = body[k];
  const s = getSupabase();
  const { data, error } = await s.from("grant_templates").update(clean).eq("id", templateId).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ template: data });
}

export async function DELETE(_r: NextRequest, { params }: { params: Promise<{ templateId: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { templateId } = await params;
  const s = getSupabase();
  const { error } = await s.from("grant_templates").delete().eq("id", templateId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
