"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Search, Filter, X, ArrowUp, ArrowDown, ArrowUpDown, Download, FileText, ChevronLeft, ChevronRight, ChevronsUp, ChevronsDown } from "lucide-react";
import type { DonorContact, GivingStatus, GivingSocietyTier } from "@/lib/types";
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

const societyConfig: Record<string, { label: string; bg: string; text: string }> = {
  "$50K+": { label: "$50K+", bg: "bg-purple-100", text: "text-purple-700" },
  "$25K+": { label: "$25K+", bg: "bg-blue-100",   text: "text-blue-700" },
  "$10K+": { label: "$10K+", bg: "bg-teal-100",   text: "text-teal-700" },
};

type SortKey = "status" | "society" | "lastGift" | "donationsPaid" | "pledgesOutstanding" | "gifts";
type SortDir = "asc" | "desc";

const statusRank: Record<GivingStatus, number> = { Active: 0, Lapsed: 1, Dormant: 2, "Never Given": 3 };
const societyRank: Record<string, number> = { "$50K+": 0, "$25K+": 1, "$10K+": 2 };

const thClass =
  "px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground";

const inputClass =
  "rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

function SortTh({ label, sortKey: key, align, currentKey, currentDir, onSort }: {
  label: string; sortKey: SortKey; align: "left" | "right";
  currentKey: SortKey | null; currentDir: SortDir; onSort: (k: SortKey) => void;
}) {
  const active = currentKey === key;
  const Icon = active ? (currentDir === "asc" ? ArrowUp : ArrowDown) : ArrowUpDown;
  return (
    <th
      className={cn(thClass, align === "right" && "text-right", "cursor-pointer select-none hover:text-foreground")}
      onClick={() => onSort(key)}
    >
      <span className={cn("inline-flex items-center gap-1", align === "right" && "justify-end")}>
        {label}
        <Icon className={cn("h-3 w-3", active ? "text-foreground" : "text-muted-foreground/50")} />
      </span>
    </th>
  );
}

