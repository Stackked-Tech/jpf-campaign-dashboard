"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageSquare, Plus } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { GrantNote } from "@/lib/grants/types";

const VISIBLE_LIMIT = 5;

export function NotesPanel({
  grantId,
  notes: initialNotes,
}: {
  grantId: string;
  notes: GrantNote[];
}) {
  const router = useRouter();
  const [notes, setNotes] = useState(initialNotes);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? notes : notes.slice(0, VISIBLE_LIMIT);

  const create = async () => {
    const body = draft.trim();
    if (!body) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/grants/${grantId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error);
      setNotes((prev) => [payload.note as GrantNote, ...prev]);
      setDraft("");
      setAdding(false);
      router.refresh();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-slate-500" />
          <h3 className="text-sm font-semibold">Notes</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{notes.length}</span>
          <button
            onClick={() => setAdding(!adding)}
            className="text-slate-500 hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {adding && (
        <div className="mb-3 space-y-1">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setDraft("");
                setAdding(false);
              }
              if (e.key === "Enter" && e.metaKey) void create();
            }}
            placeholder="Add a note…"
            autoFocus
            rows={3}
            className="w-full text-xs rounded border border-slate-300 px-2 py-1 resize-none"
          />
          <div className="flex justify-end gap-1">
            <button
              onClick={() => {
                setDraft("");
                setAdding(false);
              }}
              className="text-xs px-2 py-1 text-muted-foreground hover:text-foreground"
            >
              Cancel
            </button>
            <button
              onClick={create}
              disabled={saving || !draft.trim()}
              className="text-xs px-2 py-1 rounded bg-blue-600 text-white disabled:bg-slate-200 disabled:text-slate-500"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {notes.length === 0 ? (
        <p className="text-xs text-muted-foreground italic py-3 text-center">
          No notes yet
        </p>
      ) : (
        <>
          <ul className="space-y-2">
            {visible.map((n) => (
              <li key={n.id} className="text-xs">
                <p className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
                  {n.body}
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">
                  {n.author} · {formatDate(n.created_at.slice(0, 10))}
                </p>
              </li>
            ))}
          </ul>
          {notes.length > VISIBLE_LIMIT && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-3 text-xs text-blue-600 hover:underline"
            >
              {showAll ? "Show less" : `Show ${notes.length - VISIBLE_LIMIT} more`}
            </button>
          )}
        </>
      )}
    </div>
  );
}
