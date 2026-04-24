"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { formatCurrency, formatDate, cn } from "@/lib/utils";

export type CellEditor =
  | "text"
  | "long_text"
  | "number"
  | "currency"
  | "date"
  | "datetime"
  | "bool"
  | "reference";

export interface EditableFieldCellProps {
  grantId: string;
  column: string;
  label: string;
  value: unknown;
  editor: CellEditor;
  /** Optional pre-resolved display for reference fields (e.g. Funder name). */
  displayOverride?: string | null;
  readOnly?: boolean;
  options?: string[];
  className?: string;
}

/**
 * Compact vertical-stack field cell for the detail-page grid layout.
 * Label on top (small-caps), value underneath. Click to edit inline.
 */
export function EditableFieldCell({
  grantId,
  column,
  label,
  value,
  editor,
  displayOverride,
  readOnly = false,
  options,
  className,
}: EditableFieldCellProps) {
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

  const isReadOnly =
    readOnly || editor === "reference" || editor === "datetime";

  const save = async () => {
    const parsed = parseInput(draft, editor);
    if (parsed === localValue || (parsed == null && localValue == null)) {
      setEditing(false);
      return;
    }
    setSaving(true);
    setError(null);
    const previous = localValue;
    setLocalValue(parsed);
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

  const isEmpty = localValue === null || localValue === undefined || localValue === "";
  const displayText = displayOverride
    ? displayOverride
    : formatValue(localValue, editor);

  return (
    <div className={cn("min-w-0", className)}>
      <div className="text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
        {label}
      </div>
      {editing && !isReadOnly ? (
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
            <Loader2 className="h-4 w-4 mt-2 animate-spin text-muted-foreground shrink-0" />
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => !isReadOnly && setEditing(true)}
          disabled={isReadOnly}
          className={cn(
            "w-full text-left min-h-[28px] py-1 px-1.5 -mx-1.5 rounded transition-colors",
            !isReadOnly && "cursor-text hover:bg-slate-100/60",
            pulseOk && "bg-emerald-50"
          )}
        >
          {isEmpty ? (
            <span className="text-sm text-slate-400">—</span>
          ) : editor === "currency" ? (
            <span className="text-sm font-mono tabular-nums text-foreground">
              {displayText}
            </span>
          ) : editor === "long_text" ? (
            <p className="text-sm whitespace-pre-wrap leading-relaxed">
              {displayText}
            </p>
          ) : editor === "reference" ? (
            <span className="text-sm">{displayText}</span>
          ) : (
            <span className="text-sm text-foreground">{displayText}</span>
          )}
        </button>
      )}
      {error && <div className="mt-1 text-xs text-red-600">{error}</div>}
    </div>
  );
}

function formatValue(value: unknown, editor: CellEditor): string {
  if (value === null || value === undefined || value === "") return "—";
  switch (editor) {
    case "currency":
      return formatCurrency(Number(value));
    case "number":
      return String(value);
    case "date":
      return formatDate(String(value));
    case "datetime":
      return formatDate(String(value).slice(0, 10));
    case "bool":
      return value ? "Yes" : "No";
    default:
      return String(value);
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
  editor: CellEditor;
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
    "flex-1 rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

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

function toInput(value: unknown, editor: CellEditor): string {
  if (value === null || value === undefined) return "";
  if (editor === "bool") return String(!!value);
  if (editor === "date") return String(value).slice(0, 10);
  return String(value);
}

function parseInput(text: string, editor: CellEditor): unknown {
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
