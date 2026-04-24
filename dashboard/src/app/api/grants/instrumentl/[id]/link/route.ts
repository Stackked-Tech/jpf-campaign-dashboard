import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const sf_opportunity_id = String(body?.sf_opportunity_id ?? "").trim();
  if (!sf_opportunity_id) {
    return NextResponse.json(
      { error: "sf_opportunity_id required" },
      { status: 400 }
    );
  }

  const sb = getSupabase();
  // Verify the SF grant exists
  const { data: grant } = await sb
    .from("grants")
    .select("id")
    .eq("id", sf_opportunity_id)
    .maybeSingle();
  if (!grant) {
    return NextResponse.json(
      { error: "SF grant not found" },
      { status: 404 }
    );
  }

  const { error } = await sb
    .from("instrumentl_opportunities")
    .update({ sf_opportunity_id })
    .eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sb = getSupabase();
  const { error } = await sb
    .from("instrumentl_opportunities")
    .update({ sf_opportunity_id: null })
    .eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
