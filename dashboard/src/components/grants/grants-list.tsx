"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import { StatusChip } from "./status-chip";
import { SourceBadge } from "./source-badge";
import type { UnifiedGrantRow } from "@/lib/grants/types";

export function GrantsList({ rows }: { rows: UnifiedGrantRow[] }) {
  const [search, setSearch] = useState("");
  const [sources, setSources] = useState<Set<"sf" | "instrumentl">>(
    new Set(["sf", "instrumentl"])
  );
  const [statuses, setStatuses] = useState<Set<string>>(new Set());

  // Build unique status list from data
  const allStatuses = useMemo(() => {
    const set = new Set<string>();
    for (const r of rows) if (r.status) set.add(r.status);
    return [...set].sort();
  }, [rows]);

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return rows.filter((r) => {
      if (r.source !== "linked" && !sources.has(r.source)) return false;
      if (statuses.size > 0 && (!r.status || !statuses.has(r.status))) return false;
      if (needle) {
        const hay = `${r.name} ${r.funder_name ?? ""}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [rows, search, sources, statuses]);

  const toggleSource = (s: "sf" | "instrumentl") => {
    setSources((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });
  };

  const toggleStatus = (s: string) => {
    setStatuses((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });
  };

  const clearFilters = () => {
    setSearch("");
    setSources(new Set(["sf", "instrumentl"]));
    setStatuses(new Set());
  };

  const hasFilters =
    search.length > 0 || statuses.size > 0 || sources.size < 2;

  return (
    <div className="space-y-4">
      {/* Search + source filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[240px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search funder or grant name…"
            className="w-full rounded-lg border border-border bg-card pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground mr-1">Source:</span>
          {(["sf", "instrumentl"] as const).map((s) => (
            <button
              key={s}
              onClick={() => toggleSource(s)}
              className={cn(
                "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
                sources.has(s)
                  ? s === "sf"
                    ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "bg-purple-50 text-purple-700 border-purple-200"
                  : "bg-card text-muted-foreground border-border hover:bg-slate-50"
              )}
            >
              {s === "sf" ? "Salesforce" : "Instrumentl"}
            </button>
          ))}
        </div>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
            Clear filters
          </button>
        )}

        <div className="ml-auto text-sm text-muted-foreground">
          {filtered.length} of {rows.length}
        </div>
      </div>

      {/* Status chips */}
      {allStatuses.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-muted-foreground mr-1">Status:</span>
          {allStatuses.map((s) => (
            <button
              key={s}
              onClick={() => toggleStatus(s)}
              className={cn(
                "rounded-md border px-2 py-0.5 text-xs font-medium transition-colors",
                statuses.has(s)
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-card text-slate-600 border-border hover:bg-slate-50"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-border">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Funder</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Amount</th>
                <th className="px-4 py-3">Internal deadline</th>
                <th className="px-4 py-3">External deadline</th>
                <th className="px-4 py-3 text-center">Source</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-muted-foreground">
                    {hasFilters
                      ? "No grants match these filters."
                      : "No grants yet."}
                  </td>
                </tr>
              ) : (
                filtered.map((r) => {
                  const href =
                    r.source === "sf" || r.source === "linked"
                      ? `/grants/${r.grant_id ?? r.id}`
                      : `/grants/instrumentl/${r.instrumentl_id ?? r.id}`;
                  return (
                    <tr
                      key={`${r.source}-${r.id}`}
                      className="border-b border-border last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-foreground font-medium whitespace-nowrap max-w-[220px] truncate">
                        <Link href={href} className="hover:underline">
                          {r.funder_name ?? "—"}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-slate-600 max-w-[280px] truncate">
                        <Link href={href} className="hover:underline">
                          {r.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3">
                        <StatusChip status={r.status} />
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-xs">
                        {r.amount != null ? formatCurrency(r.amount) : "—"}
                        {r.amount_range && (
                          <div
                            className="text-[10px] text-muted-foreground"
                            title={r.amount_range}
                          >
                            {r.amount_range.length > 24
                              ? r.amount_range.slice(0, 24) + "…"
                              : r.amount_range}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                        {formatDate(r.internal_deadline)}
                      </td>
                      <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                        {formatDate(r.deadline)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <SourceBadge source={r.source} />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
