import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getGrantById } from "@/lib/grants/queries";
import { syncGrantToSalesforce } from "@/lib/grants/sf-sync";
import { getCurrentRole } from "@/lib/grants/role";

export async function POST(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const grant = await getGrantById(id);
  if (!grant) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (grant.status !== "awarded" && grant.status !== "received" && grant.status !== "open") {
    return NextResponse.json({ error: "Grant is not in an awarded state" }, { status: 400 });
  }
  const sync = await syncGrantToSalesforce(grant);
  if (sync.ok && sync.sf_opportunity_id && !grant.sf_opportunity_id) {
    const s = getSupabase();
    await s.from("grants").update({ sf_opportunity_id: sync.sf_opportunity_id }).eq("id", id);
  }
  return NextResponse.json({
    ok: sync.ok,
    sf_opportunity_id: sync.sf_opportunity_id,
    error: sync.ok ? undefined : sync.error,
  });
}
