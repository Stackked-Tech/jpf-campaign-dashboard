"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Pencil } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { FieldDefinition, Grant, GrantReport } from "@/lib/grants/types";
import { CustomFieldRenderer } from "./custom-field-renderer";

interface Props {
  grant: Grant;
  instanceUrl: string;
  nextDueReport: GrantReport | null;
  fieldDefinitions: FieldDefinition[];
}

function moneyToInput(n: number | null): string {
  return n == null ? "" : String(n);
}

export function GrantDetailOverviewEditable({
  grant: initial,
  instanceUrl,
  nextDueReport,
  fieldDefinitions,
}: Props) {
  const router = useRouter();
  const [grant, setGrant] = useState<Grant>(initial);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Grant>(initial);
  const [customDraft, setCustomDraft] = useState<Record<string, unknown>>(initial.custom_fields);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function startEdit() {
    setDraft(grant);
    setCustomDraft(grant.custom_fields);
    setEditing(true);
    setError("");
  }

  function cancelEdit() {
    setEditing(false);
    setError("");
  }

  async function save() {
    setSaving(true);
    setError("");
    try {
      const res = await fetch(`/api/grants/${grant.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          funder_name: draft.funder_name,
          funder_type: draft.funder_type,
          program_name: draft.program_name,
          restriction: draft.restriction,
          request_amount: draft.request_amount,
          amount_awarded: draft.amount_awarded,
          amount_received: draft.amount_received,
          submission_date: draft.submission_date,
          award_date: draft.award_date,
          receipt_date: draft.receipt_date,
          acknowledged_date: draft.acknowledged_date,
          grant_closes_date: draft.grant_closes_date,
          is_recurring: draft.is_recurring,
          renewal_due_date: draft.renewal_due_date,
          notes: draft.notes,
          custom_fields: customDraft,
        }),
      });
      const j = await res.json();
      if (!res.ok) {
        setError(j.error ?? "Save failed");
        setSaving(false);
        return;
      }
      setGrant(j.grant as Grant);
      setEditing(false);
      setSaving(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setSaving(false);
    }
  }

  const opportunityUrl = grant.sf_opportunity_id
    ? `${instanceUrl}/lightning/r/Opportunity/${grant.sf_opportunity_id}/view`
    : null;

  if (!editing) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <section>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Core</h3>
              <button
                type="button"
                onClick={startEdit}
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <Pencil className="h-3 w-3" /> Edit
              </button>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <dt className="text-muted-foreground">Funder</dt><dd>{grant.funder_name}</dd>
              <dt className="text-muted-foreground">Funder type</dt><dd>{grant.funder_type ?? "—"}</dd>
              <dt className="text-muted-foreground">Program</dt><dd>{grant.program_name ?? "—"}</dd>
              <dt className="text-muted-foreground">Restriction</dt><dd>{grant.restriction ?? "—"}</dd>
              <dt className="text-muted-foreground">Requested</dt><dd>{formatCurrency(grant.request_amount)}</dd>
              <dt className="text-muted-foreground">Awarded</dt><dd>{formatCurrency(grant.amount_awarded)}</dd>
              <dt className="text-muted-foreground">Received</dt><dd>{formatCurrency(grant.amount_received)}</dd>
              <dt className="text-muted-foreground">Submitted</dt><dd>{formatDate(grant.submission_date)}</dd>
              <dt className="text-muted-foreground">Award date</dt><dd>{formatDate(grant.award_date)}</dd>
              <dt className="text-muted-foreground">Receipt date</dt><dd>{formatDate(grant.receipt_date)}</dd>
              <dt className="text-muted-foreground">Acknowledged</dt><dd>{formatDate(grant.acknowledged_date)}</dd>
              <dt className="text-muted-foreground">Grant closes</dt><dd>{formatDate(grant.grant_closes_date)}</dd>
              <dt className="text-muted-foreground">Recurring</dt><dd>{grant.is_recurring ? "Yes" : "No"}</dd>
              {grant.is_recurring && (
                <>
                  <dt className="text-muted-foreground">Renewal due</dt>
                  <dd>{formatDate(grant.renewal_due_date)}</dd>
                </>
              )}
            </dl>
          </section>

          {fieldDefinitions.length > 0 || Object.keys(grant.custom_fields).length > 0 ? (
            <section>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Custom fields</h3>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {(fieldDefinitions.length > 0
                  ? fieldDefinitions.map((d) => [d.key, grant.custom_fields[d.key]] as const)
                  : Object.entries(grant.custom_fields)
                ).map(([k, v]) => {
                  const def = fieldDefinitions.find((d) => d.key === k);
                  const label = def?.label ?? k;
                  return (
                    <div key={k} className="contents">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd>{v == null || v === "" ? "—" : String(v)}</dd>
                    </div>
                  );
                })}
              </dl>
            </section>
          ) : null}

          {grant.notes && (
            <section>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Notes</h3>
              <p className="text-sm whitespace-pre-wrap">{grant.notes}</p>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          {opportunityUrl && (
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Salesforce</div>
              <a href={opportunityUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                Open Opportunity ↗
              </a>
            </div>
          )}
          {nextDueReport && (
            <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
              <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">Next action</div>
              <div className="text-sm">
                {nextDueReport.name} due <strong>{formatDate(nextDueReport.due_date)}</strong>
              </div>
            </div>
          )}
        </aside>
      </div>
    );
  }

  // Edit mode
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Edit grant</h3>
        <div className="flex gap-2">
          <button type="button" onClick={cancelEdit} className="btn-pill text-sm">Cancel</button>
          <button
            type="button"
            onClick={save}
            disabled={saving}
            className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 text-sm"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      {error && <p className="text-sm text-destructive font-medium">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Funder name">
          <input value={draft.funder_name} onChange={(e) => setDraft({ ...draft, funder_name: e.target.value })}
            className="input" />
        </Field>
        <Field label="Funder type">
          <select value={draft.funder_type ?? ""} onChange={(e) => setDraft({ ...draft, funder_type: (e.target.value || null) as Grant["funder_type"] })}
            className="input">
            <option value="">—</option>
            <option value="corporate">Corporate</option>
            <option value="private_foundation">Private Foundation</option>
            <option value="individual">Individual</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Program name">
          <input value={draft.program_name ?? ""} onChange={(e) => setDraft({ ...draft, program_name: e.target.value || null })} className="input" />
        </Field>
        <Field label="Restriction">
          <select value={draft.restriction ?? ""} onChange={(e) => setDraft({ ...draft, restriction: (e.target.value || null) as Grant["restriction"] })}
            className="input">
            <option value="">—</option>
            <option value="restricted">Restricted</option>
            <option value="unrestricted">Unrestricted</option>
          </select>
        </Field>
        <Field label="Requested amount">
          <input type="number" step="0.01" value={moneyToInput(draft.request_amount)}
            onChange={(e) => setDraft({ ...draft, request_amount: e.target.value === "" ? null : Number(e.target.value) })} className="input" />
        </Field>
        <Field label="Amount awarded">
          <input type="number" step="0.01" value={moneyToInput(draft.amount_awarded)}
            onChange={(e) => setDraft({ ...draft, amount_awarded: e.target.value === "" ? null : Number(e.target.value) })} className="input" />
        </Field>
        <Field label="Amount received">
          <input type="number" step="0.01" value={moneyToInput(draft.amount_received)}
            onChange={(e) => setDraft({ ...draft, amount_received: e.target.value === "" ? null : Number(e.target.value) })} className="input" />
        </Field>
        <Field label="Submission date">
          <input type="date" value={draft.submission_date ?? ""}
            onChange={(e) => setDraft({ ...draft, submission_date: e.target.value || null })} className="input" />
        </Field>
        <Field label="Award date">
          <input type="date" value={draft.award_date ?? ""}
            onChange={(e) => setDraft({ ...draft, award_date: e.target.value || null })} className="input" />
        </Field>
        <Field label="Receipt date">
          <input type="date" value={draft.receipt_date ?? ""}
            onChange={(e) => setDraft({ ...draft, receipt_date: e.target.value || null })} className="input" />
        </Field>
        <Field label="Acknowledged date">
          <input type="date" value={draft.acknowledged_date ?? ""}
            onChange={(e) => setDraft({ ...draft, acknowledged_date: e.target.value || null })} className="input" />
        </Field>
        <Field label="Grant closes">
          <input type="date" value={draft.grant_closes_date ?? ""}
            onChange={(e) => setDraft({ ...draft, grant_closes_date: e.target.value || null })} className="input" />
        </Field>
        <Field label="Recurring">
          <label className="flex items-center gap-2 text-sm h-full pt-2">
            <input type="checkbox" checked={draft.is_recurring}
              onChange={(e) => setDraft({ ...draft, is_recurring: e.target.checked })} />
            Renews annually
          </label>
        </Field>
        {draft.is_recurring && (
          <Field label="Renewal due date">
            <input type="date" value={draft.renewal_due_date ?? ""}
              onChange={(e) => setDraft({ ...draft, renewal_due_date: e.target.value || null })} className="input" />
          </Field>
        )}
      </div>

      <Field label="Notes">
        <textarea value={draft.notes ?? ""} onChange={(e) => setDraft({ ...draft, notes: e.target.value || null })}
          rows={4} className="input" />
      </Field>

      {fieldDefinitions.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Custom fields</h3>
          <CustomFieldRenderer
            definitions={fieldDefinitions}
            values={customDraft}
            onChange={(k, v) => setCustomDraft((prev) => ({ ...prev, [k]: v }))}
          />
        </section>
      )}

      <style jsx>{`
        :global(.input) {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{label}</span>
      {children}
    </div>
  );
}
