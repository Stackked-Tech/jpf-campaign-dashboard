import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { invalidateGrantColumnCache } from "@/lib/grants/queries";

const VALID_TYPES = new Set([
  "text",
  "long_text",
  "number",
  "currency",
  "date",
  "bool",
  "select",
  "multi_select",
]);

export async function GET() {
  const sb = getSupabase();
  const { data, error } = await sb
    .from("field_definitions")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ field_definitions: data ?? [] });
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const label = String(body.label ?? "").trim();
  const keyRaw = String(body.key ?? "").trim();
  const field_type = String(body.field_type ?? "").trim();
  const options =
    Array.isArray(body.options) && body.options.length > 0 ? body.options : null;
  const is_hidden_default = !!body.is_hidden_default;

  if (!label || label.length > 60)
    return NextResponse.json({ error: "label must be 1–60 chars" }, { status: 400 });
  if (!/^cf_[a-z0-9_]{2,40}$/.test(keyRaw))
    return NextResponse.json(
      { error: "key must match ^cf_[a-z0-9_]{2,40}$" },
      { status: 400 }
    );
  if (!VALID_TYPES.has(field_type))
    return NextResponse.json({ error: "invalid field_type" }, { status: 400 });
  if ((field_type === "select" || field_type === "multi_select") && !options)
    return NextResponse.json(
      { error: "options required for select types" },
      { status: 400 }
    );

  const sb = getSupabase();

  // Next sort order
  const { data: max } = await sb
    .from("field_definitions")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();
  const nextOrder = ((max?.sort_order as number | undefined) ?? -1) + 1;

  const { data, error } = await sb.rpc("add_custom_field", {
    p_key: keyRaw,
    p_label: label,
    p_field_type: field_type,
    p_options: options,
    p_sort_order: nextOrder,
    p_is_hidden_default: is_hidden_default,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  invalidateGrantColumnCache();

  return NextResponse.json({
    field_definition: Array.isArray(data) ? data[0] : data,
  });
}
