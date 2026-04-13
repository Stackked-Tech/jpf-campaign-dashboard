"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SfSyncBanner({ grantId }: { grantId: string }) {
  const router = useRouter();
  const [retrying, setRetrying] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function retry() {
    setRetrying(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/grants/${grantId}/sync`, { method: "POST" });
      const j = await res.json();
      if (j.ok) {
        setMessage("Synced to Salesforce.");
        router.refresh();
      } else {
        setMessage(`Still failing: ${j.error ?? "unknown error"}`);
      }
    } finally {
      setRetrying(false);
    }
  }

  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-4 flex items-center justify-between gap-4">
      <div className="text-sm text-red-800">
        <strong>Salesforce sync failed.</strong> This grant is saved here but hasn&apos;t been
        mirrored into Salesforce yet.
        {message && <div className="mt-1 text-xs">{message}</div>}
      </div>
      <button type="button" onClick={retry} disabled={retrying}
        className="btn-pill bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 text-xs">
        {retrying ? "Retrying…" : "Retry"}
      </button>
    </div>
  );
}
