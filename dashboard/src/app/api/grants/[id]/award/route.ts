import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getGrantById } from "@/lib/grants/queries";
import { syncGrantToSalesforce } from "@/lib/grants/sf-sync";
import { getCurrentRole } from "@/lib/grants/role";

interface AwardInput {
  amount_awarded: number;
  award_date: string;
  grant_closes_date: string | null;
  is_recurring: boolean;
  renewal_due_date: string | null;
  reports: { name: string; due_date: string }[];
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const body = (await request.json()) as AwardInput;

  const grant = await getGrantById(id);
  if (!grant) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const s = getSupabase();

  const { error: updErr } = await s.from("grants").update({
    status: "awarded",
    amount_awarded: body.amount_awarded,
    award_date: body.award_date,
    grant_closes_date: body.grant_closes_date,
    is_recurring: body.is_recurring,
    renewal_due_date: body.renewal_due_date,
  }).eq("id", id);
  if (updErr) {
    return NextResponse.json({ error: `Supabase update failed: ${updErr.message}` }, { status: 500 });
  }

  if (body.reports.length > 0) {
    const { error: repErr } = await s.from("grant_reports").insert(
      body.reports.map((r) => ({ grant_id: id, name: r.name, due_date: r.due_date, sections: [] }))
    );
    if (repErr) {
      return NextResponse.json({ error: `Report insert failed: ${repErr.message}` }, { status: 500 });
    }
  }

  if (grant.template_id) {
    const { data: tmpl } = await s.from("grant_templates")
      .select("default_checklist_items").eq("id", grant.template_id).maybeSingle();
    const items = (tmpl?.default_checklist_items as { label: string; offset_days_from_award: number | null }[]) ?? [];
    const offsetByLabel = new Map(items.map((i) => [i.label, i.offset_days_from_award]));
    const { data: tasks } = await s.from("grant_tasks").select("id, label, due_date").eq("grant_id", id);
    for (const t of tasks ?? []) {
      if (t.due_date !== null) continue;
      const offset = offsetByLabel.get(t.label);
      if (offset == null) continue;
      await s.from("grant_tasks").update({ due_date: addDays(body.award_date, offset) }).eq("id", t.id);
    }
  }

  const refreshed = await getGrantById(id);
  const sync = await syncGrantToSalesforce(refreshed!);
  if (sync.ok && sync.sf_opportunity_id && !refreshed!.sf_opportunity_id) {
    await s.from("grants").update({ sf_opportunity_id: sync.sf_opportunity_id }).eq("id", id);
  }

  return NextResponse.json({
    ok: true,
    sf_sync: sync.ok ? "succeeded" : "failed",
    error: sync.ok ? undefined : sync.error,
  });
}
