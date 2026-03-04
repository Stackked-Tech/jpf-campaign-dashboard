"use client";

import { useState, useMemo } from "react";
import type { InvoicePayment } from "@/lib/types";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, ExternalLink, Filter, Search, X } from "lucide-react";

interface MonthlyScheduleProps {
  payments: InvoicePayment[];
  instanceUrl: string;
}

interface MonthGroup {
  key: string;
  label: string;
  total: number;
  payments: InvoicePayment[];
  isCurrentMonth: boolean;
  isNextMonth: boolean;
}

function toMonthKey(date: string | null): string {
  return date ? date.substring(0, 7) : "Unknown";
}

function monthKeyToLabel(key: string): string {
  if (key === "Unknown") return "No Date";
  const [year, month] = key.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function groupByMonth(payments: InvoicePayment[]): MonthGroup[] {
  const now = new Date();
  const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const nextKey = `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, "0")}`;

  const groups = new Map<string, InvoicePayment[]>();

  for (const p of payments) {
    const key = toMonthKey(p.npe01__Scheduled_Date__c);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(p);
  }

  return Array.from(groups.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, items]) => ({
      key,
      label: monthKeyToLabel(key),
      total: items.reduce((s, p) => s + (p.npe01__Payment_Amount__c ?? 0), 0),
      payments: items,
      isCurrentMonth: key === currentKey,
      isNextMonth: key === nextKey,
    }));
}

function SfLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-primary/80 hover:underline inline-flex items-center gap-1 font-medium"
    >
      {children}
      <ExternalLink className="h-3 w-3 opacity-40" />
    </a>
  );
}

