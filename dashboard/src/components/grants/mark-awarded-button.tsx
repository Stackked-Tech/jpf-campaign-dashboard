"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props { grantId: string; currentStatus: string; }

export function MarkAwardedButton({ grantId, currentStatus }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [awardDate, setAwardDate] = useState(new Date().toISOString().slice(0, 10));
  const [closesDate, setClosesDate] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [renewalDate, setRenewalDate] = useState("");
  const [reports, setReports] = useState<{ name: string; due_date: string }[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (currentStatus === "awarded" || currentStatus === "received" || currentStatus === "open") return null;

  function addReport() { setReports((r) => [...r, { name: `Report ${r.length + 1}`, due_date: "" }]); }
  function removeReport(idx: number) { setReports((r) => r.filter((_, i) => i !== idx)); }

  async function submit() {
    setError("");
    if (!amount || !awardDate) { setError("Amount and award date are required."); return; }
    setSubmitting(true);
    try {
      const res = await fetch(`/api/grants/${grantId}/award`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount_awarded: Number(amount),
          award_date: awardDate,
          grant_closes_date: closesDate || null,
          is_recurring: recurring,
          renewal_due_date: recurring ? (renewalDate || null) : null,
          reports: reports.filter((r) => r.name && r.due_date),
        }),
      });
      const j = await res.json();
      if (!res.ok) { setError(j.error ?? "Failed"); setSubmitting(false); return; }
      setOpen(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setSubmitting(false);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
        Mark awarded
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-4">
            <h2 className="text-lg font-bold">Mark grant awarded</h2>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1 text-sm">
                Amount awarded
                <input type="number" min="0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2" />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Award date
                <input type="date" value={awardDate} onChange={(e) => setAwardDate(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2" />
              </label>
              <label className="flex flex-col gap-1 text-sm col-span-2">
                Grant closes (optional)
                <input type="date" value={closesDate} onChange={(e) => setClosesDate(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2" />
              </label>
              <label className="col-span-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} />
                Recurring grant (renews annually)
              </label>
              {recurring && (
                <label className="col-span-2 flex flex-col gap-1 text-sm">
                  Renewal due date
                  <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)}
                    className="rounded-lg border border-border bg-background px-3 py-2" />
                </label>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">Reports due</h3>
                <button type="button" onClick={addReport} className="text-xs text-primary hover:underline">+ add</button>
              </div>
              {reports.length === 0 && <p className="text-xs text-muted-foreground">No report deadlines. Add any the funder requires.</p>}
              <div className="space-y-2">
                {reports.map((r, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input type="text" value={r.name} placeholder="Report name"
                      onChange={(e) => { const next = [...reports]; next[idx] = { ...r, name: e.target.value }; setReports(next); }}
                      className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                    <input type="date" value={r.due_date}
                      onChange={(e) => { const next = [...reports]; next[idx] = { ...r, due_date: e.target.value }; setReports(next); }}
                      className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                    <button type="button" onClick={() => removeReport(idx)} className="text-xs text-muted-foreground">×</button>
                  </div>
                ))}
              </div>
            </div>
            {error && <p className="text-sm text-destructive font-medium">{error}</p>}
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setOpen(false)} className="btn-pill">Cancel</button>
              <button type="button" onClick={submit} disabled={submitting}
                className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
                {submitting ? "Saving…" : "Mark awarded"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
