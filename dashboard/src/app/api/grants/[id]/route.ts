import { NextRequest, NextResponse } from "next/server";
import { getGrantById } from "@/lib/grants/queries";
import { updateGrant, deleteGrant } from "@/lib/grants/mutations";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const grant = await getGrantById(id);
  if (!grant) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ grant });
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const patch = await request.json();
  const allowed = [
    "funder_name", "sf_account_id", "funder_type", "program_name", "restriction",
    "request_amount", "submission_date", "acknowledged_date", "receipt_date",
    "amount_awarded", "amount_received", "award_date", "grant_closes_date",
    "notes", "custom_fields", "is_recurring", "renewal_due_date",
  ] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in patch) clean[k] = patch[k];
  try {
    const grant = await updateGrant(id, clean);
    return NextResponse.json({ grant });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") {
    return NextResponse.json({ error: "Forbidden (admin only)" }, { status: 403 });
  }
  const { id } = await params;
  try {
    await deleteGrant(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