export function DonorTable({ donors, instanceUrl }: DonorTableProps) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [accountTypeFilter, setAccountTypeFilter] = useState("");
  const [societyFilter, setSocietyFilter] = useState<"" | "all" | "$50K+" | "$25K+" | "$10K+">("");
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  // Horizontal scroll arrows
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Delay to let table render before measuring
    const frame = requestAnimationFrame(updateScrollState);
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState, donors.length]);

  const scrollBy = useCallback((dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  }, []);

  // Vertical scroll — show top/bottom buttons when table is scrolled
  const [showScrollY, setShowScrollY] = useState(false);
  const [nearBottom, setNearBottom] = useState(false);

  const updateVerticalScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowScrollY(el.scrollTop > 200);
    setNearBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 200);
  }, []);

  // Attach vertical scroll listener to the table container (same ref as horizontal)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateVerticalScroll, { passive: true });
    return () => el.removeEventListener("scroll", updateVerticalScroll);
  }, [updateVerticalScroll]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  // Compute giving status for each donor once
  const donorsWithStatus = useMemo(
    () =>
      donors.map((d) => ({
        ...d,
        givingStatus: getGivingStatus(d.lastCloseDate, d.lastPaidPaymentDate),
        lastActivityDate: mostRecentDate(d.lastCloseDate, d.lastPaidPaymentDate),
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

    if (societyFilter === "all") {
      result = result.filter((d) => d.givingSocietyTier != null);
    } else if (societyFilter) {
      result = result.filter((d) => d.givingSocietyTier === societyFilter);
    }

    return result;
  }, [donorsWithStatus, search, statusFilter, accountTypeFilter, societyFilter]);

  // Sort
  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    const mult = sortDir === "asc" ? 1 : -1;
    return [...filtered].sort((a, b) => {
      switch (sortKey) {
        case "status":
          return mult * (statusRank[a.givingStatus] - statusRank[b.givingStatus]);
        case "society": {
          const ra = a.givingSocietyTier ? societyRank[a.givingSocietyTier] : 99;
          const rb = b.givingSocietyTier ? societyRank[b.givingSocietyTier] : 99;
          return mult * (ra - rb);
        }
        case "lastGift": {
          const da = a.lastActivityDate ?? "";
          const db = b.lastActivityDate ?? "";
          return mult * da.localeCompare(db);
        }
        case "donationsPaid":
          return mult * ((a.totalPaid ?? 0) - (b.totalPaid ?? 0));
        case "pledgesOutstanding":
          return mult * ((a.pledgesOutstanding ?? 0) - (b.pledgesOutstanding ?? 0));
        case "gifts":
          return mult * (a.opportunityCount - b.opportunityCount);
        default:
          return 0;
      }
    });
  }, [filtered, sortKey, sortDir]);

  // Stats (computed from full dataset)
  const totalDonors = donorsWithStatus.length;
  const activeDonors = donorsWithStatus.filter((d) => d.givingStatus === "Active").length;
  const neverGiven = donorsWithStatus.filter((d) => d.givingStatus === "Never Given").length;
  const lifetimeGiving = donorsWithStatus.reduce(
    (sum, d) => sum + (d.totalPaid ?? 0),
    0
  );

  // Society tier counts (from filtered or full dataset depending on context)
  const societyMembers = donorsWithStatus.filter((d) => d.givingSocietyTier != null);
  const societyCount = societyMembers.length;
  const tier50k = societyMembers.filter((d) => d.givingSocietyTier === "$50K+").length;
  const tier25k = societyMembers.filter((d) => d.givingSocietyTier === "$25K+").length;
  const tier10k = societyMembers.filter((d) => d.givingSocietyTier === "$10K+").length;

  const hasFilters = search || statusFilter || accountTypeFilter || societyFilter !== "";

  function clearFilters() {
    setSearch("");
    setStatusFilter("");
    setAccountTypeFilter("");
    setSocietyFilter("");
  }

  const exportCSV = useCallback(() => {
    const headers = ["Name", "Account", "Email", "Status", "Society", "Last Gift", "Donations Paid", "Pledges Outstanding", "# Gifts"];
    const escape = (v: string) => (v.includes(",") || v.includes('"') || v.includes("\n") ? `"${v.replace(/"/g, '""')}"` : v);
    const rows = sorted.map((d) => [
      d.Name,
      d.Account?.Name ?? "",
      d.Email ?? "",
      d.givingStatus,
      d.givingSocietyTier ?? "",
      d.lastActivityDate ? formatDate(d.lastActivityDate) : "",
      formatCurrency(d.totalPaid),
      d.pledgesOutstanding ? formatCurrency(d.pledgesOutstanding) : "",
      String(d.opportunityCount),
    ]);
    const csv = [headers, ...rows].map((r) => r.map(escape).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "donors-export.csv";
    a.click();
    URL.revokeObjectURL(url);
  }, [sorted]);

  const exportPDF = useCallback(async () => {
    const { default: jsPDF } = await import("jspdf");
    const { default: autoTable } = await import("jspdf-autotable");
    const doc = new jsPDF({ orientation: "landscape" });
    doc.setFontSize(14);
    doc.text("Donor Contact List", 14, 15);
    doc.setFontSize(9);
    doc.text(`Exported ${new Date().toLocaleDateString("en-US")} — ${sorted.length} donor${sorted.length !== 1 ? "s" : ""}`, 14, 21);

    autoTable(doc, {
      startY: 26,
      head: [["Name", "Account", "Email", "Status", "Society", "Last Gift", "Donations Paid", "Pledges Out.", "# Gifts"]],
      body: sorted.map((d) => [
        d.Name,
        d.Account?.Name ?? "",
        d.Email ?? "",
        d.givingStatus,
        d.givingSocietyTier ?? "",
        d.lastActivityDate ? formatDate(d.lastActivityDate) : "",
        formatCurrency(d.totalPaid),
        d.pledgesOutstanding ? formatCurrency(d.pledgesOutstanding) : "",
        String(d.opportunityCount),
      ]),
      styles: { fontSize: 8, cellPadding: 2 },
      headStyles: { fillColor: [59, 130, 246], fontSize: 8 },
      columnStyles: {
        6: { halign: "right" },
        7: { halign: "right" },
        8: { halign: "right" },
      },
    });

    doc.save("donors-export.pdf");
  }, [sorted]);

  return (
    <div className="space-y-4">
      {/* Sticky header: stats + filters + legend */}
      <div className="sticky top-0 z-20 bg-muted pb-4 space-y-4">

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {societyFilter !== "" ? (
          <>
            <StatsCard label="Society Members" value={societyCount.toLocaleString()} />
            <StatsCard label="$50K+ Tier" value={tier50k.toLocaleString()} />
            <StatsCard label="$25K+ Tier" value={tier25k.toLocaleString()} />
            <StatsCard label="$10K+ Tier" value={tier10k.toLocaleString()} />
          </>
        ) : (
          <>
            <StatsCard label="Total Donors" value={totalDonors.toLocaleString()} />
            <StatsCard label="Active Donors" value={activeDonors.toLocaleString()} />
            <StatsCard label="Never Given" value={neverGiven.toLocaleString()} />
            <StatsCard label="Lifetime Giving" value={formatCurrency(lifetimeGiving)} />
          </>
        )}
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
        <button
          onClick={() => setSocietyFilter((v) => (v !== "" ? "" : "all"))}
          className={cn(
            "flex items-center gap-1.5 text-xs font-medium rounded-lg px-3 py-2 border transition-colors",
            societyFilter !== ""
              ? "bg-purple-100 text-purple-700 border-purple-300"
              : "text-muted-foreground hover:text-foreground hover:bg-muted border-border"
          )}
        >
          Giving Society
          {societyCount > 0 && (
            <span className={cn(
              "inline-flex items-center justify-center rounded-full px-1.5 text-[10px] font-semibold leading-4",
              societyFilter !== "" ? "bg-purple-200 text-purple-800" : "bg-muted text-muted-foreground"
            )}>
              {societyCount}
            </span>
          )}
        </button>
        {societyFilter !== "" && (
          <div className="flex items-center gap-1.5">
            {(["all", "$50K+", "$25K+", "$10K+"] as const).map((tier) => {
              const isActive = societyFilter === tier;
              const tierStyle = tier === "all"
                ? { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-300" }
                : { bg: societyConfig[tier].bg, text: societyConfig[tier].text, border: tier === "$50K+" ? "border-purple-300" : tier === "$25K+" ? "border-blue-300" : "border-teal-300" };
              return (
                <button
                  key={tier}
                  onClick={() => setSocietyFilter(tier)}
                  className={cn(
                    "text-xs font-medium rounded-full px-2.5 py-1 border transition-colors",
                    isActive
                      ? `${tierStyle.bg} ${tierStyle.text} ${tierStyle.border}`
                      : "text-muted-foreground hover:text-foreground hover:bg-muted border-border"
                  )}
                >
                  {tier === "all" ? "All Tiers" : tier}
                </button>
              );
            })}
          </div>
        )}
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 hover:bg-muted border border-border transition-colors"
          >
            <X className="h-3.5 w-3.5" />
            Clear all
          </button>
        )}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={exportCSV}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 hover:bg-muted border border-border transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            CSV
          </button>
          <button
            onClick={exportPDF}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 hover:bg-muted border border-border transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            PDF
          </button>
        </div>
      </div>

      {/* Result count + Status legend */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          {sorted.length} donor{sorted.length !== 1 ? "s" : ""}
          {hasFilters ? " matching filters" : ""}
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/70">Status:</span>
          <span><span className={cn("inline-block w-2 h-2 rounded-full mr-1", statusConfig.Active.bg)} />Active = gave within 12 mo</span>
          <span><span className={cn("inline-block w-2 h-2 rounded-full mr-1", statusConfig.Lapsed.bg)} />Lapsed = 12–24 mo since last gift</span>
          <span><span className={cn("inline-block w-2 h-2 rounded-full mr-1", statusConfig.Dormant.bg)} />Dormant = 24+ mo since last gift</span>
          <span><span className={cn("inline-block w-2 h-2 rounded-full mr-1", statusConfig["Never Given"].bg)} />Never Given = no gift on record</span>
        </div>
      </div>

      </div>{/* end sticky header */}

      {/* Table — own scroll container so thead can be sticky */}
      <div className="rounded-xl border border-border bg-card shadow-sm max-h-[calc(100vh-16rem)] overflow-auto"
           ref={scrollRef}>
        {sorted.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            No donors match your filters.
          </div>
        ) : (
          <>
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10">
                <tr className="border-b border-border bg-muted/95 backdrop-blur-sm">
                  <th className="px-1 py-2.5 sticky left-0 bg-muted/60">
                    <button onClick={() => scrollBy("left")} aria-label="Scroll left" className={cn("transition-opacity", canScrollLeft ? "text-blue-500 hover:text-blue-700 opacity-100" : "opacity-0 pointer-events-none")}>
                      <ChevronLeft className="h-5 w-5" strokeWidth={3} />
                    </button>
                  </th>
                  <th className={thClass}>Name</th>
                  <th className={thClass}>Account</th>
                  <th className={thClass}>Email</th>
                  <SortTh label="Status" sortKey="status" align="left" currentKey={sortKey} currentDir={sortDir} onSort={toggleSort} />
                  <SortTh label="Society" sortKey="society" align="left" currentKey={sortKey} currentDir={sortDir} onSort={toggleSort} />
                  <SortTh label="Last Gift" sortKey="lastGift" align="left" currentKey={sortKey} currentDir={sortDir} onSort={toggleSort} />
                  <SortTh label="Donations Paid" sortKey="donationsPaid" align="right" currentKey={sortKey} currentDir={sortDir} onSort={toggleSort} />
                  <SortTh label="Pledges Outstanding" sortKey="pledgesOutstanding" align="right" currentKey={sortKey} currentDir={sortDir} onSort={toggleSort} />
                  <SortTh label="# Gifts" sortKey="gifts" align="right" currentKey={sortKey} currentDir={sortDir} onSort={toggleSort} />
                  <th className="px-1 py-2.5 sticky right-0 bg-muted/60">
                    <button onClick={() => scrollBy("right")} aria-label="Scroll right" className={cn("transition-opacity", canScrollRight ? "text-blue-500 hover:text-blue-700 opacity-100" : "opacity-0 pointer-events-none")}>
                      <ChevronRight className="h-5 w-5" strokeWidth={3} />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((d) => {
                  const status = statusConfig[d.givingStatus];
                  return (
                    <tr
                      key={d.accountId}
                      className="border-b border-border last:border-0 hover:bg-accent/40 transition-colors"
                    >
                      <td className="px-1 py-3 sticky left-0" />
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
                      <td className="px-5 py-3 whitespace-nowrap">
                        {d.givingSocietyTier ? (
                          <span
                            className={cn(
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                              societyConfig[d.givingSocietyTier].bg,
                              societyConfig[d.givingSocietyTier].text
                            )}
                          >
                            {societyConfig[d.givingSocietyTier].label}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">&mdash;</span>
                        )}
                      </td>
                      <td className="px-5 py-3 text-muted-foreground whitespace-nowrap">
                        {formatDate(d.lastActivityDate)}
                      </td>
                      <td className="px-5 py-3 text-right tabular-nums font-semibold whitespace-nowrap">
                        {formatCurrency(d.totalPaid)}
                      </td>
                      <td className="px-5 py-3 text-right tabular-nums whitespace-nowrap">
                        {d.pledgesOutstanding
                          ? <span className="text-amber-600 font-medium">{formatCurrency(d.pledgesOutstanding)}</span>
                          : <span className="text-muted-foreground">&mdash;</span>
                        }
                      </td>
                      <td className="px-5 py-3 text-right tabular-nums whitespace-nowrap">
                        {d.opportunityCount}
                      </td>
                      <td className="px-1 py-3 sticky right-0" />
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>

      {/* Floating scroll-to-top / scroll-to-bottom */}
      {showScrollY && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
          <button
            onClick={() => scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 rounded-full bg-blue-500 px-3 py-2 text-xs font-semibold text-white shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronsUp className="h-4 w-4" strokeWidth={2.5} />
            Top
          </button>
          {!nearBottom && (
            <button
              onClick={() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })}
              className="flex items-center gap-1.5 rounded-full bg-blue-500 px-3 py-2 text-xs font-semibold text-white shadow-lg hover:bg-blue-600 transition-colors"
              aria-label="Scroll to bottom"
            >
              <ChevronsDown className="h-4 w-4" strokeWidth={2.5} />
              Bottom
            </button>
          )}
        </div>
      )}
    </div>
  );
}
