"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FunderSearchCombobox } from "./funder-search-combobox";
import { CustomFieldRenderer } from "./custom-field-renderer";
import type { FieldDefinition, GrantTemplate } from "@/lib/grants/types";

interface Props { templates: GrantTemplate[]; }

export function GrantCreateForm({ templates }: Props) {
  const router = useRouter();
  const [templateId, setTemplateId] = useState<string | null>(null);
  const [funder, setFunder] = useState<{ sf_account_id: string | null; funder_name: string } | null>(null);
  const [funderType, setFunderType] = useState("");
  const [restriction, setRestriction] = useState("");
  const [programName, setProgramName] = useState("");
  const [requestAmount, setRequestAmount] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [notes, setNotes] = useState("");
  const [customValues, setCustomValues] = useState<Record<string, unknown>>({});
  const [fieldDefs, setFieldDefs] = useState<FieldDefinition[]>([]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const url = templateId
      ? `/api/grants/field-definitions?template_id=${templateId}`
      : `/api/grants/field-definitions`;
    fetch(url).then((r) => r.json()).then((j) => setFieldDefs(j.definitions ?? [])).catch(() => setFieldDefs([]));
  }, [templateId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!funder?.funder_name.trim()) { setError("Please pick or type a funder."); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/grants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template_id: templateId,
          funder_name: funder.funder_name,
          sf_account_id: funder.sf_account_id,
          funder_type: funderType || null,
          restriction: restriction || null,
          program_name: programName.trim() || null,
          request_amount: requestAmount ? Number(requestAmount) : null,
          submission_date: submissionDate || null,
          notes: notes.trim() || null,
          custom_fields: customValues,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Failed to create grant");
      }
      const { grant } = await res.json();
      router.push(`/grants/${grant.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <section className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Template</label>
        <select value={templateId ?? ""} onChange={(e) => setTemplateId(e.target.value || null)}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
          <option value="">— None (blank) —</option>
          {templates.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
      </section>

      <section className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Funder</label>
        <FunderSearchCombobox value={funder} onChange={setFunder} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Funder type</label>
          <select value={funderType} onChange={(e) => setFunderType(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
            <option value="">—</option>
            <option value="corporate">Corporate</option>
            <option value="private_foundation">Private Foundation</option>
            <option value="individual">Individual</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Restriction</label>
          <select value={restriction} onChange={(e) => setRestriction(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
            <option value="">—</option>
            <option value="restricted">Restricted</option>
            <option value="unrestricted">Unrestricted</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Program name</label>
          <input value={programName} onChange={(e) => setProgramName(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            placeholder="e.g., LifeWorks, Pathways Project" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Requested amount</label>
          <input type="number" min="0" step="0.01" value={requestAmount} onChange={(e) => setRequestAmount(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Submission date</label>
          <input type="date" value={submissionDate} onChange={(e) => setSubmissionDate(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
      </div>

      <section className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
      </section>

      {fieldDefs.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold">Custom fields</h2>
          <CustomFieldRenderer definitions={fieldDefs} values={customValues}
            onChange={(k, v) => setCustomValues((prev) => ({ ...prev, [k]: v }))} />
        </section>
      )}

      {error && <p className="text-sm text-destructive font-medium">{error}</p>}
      <div className="flex justify-end gap-3">
        <button type="submit" disabled={submitting}
          className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
          {submitting ? "Creating…" : "Create grant"}
        </button>
      </div>
    </form>
  );
}
