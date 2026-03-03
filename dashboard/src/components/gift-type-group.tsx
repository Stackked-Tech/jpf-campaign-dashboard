"use client";

import { useState } from "react";
import type { GiftTypeGroup as GiftTypeGroupType } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { OpportunityTable } from "./opportunity-table";
import { PledgeTracker } from "./pledge-tracker";
import { ChevronDown, ChevronRight } from "lucide-react";

interface GiftTypeGroupProps {
  group: GiftTypeGroupType;
  instanceUrl: string;
  defaultOpen?: boolean;
}

const PLEDGE_TYPES = ["five year pledge", "custom pledge"];

function isPledgeType(giftType: string): boolean {
  return PLEDGE_TYPES.some((t) => giftType.toLowerCase().includes(t));
}

export function GiftTypeGroup({ group, instanceUrl, defaultOpen = true }: GiftTypeGroupProps) {
  const [open, setOpen] = useState(defaultOpen);
  const showPledgeTrackers = isPledgeType(group.giftType);

  return (
    <section className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-muted/40 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          {open ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
          <h3 className="text-lg font-semibold">{group.giftType}</h3>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="text-muted-foreground">
            {group.count} opp{group.count !== 1 ? "s" : ""}
          </span>
          <span className="text-muted-foreground">Total: <span className="font-semibold text-foreground">{formatCurrency(group.totalAmount)}</span></span>
          <span className="text-success font-semibold">
            {formatCurrency(group.totalPaid)}
          </span>
          <span className="text-warning font-semibold">
            {formatCurrency(group.totalUnpaid)}
          </span>
        </div>
      </button>

      {open && (
        <div className="border-t border-border">
          {showPledgeTrackers ? (
            <div className="space-y-3 p-5">
              {group.opportunities.map((opp) => (
                <PledgeTracker key={opp.Id} opportunity={opp} instanceUrl={instanceUrl} />
              ))}
            </div>
          ) : (
            <OpportunityTable opportunities={group.opportunities} instanceUrl={instanceUrl} />
          )}
        </div>
      )}
    </section>
  );
}
