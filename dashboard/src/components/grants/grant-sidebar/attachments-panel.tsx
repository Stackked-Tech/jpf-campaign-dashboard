"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Paperclip, Upload, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GrantAttachment } from "@/lib/grants/types";

export function AttachmentsPanel({
  grantId,
  attachments: initialAttachments,
}: {
  grantId: string;
  attachments: GrantAttachment[];
}) {
  const router = useRouter();
  const [attachments, setAttachments] = useState(initialAttachments);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch(`/api/grants/${grantId}/attachments`, {
        method: "POST",
        body: form,
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error ?? "Upload failed");
      setAttachments((prev) => [body.attachment as GrantAttachment, ...prev]);
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const open = async (att: GrantAttachment) => {
    const res = await fetch(`/api/grants/${grantId}/attachments/${att.id}`);
    const body = await res.json();
    if (body.url) window.open(body.url, "_blank");
  };

  const remove = async (att: GrantAttachment) => {
    if (!confirm(`Delete ${att.filename}?`)) return;
    setAttachments((prev) => prev.filter((a) => a.id !== att.id));
    await fetch(`/api/grants/${grantId}/attachments/${att.id}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Paperclip className="h-4 w-4 text-slate-500" />
          <h3 className="text-sm font-semibold">Files</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{attachments.length}</span>
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="text-slate-500 hover:text-foreground disabled:opacity-50"
          >
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void upload(file);
        }}
      />

      {error && (
        <div className="mb-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded px-2 py-1">
          {error}
        </div>
      )}

      {attachments.length === 0 ? (
        <p className="text-xs text-muted-foreground italic py-3 text-center">
          No files uploaded
        </p>
      ) : (
        <ul className="space-y-1">
          {attachments.map((a) => (
            <li
              key={a.id}
              className={cn(
                "group flex items-center gap-2 text-xs px-1.5 py-1.5 rounded",
                "hover:bg-slate-50 cursor-pointer"
              )}
            >
              <Paperclip className="h-3 w-3 text-slate-400 shrink-0" />
              <button
                onClick={() => void open(a)}
                className="flex-1 min-w-0 truncate text-left hover:underline"
                title={a.filename}
              >
                {a.filename}
              </button>
              <span className="text-[10px] text-muted-foreground shrink-0">
                {formatBytes(a.size_bytes)}
              </span>
              <button
                onClick={() => void remove(a)}
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

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}
