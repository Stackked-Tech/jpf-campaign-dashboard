"use client";

import { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";
import type { DonorContact, GivingStatus } from "@/lib/types";
import { getGivingStatus, mostRecentDate } from "@/lib/types";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import { SfLink } from "@/components/sf-link";
import { StatsCard } from "@/components/stats-card";

interface DonorTableProps {
  donors: DonorContact[];
  instanceUrl: string;
}

const statusConfig: Record<GivingStatus, { label: string; bg: string; text: string }> = {
  Active:      { label: "Active",      bg: "bg-emerald-100", text: "text-emerald-700" },
  Lapsed:      { label: "Lapsed",      bg: "bg-amber-100",   text: "text-amber-700" },
  Dormant:     { label: "Dormant",     bg: "bg-red-100",     text: "text-red-700" },
  "Never Given": { label: "Never Given", bg: "bg-gray-100",  text: "text-gray-600" },
};

const thClass =
  "px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground";

const inputClass =
  "rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

export function DonorTable({ donors, instanceUrl }: DonorTableProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [accountTypeFilter, setAccountTypeFilter] = useState("");

  // Compute giving status for each donor once
  const donorsWithStatus = useMemo(
    () =>
      donors.map((d) => ({
        ...d,
        givingStatus: getGivingStatus(d.npo02__LastCloseDate__c, d.lastPaidPaymentDate),
        lastActivityDate: mostRecentDate(d.npo02__LastCloseDate__c, d.lastPaidPaymentDate),
      })),
    [donors]
  );

  // Derive account types from data
  const accountTypes = useMemo(() => {
    const set = new Set<string>();
    for (const d of donors) {
      const t = d.Account?.Type;
      if (t) set.add(t);
    }
    return Array.from(set).sort();
  }, [donors]);

  // Filter
  const filtered = useMemo(() => {
    let result = donorsWithStatus;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) =>
          d.Name.toLowerCase().includes(q) ||
          (d.Email?.toLowerCase().includes(q) ?? false) ||
          (d.Account?.Name?.toLowerCase().includes(q) ?? false)
      );
    }

    if (statusFilter) {
      result = result.filter((d) => d.givingStatus === statusFilter);
    }

    if (accountTypeFilter) {
      result = result.filter((d) => d.Account?.Type === accountTypeFilter);
    }

    return result;
  }, [donorsWithStatus, search, statusFilter, accountTypeFilter]);

  // Stats (computed from full dataset)
  const totalDonors = donorsWithStatus.length;
  const activeDonors = donorsWithStatus.filter((d) => d.givingStatus === "Active").length;
  const neverGiven = donorsWithStatus.filter((d) => d.givingStatus === "Never Given").length;
  const lifetimeGiving = donorsWithStatus.reduce(
    (sum, d) => sum + (d.npo02__TotalOppAmount__c ?? 0),
    0
  );

  const hasFilters = search || statusFilter || accountTypeFilter;

  function clearFilters() {
    setSearch("");
    setStatusFilter("");
    setAccountTypeFilter("");
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total Donors" value={totalDonors.toLocaleString()} />
        <StatsCard label="Active Donors" value={activeDonors.toLocaleString()} />
        <StatsCard label="Never Given" value={neverGiven.toLocaleString()} />
        <StatsCard label="Lifetime Giving" value={formatCurrency(lifetimeGiving)} />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, email, or account..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-9 pr-3 py-2 ${inputClass}`}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={`pl-9 pr-8 py-2 appearance-none ${inputClass}`}
          >
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Lapsed">Lapsed</option>
            <option value="Dormant">Dormant</option>
            <option value="Never Given">Never Given</option>
          </select>
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            value={accountTypeFilter}
            onChange={(e) => setAccountTypeFilter(e.target.value)}
            className={`pl-9 pr-8 py-2 appearance-none ${inputClass}`}
          >
            <option value="">All Account Types</option>
            {accountTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 hover:bg-muted border border-border transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            Clear all
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="text-sm text-muted-foreground">
        {filtered.length} donor{filtered.length !== 1 ? "s" : ""}
        {hasFilters ? " matching filters" : ""}
      </p>

      {/* Table */}
      <div className="rounded-xl border border-border overflow-hidden bg-card shadow-sm">
        {filtered.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            No donors match your filters.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/60">
                  <th className={thClass}>Name</th>
                  <th className={thClass}>Account</th>
                  <th className={thClass}>Email</th>
                  <th className={thClass}>Status</th>
                  <th className={thClass}>Last Gift</th>
                  <th className={cn(thClass, "text-right")}>Total Giving</th>
                  <th className={cn(thClass, "text-right")}># Gifts</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((d) => {
                  const status = statusConfig[d.givingStatus];
                  return (
                    <tr
                      key={d.Id}
                      className="border-b border-border last:border-0 hover:bg-accent/40 transition-colors"
                    >
                      <td className="px-5 py-3 whitespace-nowrap">
                        <SfLink instanceUrl={instanceUrl} recordId={d.Id}>
                          {d.Name}
                        </SfLink>
                      </td>
                      <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                        {d.Account?.Name ?? "—"}
                      </td>
                      <td className="px-5 py-3 text-muted-foreground whitespace-nowrap max-w-[200px] truncate">
                        {d.Email ?? "—"}
                      </td>
                      <td className="px-5 py-3 whitespace-nowrap">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                            status.bg,
                            status.text
                          )}
                        >
                          {status.label}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                        {formatDate(d.lastActivityDate)}
                      </td>
                      <td className="px-5 py-3 text-right tabular-nums font-semibold whitespace-nowrap">
                        {formatCurrency(d.npo02__TotalOppAmount__c)}
                      </td>
                      <td className="px-5 py-3 text-right tabular-nums whitespace-nowrap">
                        {d.npo02__NumberOfClosedOpps__c ?? 0}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
