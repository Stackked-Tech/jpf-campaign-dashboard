"use client";

import { useEffect, useState } from "react";
import { X, Plus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TYPES = [
  { value: "text", label: "Text" },
  { value: "long_text", label: "Long text" },
  { value: "number", label: "Number" },
  { value: "currency", label: "Currency" },
  { value: "date", label: "Date" },
  { value: "bool", label: "Yes/No" },
  { value: "select", label: "Select (single)" },
  { value: "multi_select", label: "Select (multiple)" },
] as const;

export function AddFieldSlideover({
  open,
  onClose,
  onCreated,
}: {
  open: boolean;
  onClose: () => void;
  onCreated: () => void;
}) {
  const [label, setLabel] = useState("");
  const [key, setKey] = useState("");
  const [keyDirty, setKeyDirty] = useState(false);
  const [type, setType] = useState<(typeof TYPES)[number]["value"]>("text");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [isHidden, setIsHidden] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!keyDirty) {
      // auto-slug
      const slug = "cf_" + label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, 40);
      setKey(slug);
    }
  }, [label, keyDirty]);

  useEffect(() => {
    if (open) {
      setLabel("");
      setKey("");
      setKeyDirty(false);
      setType("text");
      setOptions(["", ""]);
      setIsHidden(false);
      setError(null);
      setSaving(false);
    }
  }, [open]);

  if (!open) return null;

  const needsOptions = type === "select" || type === "multi_select";

  const submit = async () => {
    setError(null);
    if (!label.trim()) {
      setError("Label required");
      return;
    }
    if (!/^cf_[a-z0-9_]{2,40}$/.test(key)) {
      setError("Key must match cf_<2–40 chars, lowercase letters/digits/underscore>");
      return;
    }
    if (needsOptions) {
      const filtered = options.map((o) => o.trim()).filter(Boolean);
      if (filtered.length < 2) {
        setError("Select fields need at least 2 options");
        return;
      }
      if (new Set(filtered).size !== filtered.length) {
        setError("Options must be unique");
        return;
      }
    }
    setSaving(true);
    try {
      const res = await fetch("/api/grants/field-definitions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: label.trim(),
          key,
          field_type: type,
          options: needsOptions
            ? options.map((o) => o.trim()).filter(Boolean)
            : null,
          is_hidden_default: isHidden,
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Create failed");
      onCreated();
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Create failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-white shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-base font-semibold">Add custom field</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-slate-100">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
              Label
            </label>
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g., Budget allocation"
              maxLength={60}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
              Key
            </label>
            <input
              value={key}
              onChange={(e) => {
                setKey(e.target.value);
                setKeyDirty(true);
              }}
              placeholder="cf_budget_allocation"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Must start with <code className="font-mono text-[11px]">cf_</code>. Auto-generated from label.
            </p>
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
              Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          {needsOptions && (
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1.5">
                Options
              </label>
              <div className="space-y-1.5">
                {options.map((opt, i) => (
                  <div key={i} className="flex gap-1">
                    <input
                      value={opt}
                      onChange={(e) =>
                        setOptions((prev) =>
                          prev.map((o, idx) => (idx === i ? e.target.value : o))
                        )
                      }
                      placeholder={`Option ${i + 1}`}
                      className="flex-1 rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                    />
                    <button
                      onClick={() =>
                        setOptions((prev) => prev.filter((_, idx) => idx !== i))
                      }
                      disabled={options.length <= 2}
                      className="text-slate-400 hover:text-red-600 disabled:opacity-30 px-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setOptions((prev) => [...prev, ""])}
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
                >
                  <Plus className="h-3 w-3" />
                  Add option
                </button>
              </div>
            </div>
          )}

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isHidden}
              onChange={(e) => setIsHidden(e.target.checked)}
            />
            <span className="text-sm">Hide by default on grant detail</span>
          </label>

          {error && (
            <div className="rounded bg-red-50 border border-red-200 text-xs text-red-700 px-3 py-2">
              {error}
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-border bg-slate-50/50">
          <button
            onClick={onClose}
            disabled={saving}
            className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={saving}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              "bg-blue-600 text-white hover:bg-blue-700",
              "disabled:bg-slate-200 disabled:text-slate-500"
            )}
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}
            Create field
          </button>
        </div>
      </div>
    </div>
  );
}
