"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckSquare, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GrantTask } from "@/lib/grants/types";

export function TasksPanel({
  grantId,
  tasks: initialTasks,
}: {
  grantId: string;
  tasks: GrantTask[];
}) {
  const router = useRouter();
  const [tasks, setTasks] = useState(initialTasks);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);

  const openCount = tasks.filter((t) => !t.completed_at).length;

  const create = async () => {
    const label = draft.trim();
    if (!label) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/grants/${grantId}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error);
      setTasks((prev) => [...prev, body.task as GrantTask]);
      setDraft("");
      setAdding(false);
      router.refresh();
    } finally {
      setSaving(false);
    }
  };

  const toggle = async (t: GrantTask) => {
    const completed_at = t.completed_at ? null : new Date().toISOString();
    setTasks((prev) =>
      prev.map((x) => (x.id === t.id ? { ...x, completed_at } : x))
    );
    try {
      await fetch(`/api/grants/${grantId}/tasks/${t.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed_at }),
      });
      router.refresh();
    } catch {
      setTasks((prev) => prev.map((x) => (x.id === t.id ? t : x)));
    }
  };

  const remove = async (t: GrantTask) => {
    setTasks((prev) => prev.filter((x) => x.id !== t.id));
    await fetch(`/api/grants/${grantId}/tasks/${t.id}`, { method: "DELETE" });
    router.refresh();
  };

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-4 w-4 text-slate-500" />
          <h3 className="text-sm font-semibold">Tasks</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{openCount} open</span>
          <button
            onClick={() => setAdding(!adding)}
            className="text-slate-500 hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {adding && (
        <div className="mb-3 flex gap-1">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") void create();
              if (e.key === "Escape") {
                setDraft("");
                setAdding(false);
              }
            }}
            placeholder="New task…"
            autoFocus
            className="flex-1 text-xs rounded border border-slate-300 px-2 py-1"
          />
          <button
            onClick={create}
            disabled={saving || !draft.trim()}
            className="text-xs px-2 py-1 rounded bg-blue-600 text-white disabled:bg-slate-200 disabled:text-slate-500"
          >
            Add
          </button>
        </div>
      )}

      {tasks.length === 0 ? (
        <p className="text-xs text-muted-foreground italic py-3 text-center">
          No tasks yet
        </p>
      ) : (
        <ul className="space-y-1">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="group flex items-center gap-2 text-xs px-1.5 py-1 rounded hover:bg-slate-50"
            >
              <button
                onClick={() => toggle(t)}
                className={cn(
                  "h-4 w-4 rounded border flex items-center justify-center shrink-0",
                  t.completed_at
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "border-slate-300 hover:border-slate-500"
                )}
              >
                {t.completed_at && (
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M5 10l3 3 7-7" />
                  </svg>
                )}
              </button>
              <span
                className={cn(
                  "flex-1 min-w-0 truncate",
                  t.completed_at && "line-through text-slate-500"
                )}
              >
                {t.label}
              </span>
              <button
                onClick={() => remove(t)}
                className="text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100"
              >
                <X className="h-3 w-3" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
