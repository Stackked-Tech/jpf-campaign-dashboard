"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, ArrowUp, ArrowDown, Eye, EyeOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FieldDefinition } from "@/lib/grants/types";
import { AddFieldSlideover } from "./add-field-slideover";

const TYPE_LABEL: Record<FieldDefinition["field_type"], string> = {
  text: "Text",
  long_text: "Long text",
  number: "Number",
  currency: "Currency",
  date: "Date",
  bool: "Yes/No",
  select: "Select",
  multi_select: "Multi-select",
};

export function FieldList({
  fieldDefinitions: initial,
}: {
  fieldDefinitions: FieldDefinition[];
}) {
  const router = useRouter();
  const [defs, setDefs] = useState(initial);
  const [addOpen, setAddOpen] = useState(false);
  const [savingId, setSavingId] = useState<string | null>(null);

  const patch = async (id: string, patch: Partial<FieldDefinition>) => {
    setSavingId(id);
    try {
      await fetch(`/api/grants/field-definitions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      router.refresh();
    } finally {
      setSavingId(null);
    }
  };

  const toggleHidden = (d: FieldDefinition) => {
    setDefs((prev) =>
      prev.map((x) =>
        x.id === d.id ? { ...x, is_hidden_default: !x.is_hidden_default } : x
      )
    );
    void patch(d.id, { is_hidden_default: !d.is_hidden_default });
  };

  const move = (d: FieldDefinition, dir: -1 | 1) => {
    const idx = defs.findIndex((x) => x.id === d.id);
    const swap = defs[idx + dir];
    if (!swap) return;
    const myOrder = d.sort_order;
    const otherOrder = swap.sort_order;
    setDefs((prev) => {
      const next = [...prev];
      next[idx] = { ...d, sort_order: otherOrder };
      next[idx + dir] = { ...swap, sort_order: myOrder };
      return next.sort((a, b) => a.sort_order - b.sort_order);
    });
    void patch(d.id, { sort_order: otherOrder });
    void patch(swap.id, { sort_order: myOrder });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold">Custom fields</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Fields you add here appear on every grant&apos;s Custom fields tab.
            They stay in the dashboard — they never sync to Salesforce.
          </p>
        </div>
        <button
          onClick={() => setAddOpen(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 text-white px-3 py-2 text-sm font-medium hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          Add field
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        {defs.length === 0 ? (
          <div className="py-16 text-center text-sm text-muted-foreground">
            <p>No custom fields yet.</p>
            <p className="mt-1 text-xs">
              Click <strong>Add field</strong> to create the first one.
            </p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-slate-50 border-b border-border">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Label</th>
                <th className="px-4 py-3">Key</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Visibility</th>
                <th className="px-4 py-3 text-right">Order</th>
              </tr>
            </thead>
            <tbody>
              {defs.map((d, i) => (
                <tr
                  key={d.id}
                  className="border-b border-border last:border-0 hover:bg-slate-50"
                >
                  <td className="px-4 py-3 font-medium">{d.label}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                    {d.key}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 uppercase tracking-wide">
                      {TYPE_LABEL[d.field_type]}
                    </span>
                    {d.options && d.options.length > 0 && (
                      <span className="ml-2 text-xs text-muted-foreground">
                        {d.options.length} options
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleHidden(d)}
                      className={cn(
                        "inline-flex items-center gap-1 text-xs",
                        d.is_hidden_default
                          ? "text-muted-foreground"
                          : "text-emerald-700"
                      )}
                    >
                      {d.is_hidden_default ? (
                        <>
                          <EyeOff className="h-3.5 w-3.5" />
                          Hidden
                        </>
                      ) : (
                        <>
                          <Eye className="h-3.5 w-3.5" />
                          Visible
                        </>
                      )}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex items-center gap-0.5">
                      <button
                        onClick={() => move(d, -1)}
                        disabled={i === 0 || savingId === d.id}
                        className="p-1 rounded hover:bg-slate-100 disabled:opacity-30"
                      >
                        <ArrowUp className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => move(d, 1)}
                        disabled={i === defs.length - 1 || savingId === d.id}
                        className="p-1 rounded hover:bg-slate-100 disabled:opacity-30"
                      >
                        <ArrowDown className="h-3.5 w-3.5" />
                      </button>
                      {savingId === d.id && (
                        <Loader2 className="h-3.5 w-3.5 ml-1 animate-spin text-muted-foreground" />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <AddFieldSlideover
        open={addOpen}
        onClose={() => setAddOpen(false)}
        onCreated={() => router.refresh()}
      />
    </div>
  );
}
