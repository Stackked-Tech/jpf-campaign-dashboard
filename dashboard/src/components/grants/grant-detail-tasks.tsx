"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Circle, Plus, Trash2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { GrantTask } from "@/lib/grants/types";

interface Props { grantId: string; role: "admin" | "grants" | "dev" | null; initialTasks: GrantTask[]; }

export function GrantDetailTasks({ grantId, role, initialTasks }: Props) {
  const router = useRouter();
  const [tasks, setTasks] = useState(initialTasks);
  const [newLabel, setNewLabel] = useState("");
  const [newDue, setNewDue] = useState("");

  async function toggle(task: GrantTask) {
    const completed_at = task.completed_at ? null : new Date().toISOString();
    setTasks((t) => t.map((x) => x.id === task.id ? { ...x, completed_at, completed_by: completed_at ? role : null } : x));
    await fetch(`/api/grants/${grantId}/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed_at, completed_by: completed_at ? role : null }),
    });
    router.refresh();
  }

  async function addTask() {
    if (!newLabel.trim()) return;
    const res = await fetch(`/api/grants/${grantId}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: newLabel.trim(), due_date: newDue || null }),
    });
    if (res.ok) {
      const { task } = await res.json();
      setTasks((t) => [...t, task]);
      setNewLabel(""); setNewDue("");
    }
  }

  async function removeTask(taskId: string) {
    await fetch(`/api/grants/${grantId}/tasks/${taskId}`, { method: "DELETE" });
    setTasks((t) => t.filter((x) => x.id !== taskId));
  }

  return (
    <div className="space-y-3">
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {tasks.length === 0 && (
          <li className="px-4 py-6 text-sm text-muted-foreground text-center">No tasks yet.</li>
        )}
        {tasks.map((t) => (
          <li key={t.id} className="px-4 py-3 flex items-center gap-3 text-sm">
            <button type="button" onClick={() => toggle(t)} className="text-primary">
              {t.completed_at ? <Check className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            </button>
            <div className="flex-1">
              <div className={t.completed_at ? "line-through text-muted-foreground" : ""}>{t.label}</div>
              {t.due_date && <div className="text-xs text-muted-foreground">Due {formatDate(t.due_date)}</div>}
            </div>
            <button type="button" onClick={() => removeTask(t.id)} className="text-muted-foreground hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 items-center">
        <input value={newLabel} onChange={(e) => setNewLabel(e.target.value)} placeholder="Add a task..."
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <input type="date" value={newDue} onChange={(e) => setNewDue(e.target.value)}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <button type="button" onClick={addTask} className="btn-pill bg-primary text-primary-foreground text-sm">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
