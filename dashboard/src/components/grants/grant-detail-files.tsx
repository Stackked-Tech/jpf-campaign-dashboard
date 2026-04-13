"use client";

import { useState } from "react";
import { Download, Trash2, Upload } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { GrantAttachment } from "@/lib/grants/types";

interface Props { grantId: string; role: "admin" | "grants" | "dev" | null; initialAttachments: GrantAttachment[]; }

export function GrantDetailFiles({ grantId, role, initialAttachments }: Props) {
  const [files, setFiles] = useState(initialAttachments);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch(`/api/grants/${grantId}/attachments`, { method: "POST", body: fd });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error ?? "upload failed");
      setFiles((f) => [j.attachment, ...f]);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function remove(fileId: string) {
    if (!confirm("Delete this file? This cannot be undone.")) return;
    const res = await fetch(`/api/grants/${grantId}/attachments/${fileId}`, { method: "DELETE" });
    if (res.ok) setFiles((f) => f.filter((x) => x.id !== fileId));
  }

  return (
    <div className="space-y-3">
      <label className="inline-flex items-center gap-2 btn-pill bg-primary text-primary-foreground text-sm cursor-pointer">
        <Upload className="h-4 w-4" />
        {uploading ? "Uploading…" : "Upload file"}
        <input type="file" onChange={onUpload} className="sr-only"
          accept=".pdf,.docx,.xlsx,.png,.jpg,.jpeg,.doc,.xls" />
      </label>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {files.length === 0 && (
          <li className="px-4 py-6 text-sm text-muted-foreground text-center">No files yet.</li>
        )}
        {files.map((f) => (
          <li key={f.id} className="px-4 py-3 flex items-center gap-3 text-sm">
            <a href={`/api/grants/${grantId}/attachments/${f.id}`} className="flex-1 hover:underline font-medium">
              {f.filename}
            </a>
            <span className="text-xs text-muted-foreground">
              {(f.size_bytes / 1024).toFixed(0)} KB · {formatDate(f.uploaded_at)}
            </span>
            <a href={`/api/grants/${grantId}/attachments/${f.id}`} className="text-muted-foreground hover:text-primary">
              <Download className="h-4 w-4" />
            </a>
            {role === "admin" && (
              <button type="button" onClick={() => remove(f.id)} className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
