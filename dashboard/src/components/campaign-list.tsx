"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Campaign } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { ChevronRight, Search } from "lucide-react";

interface CampaignListProps {
  campaigns: Campaign[];
}

export function CampaignList({ campaigns }: CampaignListProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return campaigns;
    const q = search.toLowerCase();
    return campaigns.filter(
      (c) =>
        c.Name.toLowerCase().includes(q) ||
        (c.Type?.toLowerCase().includes(q)) ||
        (c.Status?.toLowerCase().includes(q))
    );
  }, [campaigns, search]);

  if (campaigns.length === 0) {
    return (
      <p className="text-muted-foreground py-8 text-center">
        No active campaigns found.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search campaigns by name, type, or status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

    {filtered.length === 0 ? (
      <p className="text-muted-foreground py-8 text-center">
        No campaigns match &ldquo;{search}&rdquo;.
      </p>
    ) : (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/60">
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Name</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Status</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Type</th>
            <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Start Date</th>
            <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground"># Opps</th>
            <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Total Amount</th>
            <th className="w-8"></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((c) => (
            <tr
              key={c.Id}
              className="border-b border-border last:border-0 hover:bg-accent/40 transition-colors group"
            >
              <td className="px-5 py-3.5">
                <Link
                  href={`/campaigns/${c.Id}`}
                  className="text-primary hover:underline font-semibold"
                >
                  {c.Name}
                </Link>
              </td>
              <td className="px-5 py-3.5">
                <span className="inline-flex items-center rounded-full bg-success-light px-2.5 py-0.5 text-xs font-semibold text-success">
                  {c.Status}
                </span>
              </td>
              <td className="px-5 py-3.5 text-muted-foreground">
                {c.Type || "—"}
              </td>
              <td className="px-5 py-3.5 text-muted-foreground">
                {formatDate(c.StartDate)}
              </td>
              <td className="px-5 py-3.5 text-right tabular-nums">
                {c.NumberOfOpportunities}
              </td>
              <td className="px-5 py-3.5 text-right tabular-nums font-semibold">
                {formatCurrency(c.AmountAllOpportunities)}
              </td>
              <td className="pr-3">
                <ChevronRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )}
    </div>
  );
}
