"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckSquare, Plus } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import type { GrantTask } from "@/lib/grants/types";
import { TaskEditorModal } from "./task-editor-modal";

export function TasksPanel({
  grantId,
  tasks: initialTasks,
}: {
  grantId: string;
  tasks: GrantTask[];
}) {
  const router = useRouter();
  const [tasks, setTasks] = useState(initialTasks);
  const [editing, setEditing] = useState<GrantTask | null>(null);
  const [creating, setCreating] = useState(false);

  const openCount = tasks.filter((t) => !t.completed_at).length;
  const today = new Date().toISOString().slice(0, 10);

  // Quick-toggle done from the list without opening the modal
  const quickToggle = async (t: GrantTask) => {
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

  const handleSaved = (saved: GrantTask) => {
    setTasks((prev) => {
      const exists = prev.find((t) => t.id === saved.id);
      if (exists) return prev.map((t) => (t.id === saved.id ? saved : t));
      return [...prev, saved];
    });
  };

  const handleDeleted = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
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
            onClick={() => setCreating(true)}
            className="text-slate-500 hover:text-foreground"
            title="New task"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {tasks.length === 0 ? (
        <p className="text-xs text-muted-foreground italic py-3 text-center">
          No tasks yet
        </p>
      ) : (
        <ul className="space-y-1">
          {tasks.map((t) => {
            const isDone = !!t.completed_at;
            const isOverdue = !isDone && t.due_date && t.due_date < today;
            return (
              <li
                key={t.id}
                className={cn(
                  "group flex items-start gap-2 text-xs px-1.5 py-1.5 rounded cursor-pointer transition-colors",
                  "hover:bg-slate-50"
                )}
                onClick={() => setEditing(t)}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    void quickToggle(t);
                  }}
                  className={cn(
                    "mt-0.5 h-4 w-4 rounded border flex items-center justify-center shrink-0",
                    isDone
                      ? "bg-emerald-600 border-emerald-600 text-white"
                      : "border-slate-300 hover:border-slate-500"
                  )}
                  title={isDone ? "Mark as open" : "Mark as done"}
                >
                  {isDone && (
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
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "font-medium truncate",
                      isDone && "line-through text-slate-500"
                    )}
                  >
                    {t.label}
                  </div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[10.5px]">
                    {t.task_type && (
                      <span className="inline-flex items-center rounded bg-slate-100 text-slate-700 px-1.5 py-0.5 font-medium">
                        {t.task_type}
                      </span>
                    )}
                    {t.due_date && (
                      <span
                        className={cn(
                          isOverdue
                            ? "text-red-600 font-medium"
                            : "text-muted-foreground"
                        )}
                      >
                        {formatDate(t.due_date)}
                        {isOverdue && " · overdue"}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <TaskEditorModal
        open={creating}
        grantId={grantId}
        task={null}
        onClose={() => setCreating(false)}
        onSaved={handleSaved}
      />
      <TaskEditorModal
        open={editing !== null}
        grantId={grantId}
        task={editing}
        onClose={() => setEditing(null)}
        onSaved={handleSaved}
        onDeleted={handleDeleted}
      />
    </div>
  );
}
