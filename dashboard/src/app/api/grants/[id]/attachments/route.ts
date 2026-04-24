import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const BUCKET = "grant-attachments";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sb = getSupabase();
  const { data, error } = await sb
    .from("grant_attachments")
    .select("*")
    .eq("grant_id", id)
    .order("uploaded_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ attachments: data ?? [] });
}

/**
 * POST accepts multipart/form-data with `file` + optional `category` and
 * `report_id`. Uploads to Supabase Storage then creates a grant_attachments
 * row.
 */
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "file missing" }, { status: 400 });
  }
  const category = (form.get("category") as string | null) || null;
  const reportId = (form.get("report_id") as string | null) || null;

  const sb = getSupabase();
  const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
  const storagePath = `${id}/${Date.now()}-${crypto.randomUUID()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error: uploadErr } = await sb.storage
    .from(BUCKET)
    .upload(storagePath, buffer, {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });
  if (uploadErr) {
    return NextResponse.json({ error: uploadErr.message }, { status: 500 });
  }

  const { data, error: dbErr } = await sb
    .from("grant_attachments")
    .insert({
      grant_id: id,
      report_id: reportId,
      filename: file.name,
      storage_path: storagePath,
      content_type: file.type || "application/octet-stream",
      size_bytes: file.size,
      category,
    })
    .select()
    .single();

  if (dbErr) {
    // Clean up orphaned upload
    await sb.storage.from(BUCKET).remove([storagePath]);
    return NextResponse.json({ error: dbErr.message }, { status: 500 });
  }

  return NextResponse.json({ attachment: data });
}
