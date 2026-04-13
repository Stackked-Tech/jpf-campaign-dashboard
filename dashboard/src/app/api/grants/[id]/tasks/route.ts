import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getTasksForGrant } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(_r: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tasks = await getTasksForGrant(id);
  return NextResponse.json({ tasks });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const { label, due_date } = await request.json();
  if (!label) return NextResponse.json({ error: "label required" }, { status: 400 });
  const s = getSupabase();
  const { count } = await s.from("grant_tasks").select("*", { count: "exact", head: true }).eq("grant_id", id);
  const { data, error } = await s.from("grant_tasks").insert({
    grant_id: id, label, due_date: due_date ?? null, sort_order: count ?? 0,
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ task: data }, { status: 201 });
}
