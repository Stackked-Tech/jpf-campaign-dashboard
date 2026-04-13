import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { taskId } = await params;
  const body = await request.json();
  const allowed = ["label", "due_date", "completed_at", "completed_by"] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in body) clean[k] = body[k];
  const s = getSupabase();
  const { data, error } = await s.from("grant_tasks").update(clean).eq("id", taskId).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ task: data });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { taskId } = await params;
  const s = getSupabase();
  const { error } = await s.from("grant_tasks").delete().eq("id", taskId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
