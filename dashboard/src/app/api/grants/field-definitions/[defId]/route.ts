import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ defId: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { defId } = await params;
  const body = await request.json();
  const allowed = ["label", "field_type", "options", "template_id", "sort_order"] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in body) clean[k] = body[k];
  const s = getSupabase();
  const { data, error } = await s.from("field_definitions").update(clean).eq("id", defId).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ definition: data });
}

export async function DELETE(_r: NextRequest, { params }: { params: Promise<{ defId: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { defId } = await params;
  const s = getSupabase();
  const { error } = await s.from("field_definitions").delete().eq("id", defId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
