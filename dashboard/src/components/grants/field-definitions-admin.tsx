"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import type { FieldDefinition, FieldType, GrantTemplate } from "@/lib/grants/types";

interface Props { initialDefinitions: FieldDefinition[]; templates: GrantTemplate[]; }

export function FieldDefinitionsAdmin({ initialDefinitions, templates }: Props) {
  const [defs, setDefs] = useState(initialDefinitions);
  const [label, setLabel] = useState("");
  const [type, setType] = useState<FieldType>("text");
  const [optionsText, setOptionsText] = useState("");
  const [templateId, setTemplateId] = useState<string>("");
  const [error, setError] = useState("");

  async function createDef() {
    if (!label.trim()) { setError("Label required"); return; }
    setError("");
    const key = label.toLowerCase().replace(/[^a-z0-9_]+/g, "_").replace(/^_|_$/g, "");
    const options = type === "select"
      ? optionsText.split(",").map((s) => s.trim()).filter(Boolean)
      : null;
    const res = await fetch("/api/grants/field-definitions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, label: label.trim(), field_type: type, options, template_id: templateId || null }),
    });
    const j = await res.json();
    if (!res.ok) { setError(j.error ?? "failed"); return; }
    setDefs((d) => [...d, j.definition]);
    setLabel(""); setOptionsText(""); setType("text"); setTemplateId("");
  }

  async function removeDef(id: string) {
    if (!confirm("Delete this field? Values already stored on grants remain in custom_fields.")) return;
    await fetch(`/api/grants/field-definitions/${id}`, { method: "DELETE" });
    setDefs((d) => d.filter((x) => x.id !== id));
  }

  const templateName = (id: string | null) => id ? templates.find((t) => t.id === id)?.name ?? "—" : "(all grants)";

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Custom fields</h2>
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {defs.length === 0 && <li className="px-4 py-6 text-sm text-muted-foreground text-center">No custom fields yet.</li>}
        {defs.map((d) => (
          <li key={d.id} className="px-4 py-3 flex items-center gap-3 text-sm">
            <div className="flex-1">
              <div className="font-medium">{d.label} <code className="text-xs text-muted-foreground">({d.key})</code></div>
              <div className="text-xs text-muted-foreground">{d.field_type} · scope: {templateName(d.template_id)}</div>
            </div>
            <button type="button" onClick={() => removeDef(d.id)} className="text-muted-foreground hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <div className="border border-border rounded-lg bg-card p-4 space-y-3">
        <div className="text-sm font-semibold">Add field</div>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1 text-sm">
            Label
            <input value={label} onChange={(e) => setLabel(e.target.value)}
              className="rounded border border-border bg-background px-2 py-1" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Type
            <select value={type} onChange={(e) => setType(e.target.value as FieldType)}
              className="rounded border border-border bg-background px-2 py-1">
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="date">Date</option>
              <option value="bool">Checkbox</option>
              <option value="select">Select</option>
            </select>
          </label>
          {type === "select" && (
            <label className="flex flex-col gap-1 text-sm col-span-2">
              Options (comma-separated)
              <input value={optionsText} onChange={(e) => setOptionsText(e.target.value)}
                className="rounded border border-border bg-background px-2 py-1" />
            </label>
          )}
          <label className="flex flex-col gap-1 text-sm col-span-2">
            Scope
            <select value={templateId} onChange={(e) => setTemplateId(e.target.value)}
              className="rounded border border-border bg-background px-2 py-1">
              <option value="">All grants</option>
              {templates.map((t) => <option key={t.id} value={t.id}>Only: {t.name}</option>)}
            </select>
          </label>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex justify-end">
          <button type="button" onClick={createDef} className="btn-pill bg-primary text-primary-foreground text-sm">
            Add field
          </button>
        </div>
      </div>
    </section>
  );
}
