"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Loader2, Search, Link2 } from "lucide-react";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import { StatusChip } from "./status-chip";

interface Candidate {
  sf_id: string;
  sf_account_name: string | null;
  sf_name: string;
  sf_stage: string | null;
  sf_amount: number | null;
  sf_close_date: string | null;
  f1: number;
  matched_tokens: string[];
}

export function InstrumentlLinkPicker({
  instrumentlId,
  open,
  onClose,
  onLinked,
}: {
  instrumentlId: string;
  open: boolean;
  onClose: () => void;
  onLinked: (sfId: string) => void;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [linkingId, setLinkingId] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`/api/grants/instrumentl/${instrumentlId}/candidates`)
      .then(async (r) => {
        const body = await r.json();
        if (!r.ok) throw new Error(body.error ?? "Failed to load candidates");
        if (cancelled) return;
        setCandidates(body.candidates as Candidate[]);
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
  }, [instrumentlId, open]);

  if (!open) return null;

  const link = async (sfId: string) => {
    setLinkingId(sfId);
    try {
      const res = await fetch(`/api/grants/instrumentl/${instrumentlId}/link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sf_opportunity_id: sfId }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Link failed");
      onLinked(sfId);
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Link failed");
    } finally {
      setLinkingId(null);
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
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <h2 className="text-lg font-semibold">Link to Salesforce grant</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Match this Instrumentl pursuit to an existing SF grant. Top
              candidates ranked by name similarity.
            </p>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-slate-100">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {loading ? (
            <div className="py-16 flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Finding candidates…</span>
            </div>
          ) : error ? (
            <div className="py-8 text-center text-sm text-red-600">{error}</div>
          ) : candidates.length === 0 ? (
            <div className="py-16 text-center text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm">
                No similar SF grants found. This pursuit may not have an SF
                counterpart yet.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {candidates.map((c) => (
                <li
                  key={c.sf_id}
                  className="rounded-lg border border-border p-3 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium truncate">
                          {c.sf_account_name ?? "(no account)"}
                        </span>
                        <StatusChip status={c.sf_stage} />
                      </div>
                      <div className="text-sm text-muted-foreground truncate mt-0.5">
                        {c.sf_name}
                      </div>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                        {c.sf_amount != null && (
                          <span className="font-mono">
                            {formatCurrency(c.sf_amount)}
                          </span>
                        )}
                        {c.sf_close_date && (
                          <span>{formatDate(c.sf_close_date)}</span>
                        )}
                        <span className="text-slate-400">
                          match {Math.round(c.f1 * 100)}%
                        </span>
                        <span className="text-slate-400 font-mono text-[10px]">
                          {c.matched_tokens.slice(0, 4).join(", ")}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => link(c.sf_id)}
                      disabled={!!linkingId}
                      className={cn(
                        "shrink-0 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                        "bg-blue-600 text-white hover:bg-blue-700",
                        "disabled:bg-slate-200 disabled:text-slate-500"
                      )}
                    >
                      {linkingId === c.sf_id ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Link2 className="h-3.5 w-3.5" />
                      )}
                      Link
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="px-6 py-3 border-t border-border text-xs text-muted-foreground">
          Don&apos;t see the right grant? Link is reversible — you can unlink
          from the detail page.
        </div>
      </div>
    </div>
  );
}
