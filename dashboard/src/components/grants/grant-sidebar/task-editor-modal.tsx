"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, Loader2, CheckCircle2, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GrantTask } from "@/lib/grants/types";

export const TASK_TYPE_OPTIONS = [
  "General",
  "Application",
  "Follow-up",
  "Site visit",
  "Meeting",
  "Call",
  "Email",
  "Report",
  "Research",
] as const;

interface TaskEditorModalProps {
  open: boolean;
  grantId: string;
  task: GrantTask | null; // null = create mode
  onClose: () => void;
  onSaved: (task: GrantTask) => void;
  onDeleted?: (id: string) => void;
}

export function TaskEditorModal({
  open,
  grantId,
  task,
  onClose,
  onSaved,
  onDeleted,
}: TaskEditorModalProps) {
  const router = useRouter();
  const [label, setLabel] = useState("");
  const [taskType, setTaskType] = useState<string>("General");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    if (task) {
      setLabel(task.label);
      setTaskType(task.task_type ?? "General");
      setDescription(task.description ?? "");
      setDueDate(task.due_date ?? "");
    } else {
      setLabel("");
      setTaskType("General");
      setDescription("");
      setDueDate("");
    }
    setError(null);
    setSaving(false);
  }, [open, task]);

  if (!open) return null;

  const isEdit = !!task;
  const isDone = !!task?.completed_at;

  const save = async () => {
    if (!label.trim()) {
      setError("Title required");
      return;
    }
    setSaving(true);
    setError(null);
    try {
      const url = isEdit
        ? `/api/grants/${grantId}/tasks/${task.id}`
        : `/api/grants/${grantId}/tasks`;
      const res = await fetch(url, {
        method: isEdit ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: label.trim(),
          task_type: taskType,
          description: description.trim() || null,
          due_date: dueDate || null,
        }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Save failed");
      onSaved((body.task ?? body) as GrantTask);
      router.refresh();
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const toggleDone = async () => {
    if (!task) return;
    setSaving(true);
    try {
      const completed_at = task.completed_at ? null : new Date().toISOString();
      const res = await fetch(`/api/grants/${grantId}/tasks/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed_at }),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error);
      onSaved(body.task as GrantTask);
      router.refresh();
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!task) return;
    if (!confirm(`Delete task "${task.label}"?`)) return;
    setSaving(true);
    try {
      await fetch(`/api/grants/${grantId}/tasks/${task.id}`, { method: "DELETE" });
      onDeleted?.(task.id);
      router.refresh();
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-xl shadow-xl flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="text-base font-semibold">
            {isEdit ? "Edit task" : "New task"}
          </h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-slate-100">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          <Field label="Title">
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="What needs to happen?"
              autoFocus={!isEdit}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Type">
              <select
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {TASK_TYPE_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Due date">
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </Field>
          </div>

          <Field label="Description">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Additional context…"
              rows={4}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </Field>

          {error && (
            <div className="rounded bg-red-50 border border-red-200 text-xs text-red-700 px-3 py-2">
              {error}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 px-5 py-4 border-t border-border bg-slate-50/50">
          <div className="flex items-center gap-1.5">
            {isEdit && (
              <button
                onClick={toggleDone}
                disabled={saving}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                  isDone
                    ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    : "bg-emerald-600 text-white hover:bg-emerald-700"
                )}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {isDone ? "Mark as open" : "Mark as done"}
              </button>
            )}
            {isEdit && onDeleted && (
              <button
                onClick={remove}
                disabled={saving}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs text-slate-500 hover:bg-red-50 hover:text-red-700"
                title="Delete task"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              disabled={saving}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              onClick={save}
              disabled={saving || !label.trim()}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                "bg-blue-600 text-white hover:bg-blue-700",
                "disabled:bg-slate-200 disabled:text-slate-500"
              )}
            >
              {saving && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
              {isEdit ? "Save" : "Create task"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}
