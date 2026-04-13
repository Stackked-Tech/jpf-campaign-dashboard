"use client";

import { useState } from "react";
import { formatDate } from "@/lib/utils";
import type { GrantNote } from "@/lib/grants/types";

interface Props { grantId: string; initialNotes: GrantNote[]; }

export function GrantDetailNotes({ grantId, initialNotes }: Props) {
  const [notes, setNotes] = useState(initialNotes);
  const [draft, setDraft] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit() {
    if (!draft.trim()) return;
    setSubmitting(true);
    const res = await fetch(`/api/grants/${grantId}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: draft }),
    });
    setSubmitting(false);
    if (res.ok) {
      const { note } = await res.json();
      setNotes((n) => [note, ...n]);
      setDraft("");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={3}
          placeholder="Add a note..." className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <div className="flex justify-end">
          <button type="button" onClick={submit} disabled={submitting || !draft.trim()}
            className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 text-sm">
            {submitting ? "Saving…" : "Add note"}
          </button>
        </div>
      </div>
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {notes.length === 0 && (
          <li className="px-4 py-6 text-sm text-muted-foreground text-center">No notes yet.</li>
        )}
        {notes.map((n) => (
          <li key={n.id} className="px-4 py-3 text-sm">
            <div className="whitespace-pre-wrap">{n.body}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {n.author} · {formatDate(n.created_at)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
