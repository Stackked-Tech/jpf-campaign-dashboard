"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import type { GrantReport, ReportSection, ReportSectionType } from "@/lib/grants/types";

interface Props { grantId: string; report: GrantReport; onChanged: (report: GrantReport) => void; }

function defaultContent(type: ReportSectionType): unknown {
  if (type === "narrative") return { markdown: "" };
  if (type === "financial") return { rows: [] };
  return { rows: [] };
}

export function ReportEditor({ grantId, report, onChanged }: Props) {
  const [sections, setSections] = useState<ReportSection[]>(report.sections);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(report.submitted_date);

  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      const res = await fetch(`/api/grants/${grantId}/reports/${report.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sections }),
      });
      if (res.ok) {
        const { report: updated } = await res.json();
        onChanged(updated);
      }
    }, 600);
    return () => { if (saveTimer.current) clearTimeout(saveTimer.current); };
  }, [sections, grantId, report.id, onChanged]);

  function addSection(type: ReportSectionType) {
    setSections((s) => [...s, { type, title: type === "narrative" ? "Narrative" : type === "financial" ? "Financial summary" : "Impact metrics", content: defaultContent(type) }]);
  }

  function updateSection(idx: number, patch: Partial<ReportSection>) {
    setSections((s) => s.map((x, i) => i === idx ? { ...x, ...patch } : x));
  }

  function removeSection(idx: number) {
    setSections((s) => s.filter((_, i) => i !== idx));
  }

  async function markSubmitted() {
    const today = new Date().toISOString().slice(0, 10);
    const res = await fetch(`/api/grants/${grantId}/reports/${report.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submitted_date: today }),
    });
    if (res.ok) {
      setSubmitted(today);
      const { report: updated } = await res.json();
      onChanged(updated);
    }
  }

  return (
    <div className="space-y-4">
      {submitted && (
        <div className="rounded-md bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm text-emerald-800">
          Submitted on {submitted}.
        </div>
      )}
      {sections.map((sec, idx) => (
        <div key={idx} className="rounded-lg border border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between">
            <input value={sec.title} onChange={(e) => updateSection(idx, { title: e.target.value })}
              className="text-sm font-semibold bg-transparent border-none focus:outline-none focus:ring-0 p-0" />
            <button type="button" onClick={() => removeSection(idx)} className="text-muted-foreground hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          {sec.type === "narrative" && (
            <textarea rows={6}
              value={(sec.content as { markdown: string }).markdown}
              onChange={(e) => updateSection(idx, { content: { markdown: e.target.value } })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              placeholder="Write the narrative here (plain text or markdown)..." />
          )}
          {sec.type === "financial" && (
            <FinancialTable
              rows={(sec.content as { rows: { category: string; planned: number | null; spent: number | null }[] }).rows}
              onChange={(rows) => updateSection(idx, { content: { rows } })} />
          )}
          {sec.type === "metric" && (
            <MetricTable
              rows={(sec.content as { rows: { key: string; target: number | null; actual: number | null }[] }).rows}
              onChange={(rows) => updateSection(idx, { content: { rows } })} />
          )}
        </div>
      ))}

      <div className="flex gap-2 flex-wrap">
        <button type="button" onClick={() => addSection("narrative")} className="btn-pill bg-muted text-foreground text-xs">
          <Plus className="h-3 w-3" /> Narrative
        </button>
        <button type="button" onClick={() => addSection("financial")} className="btn-pill bg-muted text-foreground text-xs">
          <Plus className="h-3 w-3" /> Financial
        </button>
        <button type="button" onClick={() => addSection("metric")} className="btn-pill bg-muted text-foreground text-xs">
          <Plus className="h-3 w-3" /> Metric
        </button>
        {!submitted && (
          <button type="button" onClick={markSubmitted}
            className="ml-auto btn-pill bg-primary text-primary-foreground text-xs">
            Mark submitted
          </button>
        )}
      </div>
    </div>
  );
}

function FinancialTable({
  rows, onChange,
}: { rows: { category: string; planned: number | null; spent: number | null }[]; onChange: (rows: { category: string; planned: number | null; spent: number | null }[]) => void; }) {
  return (
    <div className="space-y-1">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-12 gap-2 items-center text-sm">
          <input className="col-span-6 rounded border border-border bg-background px-2 py-1"
            placeholder="Category" value={r.category}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, category: e.target.value } : x))} />
          <input type="number" className="col-span-3 rounded border border-border bg-background px-2 py-1"
            placeholder="Planned" value={r.planned ?? ""}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, planned: e.target.value === "" ? null : Number(e.target.value) } : x))} />
          <input type="number" className="col-span-2 rounded border border-border bg-background px-2 py-1"
            placeholder="Spent" value={r.spent ?? ""}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, spent: e.target.value === "" ? null : Number(e.target.value) } : x))} />
          <button type="button" onClick={() => onChange(rows.filter((_, j) => j !== i))}
            className="col-span-1 text-muted-foreground hover:text-destructive">×</button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...rows, { category: "", planned: null, spent: null }])}
        className="text-xs text-primary hover:underline">+ row</button>
    </div>
  );
}

function MetricTable({
  rows, onChange,
}: { rows: { key: string; target: number | null; actual: number | null }[]; onChange: (rows: { key: string; target: number | null; actual: number | null }[]) => void; }) {
  return (
    <div className="space-y-1">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-12 gap-2 items-center text-sm">
          <input className="col-span-6 rounded border border-border bg-background px-2 py-1"
            placeholder="Metric" value={r.key}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, key: e.target.value } : x))} />
          <input type="number" className="col-span-3 rounded border border-border bg-background px-2 py-1"
            placeholder="Target" value={r.target ?? ""}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, target: e.target.value === "" ? null : Number(e.target.value) } : x))} />
          <input type="number" className="col-span-2 rounded border border-border bg-background px-2 py-1"
            placeholder="Actual" value={r.actual ?? ""}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, actual: e.target.value === "" ? null : Number(e.target.value) } : x))} />
          <button type="button" onClick={() => onChange(rows.filter((_, j) => j !== i))}
            className="col-span-1 text-muted-foreground hover:text-destructive">×</button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...rows, { key: "", target: null, actual: null }])}
        className="text-xs text-primary hover:underline">+ row</button>
    </div>
  );
}
