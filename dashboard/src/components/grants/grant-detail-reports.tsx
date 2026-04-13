"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";
import type { GrantReport } from "@/lib/grants/types";
import { ReportEditor } from "./report-editor";

interface Props { grantId: string; initialReports: GrantReport[]; }

export function GrantDetailReports({ grantId, initialReports }: Props) {
  const router = useRouter();
  const [reports, setReports] = useState(initialReports);
  const [selectedId, setSelectedId] = useState<string | null>(initialReports[0]?.id ?? null);
  const [newName, setNewName] = useState("");
  const [newDue, setNewDue] = useState("");

  async function addReport() {
    if (!newName.trim() || !newDue) return;
    const res = await fetch(`/api/grants/${grantId}/reports`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim(), due_date: newDue }),
    });
    if (res.ok) {
      const { report } = await res.json();
      setReports((r) => [...r, report]);
      setSelectedId(report.id);
      setNewName(""); setNewDue("");
      router.refresh();
    }
  }

  const selected = reports.find((r) => r.id === selectedId) ?? null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <aside className="md:col-span-1 space-y-3">
        <ul className="divide-y divide-border border border-border rounded-lg bg-card">
          {reports.length === 0 && (
            <li className="px-3 py-4 text-xs text-muted-foreground text-center">No reports yet.</li>
          )}
          {reports.map((r) => (
            <li key={r.id}>
              <button type="button" onClick={() => setSelectedId(r.id)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-muted ${selectedId === r.id ? "bg-muted" : ""}`}>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">
                  Due {formatDate(r.due_date)}
                  {r.submitted_date && ` · submitted ${formatDate(r.submitted_date)}`}
                </div>
              </button>
            </li>
          ))}
        </ul>
        <div className="space-y-2 border border-border rounded-lg bg-card p-3">
          <div className="text-xs font-semibold">Add report</div>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Report name"
            className="w-full rounded border border-border bg-background px-2 py-1 text-sm" />
          <input type="date" value={newDue} onChange={(e) => setNewDue(e.target.value)}
            className="w-full rounded border border-border bg-background px-2 py-1 text-sm" />
          <button type="button" onClick={addReport}
            className="btn-pill bg-primary text-primary-foreground text-xs w-full">Add</button>
        </div>
      </aside>

      <div className="md:col-span-3">
        {selected ? (
          <ReportEditor grantId={grantId} report={selected}
            onChanged={(updated) => setReports((rs) => rs.map((r) => r.id === updated.id ? updated : r))} />
        ) : (
          <div className="text-sm text-muted-foreground">Select or add a report.</div>
        )}
      </div>
    </div>
  );
}
