"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import type { GrantTemplate, ChecklistItemTemplate } from "@/lib/grants/types";

interface Props { initialTemplates: GrantTemplate[]; }

export function TemplatesAdmin({ initialTemplates }: Props) {
  const [templates, setTemplates] = useState(initialTemplates);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newItems, setNewItems] = useState<ChecklistItemTemplate[]>([]);
  const [error, setError] = useState("");

  function addItem() { setNewItems((x) => [...x, { label: "", offset_days_from_award: null }]); }

  async function createTemplate() {
    if (!newName.trim()) { setError("Name required"); return; }
    setError("");
    const res = await fetch("/api/grants/templates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newName.trim(),
        description: newDescription.trim() || null,
        default_checklist_items: newItems.filter((i) => i.label.trim().length > 0),
      }),
    });
    const j = await res.json();
    if (!res.ok) { setError(j.error ?? "failed"); return; }
    setTemplates((t) => [...t, j.template]);
    setNewName(""); setNewDescription(""); setNewItems([]);
  }

  async function removeTemplate(id: string) {
    if (!confirm("Delete this template? Grants created from it will keep their tasks.")) return;
    await fetch(`/api/grants/templates/${id}`, { method: "DELETE" });
    setTemplates((t) => t.filter((x) => x.id !== id));
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Grant templates</h2>
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {templates.map((t) => (
          <li key={t.id} className="px-4 py-3 flex items-center gap-3 text-sm">
            <div className="flex-1">
              <div className="font-medium">{t.name}</div>
              {t.description && <div className="text-xs text-muted-foreground">{t.description}</div>}
              <div className="text-xs text-muted-foreground">{t.default_checklist_items.length} checklist items</div>
            </div>
            <button type="button" onClick={() => removeTemplate(t.id)}
              className="text-muted-foreground hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <div className="border border-border rounded-lg bg-card p-4 space-y-3">
        <div className="text-sm font-semibold">Add template</div>
        <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Name (e.g., 'Education Grant')"
          className="w-full rounded border border-border bg-background px-3 py-2 text-sm" />
        <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description (optional)"
          className="w-full rounded border border-border bg-background px-3 py-2 text-sm" />
        <div className="space-y-1">
          <div className="text-xs font-medium text-muted-foreground">Default checklist items</div>
          {newItems.map((it, idx) => (
            <div key={idx} className="flex gap-2 items-center text-sm">
              <input value={it.label} placeholder="Task label"
                onChange={(e) => setNewItems(newItems.map((x, i) => i === idx ? { ...x, label: e.target.value } : x))}
                className="flex-1 rounded border border-border bg-background px-2 py-1" />
              <input type="number" placeholder="Offset days from award" value={it.offset_days_from_award ?? ""}
                onChange={(e) => setNewItems(newItems.map((x, i) => i === idx ? {
                  ...x, offset_days_from_award: e.target.value === "" ? null : Number(e.target.value),
                } : x))}
                className="w-48 rounded border border-border bg-background px-2 py-1" />
            </div>
          ))}
          <button type="button" onClick={addItem} className="text-xs text-primary hover:underline">+ add item</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex justify-end">
          <button type="button" onClick={createTemplate}
            className="btn-pill bg-primary text-primary-foreground text-sm">Add template</button>
        </div>
      </div>
    </section>
  );
}
