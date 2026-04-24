import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const BUCKET = "grant-attachments";

/** GET — returns a short-lived signed URL for downloading the file. */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; attachmentId: string }> }
) {
  const { id, attachmentId } = await params;
  const sb = getSupabase();
  const { data: att, error } = await sb
    .from("grant_attachments")
    .select("storage_path, filename")
    .eq("id", attachmentId)
    .eq("grant_id", id)
    .maybeSingle();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!att) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { data: signed, error: signErr } = await sb.storage
    .from(BUCKET)
    .createSignedUrl(att.storage_path, 60 * 10); // 10 min
  if (signErr) return NextResponse.json({ error: signErr.message }, { status: 500 });
  return NextResponse.json({ url: signed.signedUrl, filename: att.filename });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string; attachmentId: string }> }
) {
  const { id, attachmentId } = await params;
  const sb = getSupabase();
  const { data: att, error: lookupErr } = await sb
    .from("grant_attachments")
    .select("storage_path")
    .eq("id", attachmentId)
    .eq("grant_id", id)
    .maybeSingle();
  if (lookupErr)
    return NextResponse.json({ error: lookupErr.message }, { status: 500 });
  if (!att) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const { error: delErr } = await sb
    .from("grant_attachments")
    .delete()
    .eq("id", attachmentId)
    .eq("grant_id", id);
  if (delErr) return NextResponse.json({ error: delErr.message }, { status: 500 });

  // Best-effort: remove from storage. Orphaned file is benign if this fails.
  await sb.storage.from(BUCKET).remove([att.storage_path]);
  return NextResponse.json({ success: true });
}
