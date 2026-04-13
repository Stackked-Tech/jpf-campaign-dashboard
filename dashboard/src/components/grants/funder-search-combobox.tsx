"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

interface Hit { id: string; name: string; type: string | null; }
interface Props {
  value: { sf_account_id: string | null; funder_name: string } | null;
  onChange: (v: { sf_account_id: string | null; funder_name: string }) => void;
}

export function FunderSearchCombobox({ value, onChange }: Props) {
  const [q, setQ] = useState(value?.funder_name ?? "");
  const [hits, setHits] = useState<Hit[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (q.trim().length < 2) { setHits([]); return; }
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/grants/funder-search?q=${encodeURIComponent(q)}`);
        const json = await res.json();
        setHits(json.results ?? []);
      } finally { setLoading(false); }
    }, 250);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [q]);

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search Salesforce Accounts..."
          className="flex-1 bg-transparent text-sm focus:outline-none"
        />
      </div>
      {open && q.trim().length >= 2 && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-border bg-card shadow-lg max-h-64 overflow-y-auto">
          {loading && <div className="px-4 py-3 text-sm text-muted-foreground">Searching…</div>}
          {!loading && hits.length === 0 && (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              No matches. Use the option below to proceed with a free-text funder.
            </div>
          )}
          {hits.map((h) => (
            <button key={h.id} type="button" onClick={() => {
              onChange({ sf_account_id: h.id, funder_name: h.name });
              setQ(h.name); setOpen(false);
            }} className="w-full text-left px-4 py-2 hover:bg-muted">
              <div className="text-sm font-medium">{h.name}</div>
              {h.type && <div className="text-xs text-muted-foreground">{h.type}</div>}
            </button>
          ))}
          <button type="button" onClick={() => {
            onChange({ sf_account_id: null, funder_name: q.trim() });
            setOpen(false);
          }} className="w-full text-left px-4 py-2 border-t border-border text-sm text-primary hover:bg-primary/5">
            Use &quot;{q.trim()}&quot; as free-text funder (not linked to SF yet)
          </button>
        </div>
      )}
      {value?.sf_account_id && (
        <p className="mt-1 text-xs text-muted-foreground">Linked to SF Account {value.sf_account_id}</p>
      )}
    </div>
  );
}
