"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, RefreshCcw } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { StatusChip } from "./status-chip";
import { SyncToSfModal } from "./sync-to-sf-modal";

export function GrantHeader({
  grantId,
  name,
  funderName,
  status,
  amount,
}: {
  grantId: string;
  name: string;
  funderName: string | null;
  status: string | null;
  amount: number | null;
}) {
  const [syncOpen, setSyncOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="space-y-3">
      <Link
        href="/grants"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-3 w-3" />
        All grants
      </Link>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
          <div className="mt-1.5 flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
            {funderName && (
              <span className="font-medium text-foreground/80">{funderName}</span>
            )}
            {funderName && <span>·</span>}
            <StatusChip status={status} />
            {amount != null && (
              <>
                <span>·</span>
                <span className="font-mono text-foreground/70">
                  {formatCurrency(amount)}
                </span>
              </>
            )}
          </div>
        </div>

        <button
          onClick={() => setSyncOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <RefreshCcw className="h-4 w-4" />
          Sync to Salesforce
        </button>
      </div>

      <SyncToSfModal
        grantId={grantId}
        open={syncOpen}
        onClose={() => setSyncOpen(false)}
        onSuccess={() => router.refresh()}
      />
    </div>
  );
}
