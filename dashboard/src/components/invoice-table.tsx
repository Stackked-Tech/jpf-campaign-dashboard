"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import type { InvoicePayment } from "@/lib/types";
import type { InvoiceData } from "@/lib/pdf/generate-invoice";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import { Search, Filter, ExternalLink, ChevronDown, ChevronRight, ChevronLeft, FileText, Send, Loader2, CheckCircle, Check } from "lucide-react";
import { InvoicePdfModal } from "./invoice-pdf-modal";


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

function isInvoiceType(payment: InvoicePayment): boolean {
  return payment.npe01__Opportunity__r.Payment_Method__c === "Send Me an Invoice";
}

/** Extract a URL from a value that may be a full URL, HTML anchor, or plain text. */
function toUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  const hrefMatch = trimmed.match(/href=["']([^"']+)["']/i);
  if (hrefMatch) return hrefMatch[1];
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return null;
}

function paymentToInvoiceData(p: InvoicePayment): InvoiceData {
  const opp = p.npe01__Opportunity__r;
  const contact = opp.npsp__Primary_Contact__r;
  return {
    contactName: contact?.Name ?? "—",
    contactEmail: contact?.Email ?? null,
    accountName: contact?.Account?.Name ?? opp.Account?.Name ?? "—",
    opportunityName: opp.Name,
    campaignName: opp.Campaign?.Name ?? null,
    giftType: opp.Gift_Type__c,
    scheduledDate: p.npe01__Scheduled_Date__c,
    paymentAmount: p.npe01__Payment_Amount__c ?? 0,
    pledgeAmount: opp.Amount ?? 0,
    amountPaidToDate: p.amountPaidToDate ?? 0,
    pastDueAmount: p.pastDueAmount ?? 0,
    paymentLink: toUrl(opp.Next_payment_link__c) || toUrl(p.Payment_Link__c),
    paymentId: p.Id,
  };
}

/** Inline send button for a single row */
function SendButton({ paymentId, onSent }: { paymentId: string; onSent: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSend = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    setStatus("sending");
    try {
      const res = await fetch("/api/invoices/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("sent");
      onSent();
    } catch {
      setStatus("error");
    }
  }, [paymentId, onSent]);

  if (status === "sent") {
    return (
      <span className="inline-flex items-center gap-1 text-green-600 text-xs font-medium">
        <CheckCircle className="h-3.5 w-3.5" />
        Sent
      </span>
    );
  }

  return (
    <button
      onClick={handleSend}
      disabled={status === "sending"}
      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50 transition-colors"
      title="Send invoice email"
    >
      {status === "sending" ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        <Send className="h-3.5 w-3.5" />
      )}
      {status === "error" ? "Retry" : "Send"}
    </button>
  );
}

function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const frame = requestAnimationFrame(update);
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollBy = useCallback((dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  }, []);

  return { scrollRef, canScrollLeft, canScrollRight, scrollBy };
}

const thClass = "px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground";

