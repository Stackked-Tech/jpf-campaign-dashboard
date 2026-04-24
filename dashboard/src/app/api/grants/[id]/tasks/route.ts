import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sb = getSupabase();
  const { data, error } = await sb
    .from("grant_tasks")
    .select("*")
    .eq("grant_id", id)
    .order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ tasks: data ?? [] });
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const label = String(body?.label ?? "").trim();
  if (!label)
    return NextResponse.json({ error: "label required" }, { status: 400 });

  const sb = getSupabase();
  // Put new task at the end
  const { data: maxRow } = await sb
    .from("grant_tasks")
    .select("sort_order")
    .eq("grant_id", id)
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();
  const nextOrder = ((maxRow?.sort_order as number | undefined) ?? -1) + 1;

  const { data, error } = await sb
    .from("grant_tasks")
    .insert({
      grant_id: id,
      label,
      task_type: body.task_type ?? null,
      description: body.description ?? null,
      due_date: body.due_date ?? null,
      sort_order: nextOrder,
    })
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ task: data });
}
