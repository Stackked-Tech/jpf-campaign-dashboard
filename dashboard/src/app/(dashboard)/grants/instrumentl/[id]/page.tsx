import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { formatCurrency, formatDate } from "@/lib/utils";
import { StatusChip } from "@/components/grants/status-chip";
import { SourceBadge } from "@/components/grants/source-badge";

export const dynamic = "force-dynamic";

export default async function InstrumentlDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sb = getSupabase();
  const { data, error } = await sb
    .from("instrumentl_opportunities")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(`instrumentl detail: ${error.message}`);
  if (!data) notFound();

  const row = data as Record<string, unknown>;

  return (
    <div className="space-y-6">
      <Link
        href="/grants"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-3 w-3" />
        All grants
      </Link>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <SourceBadge source="instrumentl" />
          <span className="text-xs text-muted-foreground">
            Pipeline pursuit — not yet in Salesforce
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          {String(row.opportunity_name)}
        </h1>
        <div className="mt-1.5 flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
          {row.account_name ? (
            <span className="font-medium text-foreground/80">
              {String(row.account_name)}
            </span>
          ) : null}
          <span>·</span>
          <StatusChip status={(row.status as string) ?? null} />
          {typeof row.amount === "number" && row.amount != null && (
            <>
              <span>·</span>
              <span className="font-mono text-foreground/70">
                {formatCurrency(row.amount)}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="divide-y divide-border">
          <Field label="Funder" value={row.account_name} />
          <Field label="Status" value={row.status} />
          <Field
            label="Amount"
            value={
              row.amount != null && typeof row.amount === "number"
                ? formatCurrency(row.amount)
                : null
            }
          />
          {row.amount_range != null && (
            <Field label="Amount range" value={row.amount_range} />
          )}
          {row.is_in_kind === true && (
            <Field label="In-kind support" value="Yes" />
          )}
          <Field
            label="Internal deadline"
            value={row.internal_deadline ? formatDate(String(row.internal_deadline)) : null}
          />
          <Field
            label="External deadline"
            value={row.deadline ? formatDate(String(row.deadline)) : null}
          />
          <Field label="Next task / notes" value={row.next_task_and_notes} longText />
          <Field
            label="Linked SF grant"
            value={row.sf_opportunity_id ?? "Not linked"}
          />
        </div>

        <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
          Linking to an SF grant is available in Phase 6. For now, Instrumentl
          rows stay separate.
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  longText = false,
}: {
  label: string;
  value: unknown;
  longText?: boolean;
}) {
  const isEmpty = value === null || value === undefined || value === "";
  return (
    <div className="grid grid-cols-[180px_1fr] gap-4 py-2.5 items-start">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="text-sm">
        {isEmpty ? (
          <span className="text-muted-foreground">—</span>
        ) : longText ? (
          <p className="whitespace-pre-wrap">{String(value)}</p>
        ) : (
          <span>{String(value)}</span>
        )}
      </div>
    </div>
  );
}
