import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const PATCHABLE = new Set(["label", "due_date", "completed_at", "sort_order"]);

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const { id, taskId } = await params;
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object")
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  const patch: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(body)) {
    if (!PATCHABLE.has(k)) continue;
    patch[k] = v;
  }
  if (Object.keys(patch).length === 0)
    return NextResponse.json({ error: "No patchable fields" }, { status: 400 });

  const sb = getSupabase();
  const { data, error } = await sb
    .from("grant_tasks")
    .update(patch)
    .eq("id", taskId)
    .eq("grant_id", id)
    .select()
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ task: data });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const { id, taskId } = await params;
  const sb = getSupabase();
  const { error } = await sb
    .from("grant_tasks")
    .delete()
    .eq("id", taskId)
    .eq("grant_id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
