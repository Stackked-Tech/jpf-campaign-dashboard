"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Grant, GrantStatus } from "@/lib/grants/types";
import { formatCurrency, formatDate } from "@/lib/utils";

interface Props { grants: Grant[]; }

const STATUS_ORDER: GrantStatus[] = ["pending", "awarded", "received", "open", "declined"];
const STATUS_LABELS: Record<GrantStatus, string> = {
  pending: "Pending",
  awarded: "Awarded",
  received: "Received",
  open: "Open (prior FY)",
  declined: "Declined",
};

export function PipelineTable({ grants }: Props) {
  const [q, setQ] = useState("");
  const [activeStatus, setActiveStatus] = useState<GrantStatus | "all">("all");

  const filtered = useMemo(
    () =>
      grants.filter((g) => {
        if (activeStatus !== "all" && g.status !== activeStatus) return false;
        if (q && !g.funder_name.toLowerCase().includes(q.toLowerCase())) return false;
        return true;
      }),
    [grants, q, activeStatus]
  );

  const grouped = useMemo(() => {
    const map = new Map<GrantStatus, Grant[]>();
    for (const g of filtered) {
      const arr = map.get(g.status) ?? [];
      arr.push(g);
      map.set(g.status, arr);
    }
    return map;
  }, [filtered]);

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search funder..."
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm"
        />
        <select
          value={activeStatus}
          onChange={(e) => setActiveStatus(e.target.value as GrantStatus | "all")}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
        >
          <option value="all">All statuses</option>
          {STATUS_ORDER.map((s) => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
        </select>
      </div>

      {STATUS_ORDER.map((status) => {
        const items = grouped.get(status) ?? [];
        if (items.length === 0) return null;
        return (
          <section key={status} className="rounded-lg border border-border bg-card">
            <header className="px-4 py-3 border-b border-border flex items-baseline justify-between">
              <h2 className="text-sm font-semibold">{STATUS_LABELS[status]}</h2>
              <span className="text-xs text-muted-foreground">{items.length}</span>
            </header>
            <table className="w-full text-sm">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="text-left px-4 py-2 font-medium">Funder</th>
                  <th className="text-left px-4 py-2 font-medium">Program</th>
                  <th className="text-right px-4 py-2 font-medium">Requested</th>
                  <th className="text-right px-4 py-2 font-medium">Awarded</th>
                  <th className="text-left px-4 py-2 font-medium">Submitted</th>
                  <th className="text-left px-4 py-2 font-medium">Award</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {items.map((g) => (
                  <tr key={g.id} className="hover:bg-muted/50">
                    <td className="px-4 py-2">
                      <Link href={`/grants/${g.id}`} className="hover:underline font-medium">
                        {g.funder_name}
                      </Link>
                    </td>
                    <td className="px-4 py-2">{g.program_name ?? "—"}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(g.request_amount)}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(g.amount_awarded)}</td>
                    <td className="px-4 py-2">{formatDate(g.submission_date)}</td>
                    <td className="px-4 py-2">{formatDate(g.award_date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      })}

      {filtered.length === 0 && (
        <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground text-center">
          No grants match these filters.
        </div>
      )}
    </div>
  );
}
