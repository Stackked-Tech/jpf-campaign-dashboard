import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getReportsForGrant } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(_r: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const reports = await getReportsForGrant(id);
  return NextResponse.json({ reports });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const { name, due_date } = await request.json();
  if (!name || !due_date) return NextResponse.json({ error: "name and due_date required" }, { status: 400 });
  const s = getSupabase();
  const { data, error } = await s.from("grant_reports").insert({
    grant_id: id, name, due_date, sections: [],
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ report: data }, { status: 201 });
}
