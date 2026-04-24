"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, FileText, Plus, Check, X as XIcon } from "lucide-react";
import { formatDate, cn } from "@/lib/utils";
import type { GrantReport } from "@/lib/grants/types";

export function ReportsPanel({
  grantId,
  reports: initialReports,
}: {
  grantId: string;
  reports: GrantReport[];
}) {
  const router = useRouter();
  const [reports, setReports] = useState(initialReports);
  const [adding, setAdding] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDue, setNewDue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const today = new Date().toISOString().slice(0, 10);
  const overdueCount = reports.filter(
    (r) => !r.submitted_date && r.due_date < today
  ).length;

  const create = async () => {
    if (!newName.trim() || !newDue) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/grants/${grantId}/reports`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName.trim(), due_date: newDue }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Create failed");
      setReports((prev) => [...prev, body.report as GrantReport]);
      setNewName("");
      setNewDue("");
      setAdding(false);
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Create failed");
    } finally {
      setSaving(false);
    }
  };

  const markSubmitted = async (r: GrantReport) => {
    const submitted_date = r.submitted_date ? null : today;
    const status = submitted_date ? "submitted" : "not_started";
    setReports((prev) =>
      prev.map((x) => (x.id === r.id ? { ...x, submitted_date, status } : x))
    );
    try {
      const res = await fetch(`/api/grants/${grantId}/reports/${r.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submitted_date, status }),
      });
      if (!res.ok) throw new Error("Save failed");
      router.refresh();
    } catch {
      setReports((prev) =>
        prev.map((x) => (x.id === r.id ? r : x))
      );
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-slate-500" />
          <h3 className="text-sm font-semibold">Reports</h3>
        </div>
        <div className="flex items-center gap-2">
          {overdueCount > 0 && (
            <span className="inline-flex items-center gap-1 text-xs font-medium rounded bg-red-50 text-red-700 px-1.5 py-0.5 border border-red-200">
              <AlertCircle className="h-3 w-3" />
              {overdueCount} overdue
            </span>
          )}
          <button
            onClick={() => setAdding(!adding)}
            className="text-slate-500 hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {adding && (
        <div className="mb-3 space-y-2 rounded-lg border border-border p-2">
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Report name (e.g., Q1 narrative)"
            className="w-full text-xs rounded border border-slate-300 px-2 py-1"
          />
          <input
            type="date"
            value={newDue}
            onChange={(e) => setNewDue(e.target.value)}
            className="w-full text-xs rounded border border-slate-300 px-2 py-1"
          />
          <div className="flex justify-end gap-1">
            <button
              onClick={() => {
                setAdding(false);
                setError(null);
              }}
              className="text-xs px-2 py-1 text-muted-foreground hover:text-foreground"
            >
              Cancel
            </button>
            <button
              onClick={create}
              disabled={saving || !newName.trim() || !newDue}
              className="text-xs px-2 py-1 rounded bg-blue-600 text-white disabled:bg-slate-200 disabled:text-slate-500"
            >
              Add
            </button>
          </div>
          {error && <div className="text-xs text-red-600">{error}</div>}
        </div>
      )}

      {reports.length === 0 ? (
        <p className="text-xs text-muted-foreground italic py-3 text-center">
          No reports tracked yet
        </p>
      ) : (
        <ul className="space-y-1.5">
          {reports.map((r) => {
            const isOverdue = !r.submitted_date && r.due_date < today;
            const isSubmitted = !!r.submitted_date;
            return (
              <li
                key={r.id}
                className={cn(
                  "rounded border px-2 py-1.5 text-xs",
                  isOverdue
                    ? "border-red-200 bg-red-50"
                    : isSubmitted
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-border bg-card"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className={cn("font-medium", isSubmitted && "line-through text-slate-500")}>
                      {r.name}
                    </div>
                    <div className={cn("text-[11px]", isOverdue ? "text-red-700" : "text-muted-foreground")}>
                      {isSubmitted
                        ? `Submitted ${formatDate(r.submitted_date ?? "")}`
                        : `Due ${formatDate(r.due_date)}`}
                    </div>
                  </div>
                  <button
                    onClick={() => markSubmitted(r)}
                    className={cn(
                      "h-5 w-5 rounded border flex items-center justify-center shrink-0",
                      isSubmitted
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-slate-300 hover:border-slate-500"
                    )}
                    title={isSubmitted ? "Mark as not submitted" : "Mark as submitted"}
                  >
                    {isSubmitted ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <XIcon className="h-2.5 w-2.5 opacity-0" />
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
