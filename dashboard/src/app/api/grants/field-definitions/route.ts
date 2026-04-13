import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getFieldDefinitions } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(request: NextRequest) {
  try {
    const templateId = request.nextUrl.searchParams.get("template_id");
    const defs = await getFieldDefinitions(templateId);
    return NextResponse.json({ definitions: defs });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { key, label, field_type, options, template_id, sort_order } = await request.json();
  if (!key || !label || !field_type) {
    return NextResponse.json({ error: "key, label, field_type required" }, { status: 400 });
  }
  const slug = String(key).toLowerCase().replace(/[^a-z0-9_]+/g, "_").replace(/^_|_$/g, "");
  const s = getSupabase();
  const { data, error } = await s.from("field_definitions").insert({
    key: slug, label, field_type,
    options: field_type === "select" ? (options ?? []) : null,
    template_id: template_id ?? null,
    sort_order: sort_order ?? 0,
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ definition: data }, { status: 201 });
}
