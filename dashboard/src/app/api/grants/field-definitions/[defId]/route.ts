import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

// Only label/sort_order/is_hidden_default/options are mutable after create.
// key and field_type are immutable.
const PATCHABLE = new Set(["label", "sort_order", "is_hidden_default", "options"]);

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ defId: string }> }
) {
  const { defId } = await params;
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Special validation: options can only be ADDED (not removed). Enforces
  // the spec invariant that option removal is destructive.
  const sb = getSupabase();
  if ("options" in body) {
    const { data: existing, error: lookupErr } = await sb
      .from("field_definitions")
      .select("options, field_type")
      .eq("id", defId)
      .maybeSingle();
    if (lookupErr)
      return NextResponse.json({ error: lookupErr.message }, { status: 500 });
    if (!existing)
      return NextResponse.json({ error: "Not found" }, { status: 404 });

    const prev = (existing.options as string[] | null) ?? [];
    const next = (body.options as string[] | null) ?? [];
    if (!Array.isArray(next))
      return NextResponse.json(
        { error: "options must be an array" },
        { status: 400 }
      );
    const removed = prev.filter((p) => !next.includes(p));
    if (removed.length > 0) {
      return NextResponse.json(
        { error: `Cannot remove existing options: ${removed.join(", ")}` },
        { status: 400 }
      );
    }
  }

  const patch: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(body)) {
    if (!PATCHABLE.has(k)) continue;
    patch[k] = v;
  }
  if (Object.keys(patch).length === 0)
    return NextResponse.json({ error: "No patchable fields" }, { status: 400 });

  const { data, error } = await sb
    .from("field_definitions")
    .update(patch)
    .eq("id", defId)
    .select()
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ field_definition: data });
}
