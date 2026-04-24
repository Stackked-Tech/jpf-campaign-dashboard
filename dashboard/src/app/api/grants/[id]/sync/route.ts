import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { diffGrantAgainstSf, pushToSf } from "@/lib/grants/sf-sync";

/** GET /api/grants/[id]/sync — compute diff between local row and SF record. */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sb = getSupabase();
  const { data: row, error } = await sb
    .from("grants")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  try {
    const diffs = await diffGrantAgainstSf(id, row as Record<string, unknown>);
    return NextResponse.json({ diffs });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "SF lookup failed" },
      { status: 500 }
    );
  }
}

/** POST /api/grants/[id]/sync — apply selected field keys to SF. */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const columns = (body && Array.isArray(body.columns) ? body.columns : null) as
    | string[]
    | null;
  if (!columns || columns.length === 0) {
    return NextResponse.json(
      { error: "columns (array) required" },
      { status: 400 }
    );
  }

  const sb = getSupabase();
  const { data: row, error } = await sb
    .from("grants")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });

  try {
    const { system_modstamp, pushed } = await pushToSf(
      id,
      row as Record<string, unknown>,
      columns
    );
    // Persist the snapshot of what we just pushed
    await sb
      .from("grants")
      .update({
        last_synced_snapshot: pushed,
        synced_at: new Date().toISOString(),
        system_modstamp,
      })
      .eq("id", id);
    return NextResponse.json({ success: true, pushed_count: columns.length });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Sync failed" },
      { status: 500 }
    );
  }
}
