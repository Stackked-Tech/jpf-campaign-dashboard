"use client";

import { useEffect, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, X } from "lucide-react";
import { formatCurrency, formatDate, cn } from "@/lib/utils";

interface DiffRow {
  column: string;
  sf_field: string;
  label: string;
  local_value: unknown;
  sf_value: unknown;
  sf_type: string;
}

export function SyncToSfModal({
  grantId,
  open,
  onClose,
  onSuccess,
}: {
  grantId: string;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [loading, setLoading] = useState(true);
  const [diffs, setDiffs] = useState<DiffRow[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    setSuccess(false);
    fetch(`/api/grants/${grantId}/sync`)
      .then(async (r) => {
        const body = await r.json();
        if (!r.ok) throw new Error(body.error ?? "Failed to load diff");
        if (cancelled) return;
        setDiffs(body.diffs as DiffRow[]);
        setSelected(new Set((body.diffs as DiffRow[]).map((d) => d.column)));
      })
      .catch((e) => {
        if (!cancelled) setError(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [grantId, open]);

  if (!open) return null;

  const toggle = (col: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(col)) next.delete(col);
      else next.add(col);
      return next;
    });
  };

  const submit = async () => {
    if (selected.size === 0) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/grants/${grantId}/sync`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ columns: [...selected] }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Sync failed");
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1200);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sync failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] flex flex-col bg-white rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h2 className="text-lg font-semibold">Sync to Salesforce</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Review local → SF changes. Uncheck anything you don&apos;t want to push.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-slate-100"
            disabled={submitting}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {loading ? (
            <div className="py-12 flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Comparing with Salesforce…</span>
            </div>
          ) : error ? (
            <div className="py-8 text-center">
              <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          ) : success ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
              <p className="text-sm font-medium text-emerald-800">
                Synced {selected.size}
                {selected.size === 1 ? " field" : " fields"} to Salesforce.
              </p>
            </div>
          ) : diffs.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <p className="text-sm">No differences — local is already in sync with Salesforce.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {diffs.map((d) => (
                <label
                  key={d.column}
                  className={cn(
                    "flex items-start gap-3 rounded-lg border px-3 py-2.5 cursor-pointer transition-colors",
                    selected.has(d.column)
                      ? "border-blue-200 bg-blue-50/50"
                      : "border-border bg-card hover:bg-slate-50"
                  )}
                >
                  <input
                    type="checkbox"
                    checked={selected.has(d.column)}
                    onChange={() => toggle(d.column)}
                    className="mt-1"
                    disabled={submitting}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {d.label}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm">
                      <DiffValue value={d.sf_value} type={d.sf_type} dim />
                      <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" />
                      <DiffValue value={d.local_value} type={d.sf_type} />
                    </div>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-slate-50/50">
          <div className="text-xs text-muted-foreground">
            {loading || error ? null : diffs.length === 0 ? (
              "No changes to sync"
            ) : (
              <>
                {selected.size} of {diffs.length} selected
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              disabled={submitting}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              onClick={submit}
              disabled={
                loading ||
                !!error ||
                success ||
                diffs.length === 0 ||
                selected.size === 0 ||
                submitting
              }
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                "bg-blue-600 text-white hover:bg-blue-700",
                "disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed"
              )}
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Push {selected.size > 0 ? `${selected.size} ` : ""}to Salesforce
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiffValue({
  value,
  type,
  dim = false,
}: {
  value: unknown;
  type: string;
  dim?: boolean;
}) {
  let rendered: string;
  if (value === null || value === undefined || value === "") {
    rendered = "—";
  } else if (type === "currency") {
    rendered = formatCurrency(Number(value));
  } else if (type === "date") {
    rendered = formatDate(String(value));
  } else if (type === "datetime") {
    rendered = formatDate(String(value).slice(0, 10));
  } else if (type === "boolean") {
    rendered = value ? "Yes" : "No";
  } else {
    rendered = String(value);
    if (rendered.length > 80) rendered = rendered.slice(0, 77) + "…";
  }
  return (
    <span
      className={cn(
        "font-mono text-xs whitespace-nowrap truncate",
        dim ? "text-slate-500" : "text-foreground font-semibold"
      )}
    >
      {rendered}
    </span>
  );
}
