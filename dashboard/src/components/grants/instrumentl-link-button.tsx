"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Link2, Unlink2 } from "lucide-react";
import { InstrumentlLinkPicker } from "./instrumentl-link-picker";

export function InstrumentlLinkButton({
  instrumentlId,
  currentSfId,
}: {
  instrumentlId: string;
  currentSfId: string | null;
}) {
  const router = useRouter();
  const [pickerOpen, setPickerOpen] = useState(false);

  const unlink = async () => {
    if (!confirm("Unlink this pursuit from its SF grant?")) return;
    await fetch(`/api/grants/instrumentl/${instrumentlId}/link`, {
      method: "DELETE",
    });
    router.refresh();
  };

  if (currentSfId) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href={`/grants/${currentSfId}`}
          className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-1 text-xs font-medium hover:bg-emerald-100"
        >
          <Link2 className="h-3.5 w-3.5" />
          View linked SF grant
        </Link>
        <button
          onClick={unlink}
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-red-600"
        >
          <Unlink2 className="h-3 w-3" />
          Unlink
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setPickerOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 text-white px-2.5 py-1 text-xs font-medium hover:bg-blue-700"
      >
        <Link2 className="h-3.5 w-3.5" />
        Link to SF grant
      </button>
      <InstrumentlLinkPicker
        instrumentlId={instrumentlId}
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onLinked={() => setPickerOpen(false)}
      />
    </>
  );
}
