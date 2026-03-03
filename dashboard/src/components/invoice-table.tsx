"use client";

import { useState, useMemo } from "react";
import type { InvoicePayment } from "@/lib/types";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import { Search, Filter, ExternalLink, ChevronDown, ChevronRight } from "lucide-react";

interface InvoiceTableProps {
  payments: InvoicePayment[];
  instanceUrl: string;
}

interface MonthGroup {
  key: string;
  label: string;
  total: number;
  payments: InvoicePayment[];
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

const thClass = "px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground";

export function InvoiceTable({ payments, instanceUrl }: InvoiceTableProps) {
  const [search, setSearch] = useState("");
  const [giftTypeFilter, setGiftTypeFilter] = useState("");
  const [oppTypeFilter, setOppTypeFilter] = useState("");
  const [payMethodFilter, setPayMethodFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");

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

  const availableMonths = useMemo(() => {
    const set = new Set<string>();
    for (const p of payments) {
      const d = p.npe01__Scheduled_Date__c;
      if (d) set.add(d.substring(0, 7));
    }
    return Array.from(set).sort();
  }, [payments]);

  const filtered = useMemo(() => {
    let result = payments;

    if (monthFilter) {
      result = result.filter(
        (p) => p.npe01__Scheduled_Date__c?.substring(0, 7) === monthFilter
      );
    }

    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => {
        const contact =
          p.npe01__Opportunity__r.npsp__Primary_Contact__r?.Name?.toLowerCase() ?? "";
        const account =
          p.npe01__Opportunity__r.Account?.Name?.toLowerCase() ?? "";
        const oppName = p.npe01__Opportunity__r.Name.toLowerCase();
        return contact.includes(q) || account.includes(q) || oppName.includes(q);
      });
    }

    if (giftTypeFilter) {
      result = result.filter(
        (p) =>
          (p.npe01__Opportunity__r.Gift_Type__c || "Uncategorized") ===
          giftTypeFilter
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

    return result;
  }, [payments, search, giftTypeFilter, oppTypeFilter, payMethodFilter, monthFilter]);

  const months = useMemo(() => groupByMonth(filtered), [filtered]);

  const totalDue = filtered.reduce(
    (sum, p) => sum + (p.npe01__Payment_Amount__c ?? 0),
    0
  );

  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const now = new Date();
    const currentKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    return new Set([currentKey]);
  });

  function toggle(key: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const inputClass =
    "rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, account, or opportunity..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-9 pr-3 py-2 ${inputClass}`}
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            value={giftTypeFilter}
            onChange={(e) => setGiftTypeFilter(e.target.value)}
            className={`pl-9 pr-8 py-2 appearance-none ${inputClass}`}
          >
            <option value="">All Gift Types</option>
            {giftTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            value={oppTypeFilter}
            onChange={(e) => setOppTypeFilter(e.target.value)}
            className={`pl-9 pr-8 py-2 appearance-none ${inputClass}`}
          >
            <option value="">All Opp Types</option>
            {oppTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            value={payMethodFilter}
            onChange={(e) => setPayMethodFilter(e.target.value)}
            className={`pl-9 pr-8 py-2 appearance-none ${inputClass}`}
          >
            <option value="">All Pay Methods</option>
            {payMethods.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <select
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
            className={`pl-9 pr-8 py-2 appearance-none ${inputClass}`}
          >
            <option value="">All Months</option>
            {availableMonths.map((m) => (
              <option key={m} value={m}>{monthKeyToLabel(m)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary */}
      <div className="flex justify-between items-center text-sm text-muted-foreground">
        <span>
          {filtered.length} unpaid payment{filtered.length !== 1 ? "s" : ""}
        </span>
        <span className="font-semibold text-foreground">
          Total Due: {formatCurrency(totalDue)}
        </span>
      </div>

      {/* Monthly groups */}
      <div className="space-y-2">
        {months.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground shadow-sm">
            No unpaid payments match your filters.
          </div>
        ) : (
          months.map((month) => {
            const isOpen = expanded.has(month.key);
            return (
              <div
                key={month.key}
                className="rounded-xl border border-border overflow-hidden bg-card shadow-sm"
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
                          <th className={thClass}>Contact</th>
                          <th className={thClass}>Household</th>
                          <th className={thClass}>Account</th>
                          <th className={thClass}>Opportunity</th>
                          <th className={thClass}>Gift Type</th>
                          <th className={thClass}>Opp Type</th>
                          <th className={thClass}>Payment Method</th>
                          <th className={cn(thClass, "text-right")}>Amount Due</th>
                          <th className={thClass}>Scheduled Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {month.payments.map((p) => (
                          <tr
                            key={p.Id}
                            className="border-b border-border last:border-0 hover:bg-accent/40 transition-colors"
                          >
                            <td className="px-5 py-3 whitespace-nowrap">
                              {p.npe01__Opportunity__r.npsp__Primary_Contact__r?.Name ?? "—"}
                            </td>
                            <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                              {p.npe01__Opportunity__r.npsp__Primary_Contact__r?.Account?.Name ?? "—"}
                            </td>
                            <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                              {p.npe01__Opportunity__r.Account?.Name ?? "—"}
                            </td>
                            <td className="px-5 py-3 whitespace-nowrap">
                              <SfLink href={`${instanceUrl}/${p.Id}`}>
                                {p.npe01__Opportunity__r.Name}
                              </SfLink>
                            </td>
                            <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                              {p.npe01__Opportunity__r.Gift_Type__c || "—"}
                            </td>
                            <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                              {p.npe01__Opportunity__r.Payment_Method__c || "—"}
                            </td>
                            <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                              {p.npe01__Payment_Method__c || "—"}
                            </td>
                            <td className="px-5 py-3 text-right tabular-nums font-semibold whitespace-nowrap">
                              {formatCurrency(p.npe01__Payment_Amount__c)}
                            </td>
                            <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                              {formatDate(p.npe01__Scheduled_Date__c)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="bg-muted/40">
                          <td colSpan={7} className="px-5 py-2.5 text-right text-sm font-semibold text-muted-foreground">
                            Month Total
                          </td>
                          <td className="px-5 py-2.5 text-right tabular-nums font-bold">
                            {formatCurrency(month.total)}
                          </td>
                          <td />
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
