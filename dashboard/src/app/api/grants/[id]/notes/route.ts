import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getNotesForGrant } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(_r: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const notes = await getNotesForGrant(id);
  return NextResponse.json({ notes });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const { body } = await request.json();
  if (!body || !body.trim()) return NextResponse.json({ error: "body required" }, { status: 400 });
  const s = getSupabase();
  const { data, error } = await s.from("grant_notes").insert({
    grant_id: id, body: body.trim(), author: role,
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ note: data }, { status: 201 });
}
