"use client";

import { useState, useRef, useEffect } from "react";
import { Check, X, Loader2 } from "lucide-react";
import { formatCurrency, formatDate, cn } from "@/lib/utils";
import type { FieldRowProps } from "./field-row";

export interface EditableFieldRowProps extends Omit<FieldRowProps, "value"> {
  grantId: string;
  column: string;
  value: unknown;
  /**
   * true if this column syncs to Salesforce (SF-mirror). Used for badge and
   * hover tooltip copy. Custom fields set false.
   */
  syncsToSf: boolean;
  readOnly?: boolean;
  options?: string[];
}

/**
 * Client-side field row with inline-edit behavior.
 * Click-to-edit, Enter/blur to save, Esc to cancel.
 * Optimistic UI; reverts on API failure with a visible error.
 */
export function EditableFieldRow({
  grantId,
  column,
  label,
  value,
  editor = "text",
  syncsToSf,
  readOnly = false,
  options,
}: EditableFieldRowProps) {
  const [editing, setEditing] = useState(false);
  const [localValue, setLocalValue] = useState<unknown>(value);
  const [draft, setDraft] = useState<string>(toInput(value, editor));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pulseOk, setPulseOk] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    null
  );

  useEffect(() => {
    setLocalValue(value);
    setDraft(toInput(value, editor));
  }, [value, editor]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      if (inputRef.current instanceof HTMLInputElement && editor !== "bool") {
        inputRef.current.select();
      }
    }
  }, [editing, editor]);

  if (readOnly || editor === "reference" || editor === "datetime") {
    return (
      <div className="grid grid-cols-[180px_1fr] gap-4 py-2.5 border-b border-border last:border-0 items-start">
        <LabelCell label={label} syncsToSf={syncsToSf} />
        <DisplayValue value={localValue} editor={editor} />
      </div>
    );
  }

  const save = async () => {
    const parsed = parseInput(draft, editor);
    if (parsed === localValue || (parsed == null && localValue == null)) {
      setEditing(false);
      return;
    }
    setSaving(true);
    setError(null);
    const previous = localValue;
    setLocalValue(parsed); // optimistic
    try {
      const res = await fetch(`/api/grants/${grantId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [column]: parsed }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Save failed (${res.status})`);
      }
      setEditing(false);
      setPulseOk(true);
      setTimeout(() => setPulseOk(false), 1200);
    } catch (e) {
      setLocalValue(previous);
      setDraft(toInput(previous, editor));
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const cancel = () => {
    setDraft(toInput(localValue, editor));
    setEditing(false);
    setError(null);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      cancel();
    } else if (e.key === "Enter" && editor !== "long_text") {
      e.preventDefault();
      void save();
    } else if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      void save();
    }
  };

  return (
    <div className="grid grid-cols-[180px_1fr] gap-4 py-2.5 border-b border-border last:border-0 items-start">
      <LabelCell label={label} syncsToSf={syncsToSf} />
      <div className="text-sm text-foreground">
        {editing ? (
          <div className="flex items-start gap-2">
            <EditorInput
              editor={editor}
              value={draft}
              onChange={setDraft}
              onBlur={() => void save()}
              onKeyDown={onKey}
              inputRef={inputRef as React.RefObject<HTMLInputElement>}
              options={options}
              disabled={saving}
            />
            {saving && (
              <Loader2 className="h-4 w-4 mt-1.5 animate-spin text-muted-foreground" />
            )}
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className={cn(
              "w-full text-left rounded px-1 -mx-1 py-0.5 group",
              "hover:bg-slate-50 hover:outline hover:outline-1 hover:outline-slate-200 transition-colors",
              pulseOk && "bg-emerald-50 outline outline-1 outline-emerald-200"
            )}
          >
            <DisplayValue value={localValue} editor={editor} />
          </button>
        )}
        {error && (
          <div className="mt-1 text-xs text-red-600">{error}</div>
        )}
      </div>
    </div>
  );
}

function LabelCell({ label, syncsToSf }: { label: string; syncsToSf: boolean }) {
  return (
    <div
      className="flex items-center gap-1.5"
      title={syncsToSf ? "SF-mirror field (syncs to Salesforce)" : "Dashboard-only (never syncs)"}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      {syncsToSf ? (
        <span className="text-[9px] font-semibold uppercase text-blue-600/70 tracking-wider">
          SF
        </span>
      ) : (
        <span className="text-[9px] font-semibold uppercase text-purple-600/70 tracking-wider">
          Dash
        </span>
      )}
    </div>
  );
}

function DisplayValue({
  value,
  editor,
}: {
  value: unknown;
  editor: FieldRowProps["editor"];
}) {
  if (value === null || value === undefined || value === "") {
    return <span className="text-muted-foreground italic">Click to add</span>;
  }
  switch (editor) {
    case "currency":
      return <span className="font-mono">{formatCurrency(Number(value))}</span>;
    case "number":
      return <span className="font-mono">{String(value)}</span>;
    case "date":
      return <span>{formatDate(String(value))}</span>;
    case "datetime":
      return <span>{formatDate(String(value).slice(0, 10))}</span>;
    case "bool":
      return <span>{value ? "Yes" : "No"}</span>;
    case "long_text":
      return <p className="whitespace-pre-wrap">{String(value)}</p>;
    case "reference":
      return <span className="font-mono text-xs">{String(value)}</span>;
    default:
      return <span>{String(value)}</span>;
  }
}

function EditorInput({
  editor,
  value,
  onChange,
  onBlur,
  onKeyDown,
  inputRef,
  options,
  disabled,
}: {
  editor: FieldRowProps["editor"];
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  inputRef: any;
  options?: string[];
  disabled?: boolean;
}) {
  const baseClass =
    "flex-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  if (editor === "long_text") {
    return (
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
        rows={4}
        className={baseClass}
      />
    );
  }

  if (editor === "bool") {
    return (
      <select
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
        className={baseClass}
      >
        <option value="">—</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    );
  }

  if (options && options.length > 0) {
    return (
      <select
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        disabled={disabled}
        className={baseClass}
      >
        <option value="">—</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  }

  const inputType =
    editor === "date"
      ? "date"
      : editor === "number" || editor === "currency"
        ? "number"
        : "text";
  const step = editor === "currency" ? "0.01" : undefined;

  return (
    <input
      ref={inputRef}
      type={inputType}
      step={step}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={baseClass}
    />
  );
}

function toInput(value: unknown, editor: FieldRowProps["editor"]): string {
  if (value === null || value === undefined) return "";
  if (editor === "bool") return String(!!value);
  if (editor === "date") return String(value).slice(0, 10);
  return String(value);
}

function parseInput(text: string, editor: FieldRowProps["editor"]): unknown {
  const t = text.trim();
  if (t === "") return null;
  switch (editor) {
    case "number":
    case "currency": {
      const n = Number(t);
      return Number.isFinite(n) ? n : null;
    }
    case "bool":
      return t === "true" ? true : t === "false" ? false : null;
    case "date":
      return t;
    default:
      return t;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused = { Check, X };