export function MonthlySchedule({ payments, instanceUrl }: MonthlyScheduleProps) {
  const [search, setSearch] = useState("");
  const [campaignFilter, setCampaignFilter] = useState("");
  const [oppTypeFilter, setOppTypeFilter] = useState("");
  const [giftTypeFilter, setGiftTypeFilter] = useState("");
  const [payMethodFilter, setPayMethodFilter] = useState("");
  const [monthFrom, setMonthFrom] = useState("");
  const [monthTo, setMonthTo] = useState("");
  const [singleMonth, setSingleMonth] = useState("");

  const campaigns = useMemo(() => {
    const map = new Map<string, string>();
    for (const p of payments) {
      const id = p.npe01__Opportunity__r.CampaignId;
      const name = p.npe01__Opportunity__r.Campaign?.Name;
      if (id && name) map.set(id, name);
    }
    return Array.from(map.entries())
      .map(([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [payments]);

  const availableMonths = useMemo(() => {
    const set = new Set<string>();
    for (const p of payments) {
      const key = toMonthKey(p.npe01__Scheduled_Date__c);
      if (key !== "Unknown") set.add(key);
    }
    return Array.from(set).sort();
  }, [payments]);

  const giftTypes = useMemo(() => {
    const types = new Set(
      payments.map((p) => p.npe01__Opportunity__r.Gift_Type__c || "Uncategorized")
    );
    return Array.from(types).sort();
  }, [payments]);

  const oppTypes = useMemo(() => {
    const set = new Set<string>();
    for (const p of payments) {
      const v = p.npe01__Opportunity__r.Payment_Method__c;
      if (v) set.add(v);
    }
    return Array.from(set).sort();
  }, [payments]);

  const payMethods = useMemo(() => {
    const set = new Set<string>();
    for (const p of payments) {
      const v = p.npe01__Payment_Method__c;
      if (v) set.add(v);
    }
    return Array.from(set).sort();
  }, [payments]);

  const filtered = useMemo(() => {
    let result = payments;

    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => {
        const contact = p.npe01__Opportunity__r.npsp__Primary_Contact__r?.Name?.toLowerCase() ?? "";
        const account = p.npe01__Opportunity__r.Account?.Name?.toLowerCase() ?? "";
        const oppName = p.npe01__Opportunity__r.Name.toLowerCase();
        return contact.includes(q) || account.includes(q) || oppName.includes(q);
      });
    }

    if (campaignFilter) {
      result = result.filter(
        (p) => p.npe01__Opportunity__r.CampaignId === campaignFilter
      );
    }

    if (giftTypeFilter) {
      result = result.filter(
        (p) => (p.npe01__Opportunity__r.Gift_Type__c || "Uncategorized") === giftTypeFilter
      );
    }

    if (oppTypeFilter) {
      result = result.filter(
        (p) => p.npe01__Opportunity__r.Payment_Method__c === oppTypeFilter
      );
    }

    if (payMethodFilter) {
      result = result.filter(
        (p) => p.npe01__Payment_Method__c === payMethodFilter
      );
    }

    if (singleMonth) {
      result = result.filter(
        (p) => toMonthKey(p.npe01__Scheduled_Date__c) === singleMonth
      );
    } else {
      if (monthFrom) {
        result = result.filter(
          (p) => toMonthKey(p.npe01__Scheduled_Date__c) >= monthFrom
        );
      }
      if (monthTo) {
        result = result.filter(
          (p) => toMonthKey(p.npe01__Scheduled_Date__c) <= monthTo
        );
      }
    }

    return result;
  }, [payments, search, campaignFilter, giftTypeFilter, oppTypeFilter, payMethodFilter, singleMonth, monthFrom, monthTo]);

  const months = useMemo(() => groupByMonth(filtered), [filtered]);

  const hasFilters = search || campaignFilter || giftTypeFilter || oppTypeFilter || payMethodFilter || singleMonth || monthFrom || monthTo;

  function clearFilters() {
    setSearch("");
    setCampaignFilter("");
    setGiftTypeFilter("");
    setOppTypeFilter("");
    setPayMethodFilter("");
    setSingleMonth("");
    setMonthFrom("");
    setMonthTo("");
  }

  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const now = new Date();
    const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const nextKey = `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(2, "0")}`;
    return new Set([currentKey, nextKey]);
  });

  function toggle(key: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const now = new Date();
  const in12 = new Date(now.getFullYear(), now.getMonth() + 12, now.getDate());

  const totalOutstanding = filtered.reduce(
    (s, p) => s + (p.npe01__Payment_Amount__c ?? 0),
    0
  );

  const next12Total = filtered
    .filter((p) => {
      if (!p.npe01__Scheduled_Date__c) return false;
      const d = new Date(p.npe01__Scheduled_Date__c);
      return d >= now && d <= in12;
    })
    .reduce((s, p) => s + (p.npe01__Payment_Amount__c ?? 0), 0);

  const overduePayments = filtered.filter((p) => {
    if (!p.npe01__Scheduled_Date__c) return false;
    return new Date(p.npe01__Scheduled_Date__c) < now;
  });
  const overdueTotal = overduePayments.reduce(
    (s, p) => s + (p.npe01__Payment_Amount__c ?? 0),
    0
  );

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  return (
    <div className="space-y-6">
      {/* Global filters */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Filter className="h-4 w-4 text-primary" />
          Filters
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <X className="h-3 w-3" />
              Clear all
            </button>
          )}
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, account, or opportunity..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-9 pr-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors`}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
              Campaign
            </label>
            <select
              value={campaignFilter}
              onChange={(e) => setCampaignFilter(e.target.value)}
              className={inputClass}
            >
              <option value="">All Campaigns</option>
              {campaigns.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
              Gift Type
            </label>
            <select
              value={giftTypeFilter}
              onChange={(e) => setGiftTypeFilter(e.target.value)}
              className={inputClass}
            >
              <option value="">All Gift Types</option>
              {giftTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
              Opp Type
            </label>
            <select
              value={oppTypeFilter}
              onChange={(e) => setOppTypeFilter(e.target.value)}
              className={inputClass}
            >
              <option value="">All Opp Types</option>
              {oppTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
              Payment Method
            </label>
            <select
              value={payMethodFilter}
              onChange={(e) => setPayMethodFilter(e.target.value)}
              className={inputClass}
            >
              <option value="">All Methods</option>
              {payMethods.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
              Month
            </label>
            <select
              value={singleMonth}
              onChange={(e) => {
                setSingleMonth(e.target.value);
                if (e.target.value) {
                  setMonthFrom("");
                  setMonthTo("");
                }
              }}
              className={inputClass}
            >
              <option value="">All Months</option>
              {availableMonths.map((m) => (
                <option key={m} value={m}>
                  {monthKeyToLabel(m)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
              From Month
            </label>
            <input
              type="month"
              value={monthFrom}
              onChange={(e) => {
                setMonthFrom(e.target.value);
                if (e.target.value) setSingleMonth("");
              }}
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
              To Month
            </label>
            <input
              type="month"
              value={monthTo}
              onChange={(e) => {
                setMonthTo(e.target.value);
                if (e.target.value) setSingleMonth("");
              }}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">Total Outstanding</p>
          <p className="mt-1.5 text-2xl font-semibold tabular-nums">
            {formatCurrency(totalOutstanding)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {filtered.length} payment{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">Next 12 Months</p>
          <p className="mt-1.5 text-2xl font-semibold tabular-nums">
            {formatCurrency(next12Total)}
          </p>
        </div>
        {overdueTotal > 0 && (
          <div className="rounded-xl border border-destructive/20 bg-red-50 p-5 shadow-sm">
            <p className="text-sm font-medium text-destructive">Overdue</p>
            <p className="mt-1.5 text-2xl font-semibold tabular-nums text-destructive">
              {formatCurrency(overdueTotal)}
            </p>
            <p className="mt-1 text-xs text-destructive/70">
              {overduePayments.length} payment{overduePayments.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>

      {/* Monthly accordion */}
      <div className="space-y-2">
        {months.length === 0 ? (
          <p className="text-muted-foreground py-8 text-center">
            No payments match the selected filters.
          </p>
        ) : (
          months.map((month) => {
            const isOpen = expanded.has(month.key);
            return (
              <div
                key={month.key}
                className={cn(
                  "rounded-xl border border-border overflow-hidden bg-card shadow-sm",
                  month.isCurrentMonth && "ring-2 ring-primary/20"
                )}
              >
                <button
                  onClick={() => toggle(month.key)}
                  className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-muted/40 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    {isOpen ? (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="font-semibold">{month.label}</span>
                    {month.isCurrentMonth && (
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-white">
                        Current
                      </span>
                    )}
                    {month.isNextMonth && (
                      <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                        Next Month
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-sm text-muted-foreground">
                      {month.payments.length} payment{month.payments.length !== 1 ? "s" : ""}
                    </span>
                    <span className="text-base font-semibold tabular-nums">
                      {formatCurrency(month.total)}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/60">
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contact</th>
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Household</th>
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Account</th>
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Opportunity</th>
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Campaign</th>
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Gift Type</th>
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Opp Type</th>
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Payment Method</th>
                          <th className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">Scheduled</th>
                          <th className="px-5 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {month.payments.map((p) => (
                          <tr
                            key={p.Id}
                            className="border-b border-border last:border-0 hover:bg-accent/40 transition-colors"
                          >
                            <td className="px-5 py-2.5">
                              {p.npe01__Opportunity__r.npsp__Primary_Contact__r?.Name ?? "—"}
                            </td>
                            <td className="px-5 py-2.5 text-muted-foreground">
                              {p.npe01__Opportunity__r.npsp__Primary_Contact__r?.Account?.Name ?? "—"}
                            </td>
                            <td className="px-5 py-2.5 text-muted-foreground">
                              {p.npe01__Opportunity__r.Account?.Name ?? "—"}
                            </td>
                            <td className="px-5 py-2.5">
                              <SfLink href={`${instanceUrl}/${p.Id}`}>
                                {p.npe01__Opportunity__r.Name}
                              </SfLink>
                            </td>
                            <td className="px-5 py-2.5 text-muted-foreground">
                              {p.npe01__Opportunity__r.Campaign?.Name ?? "—"}
                            </td>
                            <td className="px-5 py-2.5 text-muted-foreground">
                              {p.npe01__Opportunity__r.Gift_Type__c || "—"}
                            </td>
                            <td className="px-5 py-2.5 text-muted-foreground">
                              {p.npe01__Opportunity__r.Payment_Method__c || "—"}
                            </td>
                            <td className="px-5 py-2.5 text-muted-foreground">
                              {p.npe01__Payment_Method__c || "—"}
                            </td>
                            <td className="px-5 py-2.5 text-muted-foreground">
                              {formatDate(p.npe01__Scheduled_Date__c)}
                            </td>
                            <td className="px-5 py-2.5 text-right tabular-nums font-semibold">
                              {formatCurrency(p.npe01__Payment_Amount__c)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-muted/40">
                          <td colSpan={9} className="px-5 py-2.5 text-right text-sm font-semibold text-muted-foreground">
                            Month Total
                          </td>
                          <td className="px-5 py-2.5 text-right tabular-nums font-bold">
                            {formatCurrency(month.total)}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
