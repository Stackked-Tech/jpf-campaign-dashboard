import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getGrantColumnKeys } from "@/lib/grants/queries";

// Columns that are NEVER patchable from this endpoint:
// - The primary key
// - SF-system audit columns whose values originate in SF
// - The sync snapshot (managed by the sync endpoint)
const IMMUTABLE = new Set<string>([
  "id",
  "is_deleted",
  "record_type_id",
  "system_modstamp",
  "created_date",
  "created_by_id",
  "last_modified_date",
  "last_modified_by_id",
  "synced_at",
  "last_synced_snapshot",
]);

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const entries = Object.entries(body as Record<string, unknown>);
  if (entries.length === 0) {
    return NextResponse.json({ error: "No fields provided" }, { status: 400 });
  }

  // Validate every field against the grants-table column list. Prevents
  // writing to arbitrary columns from the UI (e.g., id, system fields).
  const allowedColumns = new Set(await getGrantColumnKeys());
  const patch: Record<string, unknown> = {};
  for (const [col, value] of entries) {
    if (!allowedColumns.has(col)) {
      return NextResponse.json(
        { error: `Unknown column: ${col}` },
        { status: 400 }
      );
    }
    if (IMMUTABLE.has(col)) {
      return NextResponse.json(
        { error: `Field is not editable: ${col}` },
        { status: 400 }
      );
    }
    patch[col] = value;
  }

  const sb = getSupabase();
  const { data, error } = await sb
    .from("grants")
    .update(patch)
    .eq("id", id)
    .select()
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    return NextResponse.json({ error: "Grant not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true, row: data });
}
