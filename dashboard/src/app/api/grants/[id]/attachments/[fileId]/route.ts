import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(
  _r: NextRequest, { params }: { params: Promise<{ id: string; fileId: string }> }
) {
  const { fileId } = await params;
  const s = getSupabase();
  const { data: row, error } = await s.from("grant_attachments").select("*").eq("id", fileId).maybeSingle();
  if (error || !row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const signed = await s.storage.from("grant-attachments").createSignedUrl(row.storage_path, 300);
  if (signed.error || !signed.data) return NextResponse.json({ error: signed.error?.message ?? "sign failed" }, { status: 500 });
  return NextResponse.redirect(signed.data.signedUrl);
}

export async function DELETE(
  _r: NextRequest, { params }: { params: Promise<{ id: string; fileId: string }> }
) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden (admin only)" }, { status: 403 });
  const { fileId } = await params;
  const s = getSupabase();
  const { data: row } = await s.from("grant_attachments").select("storage_path").eq("id", fileId).maybeSingle();
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await s.storage.from("grant-attachments").remove([row.storage_path]);
  const { error } = await s.from("grant_attachments").delete().eq("id", fileId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
