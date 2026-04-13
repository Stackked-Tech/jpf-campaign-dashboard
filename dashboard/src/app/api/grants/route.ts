import { NextRequest, NextResponse } from "next/server";
import { getGrants } from "@/lib/grants/queries";
import { createGrant, type CreateGrantInput } from "@/lib/grants/mutations";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET() {
  try {
    const grants = await getGrants();
    return NextResponse.json({ grants });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const role = await getCurrentRole();
    if (role !== "admin" && role !== "grants") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const body = (await request.json()) as Partial<CreateGrantInput>;
    if (!body.funder_name || body.funder_name.trim().length === 0) {
      return NextResponse.json({ error: "funder_name is required" }, { status: 400 });
    }
    const input: CreateGrantInput = {
      template_id: body.template_id ?? null,
      funder_name: body.funder_name,
      sf_account_id: body.sf_account_id ?? null,
      funder_type: body.funder_type ?? null,
      restriction: body.restriction ?? null,
      program_name: body.program_name ?? null,
      request_amount: body.request_amount ?? null,
      submission_date: body.submission_date ?? null,
      notes: body.notes ?? null,
      custom_fields: body.custom_fields ?? {},
      created_by: role,
    };
    const grant = await createGrant(input);
    return NextResponse.json({ grant }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
