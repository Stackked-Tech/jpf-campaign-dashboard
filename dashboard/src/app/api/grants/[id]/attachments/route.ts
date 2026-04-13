import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getAttachmentsForGrant } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

const MAX_BYTES = 25 * 1024 * 1024;
const ALLOWED = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/msword",
  "application/vnd.ms-excel",
  "image/png",
  "image/jpeg",
]);

export async function GET(_r: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const attachments = await getAttachmentsForGrant(id);
  return NextResponse.json({ attachments });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "file required" }, { status: 400 });
  if (file.size > MAX_BYTES) return NextResponse.json({ error: "file too large (max 25 MB)" }, { status: 400 });
  if (!ALLOWED.has(file.type)) return NextResponse.json({ error: `unsupported type: ${file.type}` }, { status: 400 });

  const s = getSupabase();
  const uuid = crypto.randomUUID();
  const path = `${id}/${uuid}-${file.name}`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  const up = await s.storage.from("grant-attachments").upload(path, bytes, {
    contentType: file.type, upsert: false,
  });
  if (up.error) return NextResponse.json({ error: `upload failed: ${up.error.message}` }, { status: 500 });

  const { data, error } = await s.from("grant_attachments").insert({
    grant_id: id, filename: file.name, storage_path: path,
    content_type: file.type, size_bytes: file.size, uploaded_by: role,
  }).select("*").single();
  if (error) {
    await s.storage.from("grant-attachments").remove([path]);
    return NextResponse.json({ error: `row insert failed: ${error.message}` }, { status: 500 });
  }

  return NextResponse.json({ attachment: data }, { status: 201 });
}
