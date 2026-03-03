"use client";

import { useEffect, useCallback } from "react";
import { X, ExternalLink } from "lucide-react";
import { SfLink } from "@/components/sf-link";
import { formatCurrency, formatDate } from "@/lib/utils";
import type {
  ActivityRecord,
  CallRecord,
  MeetingRecord,
} from "@/lib/queries/activities";
import type { DevPayment } from "@/lib/queries/dev-payments";

export type DrawerData =
  | {
      type: "activity";
      title: string;
      records: (ActivityRecord | CallRecord | MeetingRecord)[];
    }
  | { type: "payment"; title: string; records: DevPayment[] };

interface DetailDrawerProps {
  data: DrawerData | null;
  instanceUrl: string;
  onClose: () => void;
}

// ── Activity Table ────────────────────────────────

function ActivityTable({
  records,
  instanceUrl,
}: {
  records: (ActivityRecord | CallRecord | MeetingRecord)[];
  instanceUrl: string;
}) {
  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <p className="text-sm font-medium">No records found</p>
        <p className="text-xs mt-1">Try a different filter</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto -mx-6">
      <table className="w-full text-sm min-w-[540px]">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-6">
              Date
            </th>
            <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-3">
              Owner
            </th>
            <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-3">
              Contact
            </th>
            <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-3">
              Subject
            </th>
            <th className="text-right text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-6">
              SF
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr
              key={r.Id}
              className={`border-b border-border/40 hover:bg-primary/[0.03] transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-muted/15"
              }`}
            >
              <td className="py-2.5 px-6 whitespace-nowrap text-xs tabular-nums text-foreground/80">
                {formatDate(r.ActivityDate)}
              </td>
              <td className="py-2.5 px-3 whitespace-nowrap text-xs font-medium text-foreground">
                {r.Owner.Name}
              </td>
              <td className="py-2.5 px-3 text-xs text-foreground/80">
                {r.Who?.Name ?? (
                  <span className="text-muted-foreground/50">—</span>
                )}
              </td>
              <td className="py-2.5 px-3 text-xs text-foreground/70 max-w-[200px] truncate">
                {r.Subject ?? (
                  <span className="text-muted-foreground/50">—</span>
                )}
              </td>
              <td className="py-2.5 px-6 text-right">
                <SfLink
                  instanceUrl={instanceUrl}
                  recordId={r.Id}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                </SfLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Payment Table ─────────────────────────────────

function PaymentTable({
  records,
  instanceUrl,
}: {
  records: DevPayment[];
  instanceUrl: string;
}) {
  const total = records.reduce(
    (sum, r) => sum + (r.npe01__Payment_Amount__c || 0),
    0
  );

  if (records.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <p className="text-sm font-medium">No records found</p>
        <p className="text-xs mt-1">Try a different filter</p>
      </div>
    );
  }

  return (
    <div>
      {/* Summary bar */}
      <div className="flex items-center justify-between bg-primary/[0.04] border border-primary/10 rounded-xl px-4 py-3 mb-4">
        <span className="text-xs font-medium text-muted-foreground">
          Total
        </span>
        <span className="text-sm font-bold text-primary tabular-nums">
          {formatCurrency(total)}
        </span>
      </div>

      <div className="overflow-x-auto -mx-6">
        <table className="w-full text-sm min-w-[540px]">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-6">
                Date
              </th>
              <th className="text-right text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-3">
                Amount
              </th>
              <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-3">
                Account
              </th>
              <th className="text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-3">
                Type
              </th>
              <th className="text-right text-[11px] font-semibold uppercase tracking-wider text-muted-foreground py-2.5 px-6">
                SF
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr
                key={r.Id}
                className={`border-b border-border/40 hover:bg-primary/[0.03] transition-colors ${
                  i % 2 === 0 ? "bg-white" : "bg-muted/15"
                }`}
              >
                <td className="py-2.5 px-6 whitespace-nowrap text-xs tabular-nums text-foreground/80">
                  {formatDate(r.npe01__Payment_Date__c)}
                </td>
                <td className="py-2.5 px-3 text-right whitespace-nowrap text-xs font-semibold tabular-nums text-foreground">
                  {formatCurrency(r.npe01__Payment_Amount__c)}
                </td>
                <td className="py-2.5 px-3 text-xs text-foreground/80">
                  {r.npe01__Opportunity__r?.Account?.Name ?? (
                    <span className="text-muted-foreground/50">—</span>
                  )}
                </td>
                <td className="py-2.5 px-3 whitespace-nowrap">
                  {r.npe01__Opportunity__r?.Account?.Type ? (
                    <span className="inline-flex text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {r.npe01__Opportunity__r.Account.Type}
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground/50">—</span>
                  )}
                </td>
                <td className="py-2.5 px-6 text-right">
                  <SfLink
                    instanceUrl={instanceUrl}
                    recordId={r.Id}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </SfLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Drawer Shell ──────────────────────────────────

export function DetailDrawer({
  data,
  instanceUrl,
  onClose,
}: DetailDrawerProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (data) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [data, handleKeyDown]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40 transition-all duration-300 ${
          data
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-white border-l border-border/60 shadow-2xl z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          data ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {data && (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-border/60">
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="text-base font-semibold text-foreground tracking-tight truncate">
                  {data.title}
                </h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="inline-flex items-center text-[11px] font-semibold tabular-nums bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                    {data.records.length} record
                    {data.records.length !== 1 ? "s" : ""}
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    {data.type === "activity" ? "Activities" : "Payments"}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 -mt-1 -mr-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto px-6 py-4">
              {data.type === "activity" ? (
                <ActivityTable
                  records={data.records}
                  instanceUrl={instanceUrl}
                />
              ) : (
                <PaymentTable
                  records={data.records}
                  instanceUrl={instanceUrl}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