function MonthTable({
  payments,
  total,
  instanceUrl,
  sentIds,
  markSent,
  onViewPdf,
}: {
  payments: InvoicePayment[];
  total: number;
  instanceUrl: string;
  sentIds: Set<string>;
  markSent: (id: string) => void;
  onViewPdf: (p: InvoicePayment) => void;
}) {
  const { scrollRef, canScrollLeft, canScrollRight, scrollBy } = useHorizontalScroll();

  return (
    <div className="border-t border-border overflow-x-auto" ref={scrollRef}>
      <table className="w-full text-sm min-w-[1280px]">
        <thead>
          <tr className="border-b border-border bg-muted/60">
            <th className="px-1 py-2.5 sticky left-0 bg-muted/60 z-10">
              <button onClick={() => scrollBy("left")} aria-label="Scroll left" className={cn("transition-opacity", canScrollLeft ? "text-blue-500 hover:text-blue-700 opacity-100" : "opacity-0 pointer-events-none")}>
                <ChevronLeft className="h-5 w-5" strokeWidth={3} />
              </button>
            </th>
            <th className={thClass}>Contact</th>
            <th className={thClass}>Household</th>
            <th className={thClass}>Opportunity</th>
            <th className={thClass}>Gift Type</th>
            <th className={thClass}>Opp Type</th>
            <th className={thClass}>Payment Method</th>
            <th className={cn(thClass, "text-right")}>Amount Due</th>
            <th className={thClass}>Scheduled Date</th>
            <th className={cn(thClass, "text-center")}>Sent</th>
            <th className={cn(thClass, "text-center")}>Actions</th>
            <th className="px-1 py-2.5 sticky right-0 bg-muted/60 z-10">
              <button onClick={() => scrollBy("right")} aria-label="Scroll right" className={cn("transition-opacity", canScrollRight ? "text-blue-500 hover:text-blue-700 opacity-100" : "opacity-0 pointer-events-none")}>
                <ChevronRight className="h-5 w-5" strokeWidth={3} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => {
            const showInvoice = isInvoiceType(p);
            return (
              <tr
                key={p.Id}
                className="border-b border-border last:border-0 hover:bg-accent/40 transition-colors"
              >
                <td className="sticky left-0" />
                <td className="px-5 py-3 whitespace-nowrap">
                  {p.npe01__Opportunity__r.npsp__Primary_Contact__r?.Name ?? "—"}
                </td>
                <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                  {p.npe01__Opportunity__r.npsp__Primary_Contact__r?.Account?.Name ?? "—"}
                </td>
                <td className="px-5 py-3 whitespace-nowrap">
                  <SfLink href={`${instanceUrl}/${p.npe01__Opportunity__r.Id}`}>
                    link
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
                <td className="px-5 py-3 text-center whitespace-nowrap">
                  {showInvoice ? (
                    <div
                      className={cn(
                        "h-5 w-5 rounded border-2 inline-flex items-center justify-center",
                        sentIds.has(p.Id)
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-border"
                      )}
                      title={sentIds.has(p.Id) ? "Email sent" : "Not sent"}
                    >
                      {sentIds.has(p.Id) && <Check className="h-3.5 w-3.5" />}
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-xs">—</span>
                  )}
                </td>
                <td className="px-5 py-3 whitespace-nowrap">
                  {showInvoice ? (
                    <div className="flex items-center gap-2 justify-center">
                      <button
                        onClick={() => onViewPdf(p)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium bg-muted hover:bg-muted/80 text-foreground transition-colors"
                        title="View PDF"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        View PDF
                      </button>
                      <SendButton paymentId={p.Id} onSent={() => markSent(p.Id)} />
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-xs">—</span>
                  )}
                </td>
                <td className="sticky right-0" />
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="bg-muted/40">
            <td />
            <td colSpan={6} className="px-5 py-2.5 text-right text-sm font-semibold text-muted-foreground">
              Month Total
            </td>
            <td className="px-5 py-2.5 text-right tabular-nums font-bold">
              {formatCurrency(total)}
            </td>
            <td colSpan={4} />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export function InvoiceTable({ payments, instanceUrl }: InvoiceTableProps) {
  const [search, setSearch] = useState("");
  const [giftTypeFilter, setGiftTypeFilter] = useState("");
  const [oppTypeFilter, setOppTypeFilter] = useState("");
  const [payMethodFilter, setPayMethodFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [modalData, setModalData] = useState<InvoiceData | null>(null);

  // Derive sent IDs from Salesforce field, plus track newly sent in this session
  const [newlySentIds, setNewlySentIds] = useState<Set<string>>(new Set());

  const sentIds = useMemo(() => {
    const ids = new Set<string>();
    for (const p of payments) {
      if (p.Payment_Acknowledgement_Email_Sent__c) ids.add(p.Id);
    }
    for (const id of newlySentIds) ids.add(id);
    return ids;
  }, [payments, newlySentIds]);

  const markSent = useCallback((id: string) => {
    setNewlySentIds((prev) => new Set(prev).add(id));
  }, []);

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
                  <MonthTable
                    payments={month.payments}
                    total={month.total}
                    instanceUrl={instanceUrl}
                    sentIds={sentIds}
                    markSent={markSent}
                    onViewPdf={(p) => setModalData(paymentToInvoiceData(p))}
                  />
                )}
              </div>
            );
          })
        )}
      </div>

      {/* PDF Modal */}
      {modalData && (
        <InvoicePdfModal
          invoiceData={modalData}
          onClose={() => setModalData(null)}
        />
      )}
    </div>
  );
}
