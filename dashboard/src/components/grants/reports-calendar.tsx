"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReportCalendarEntry } from "@/lib/grants/reports-calendar";

const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function monthLabel(d: Date): string {
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function isoDay(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function ReportsCalendar({
  reports: initialReports,
  initialMonth,
}: {
  reports: ReportCalendarEntry[];
  initialMonth: string; // YYYY-MM
}) {
  const [monthStr, setMonthStr] = useState(initialMonth);
  const reports = initialReports;
  const [y, m] = monthStr.split("-").map(Number);
  const cursor = new Date(y, m - 1, 1);
  const today = isoDay(new Date());

  const reportsByDay = new Map<string, ReportCalendarEntry[]>();
  for (const r of reports) {
    const arr = reportsByDay.get(r.due_date) ?? [];
    arr.push(r);
    reportsByDay.set(r.due_date, arr);
  }

  const daysInMonth = new Date(y, m, 0).getDate();
  const firstDow = cursor.getDay();

  const cells: Array<{
    date: string | null;
    dayNum: number | null;
  }> = [];
  for (let i = 0; i < firstDow; i++) cells.push({ date: null, dayNum: null });
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ date: dateStr, dayNum: d });
  }
  while (cells.length % 7 !== 0) cells.push({ date: null, dayNum: null });

  const shift = (delta: number) => {
    const next = new Date(y, m - 1 + delta, 1);
    setMonthStr(`${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{monthLabel(cursor)}</h2>
        <div className="flex items-center gap-1">
          <button
            onClick={() => shift(-1)}
            className="p-1.5 rounded hover:bg-slate-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setMonthStr(isoDay(new Date()).slice(0, 7))}
            className="px-2.5 py-1 text-xs rounded hover:bg-slate-100"
          >
            Today
          </button>
          <button
            onClick={() => shift(1)}
            className="p-1.5 rounded hover:bg-slate-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-border rounded-xl overflow-hidden border border-border">
        {DOW.map((d) => (
          <div
            key={d}
            className="bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide"
          >
            {d}
          </div>
        ))}
        {cells.map((c, i) => {
          const isToday = c.date === today;
          const entries = c.date ? reportsByDay.get(c.date) ?? [] : [];
          return (
            <div
              key={i}
              className={cn(
                "bg-card min-h-[110px] p-1.5 text-xs flex flex-col gap-1",
                !c.date && "bg-slate-50/50",
                isToday && "bg-blue-50/40"
              )}
            >
              {c.dayNum != null && (
                <div
                  className={cn(
                    "text-[11px] font-medium",
                    isToday
                      ? "text-blue-700"
                      : "text-muted-foreground"
                  )}
                >
                  {c.dayNum}
                </div>
              )}
              <div className="flex flex-col gap-0.5 overflow-hidden">
                {entries.map((e) => {
                  const isSubmitted = !!e.submitted_date;
                  const isOverdue =
                    !isSubmitted && e.due_date < today;
                  return (
                    <Link
                      key={e.id}
                      href={`/grants/${e.grant_id}`}
                      className={cn(
                        "text-[11px] px-1.5 py-0.5 rounded truncate leading-tight",
                        isSubmitted
                          ? "bg-emerald-100 text-emerald-800 line-through"
                          : isOverdue
                            ? "bg-red-100 text-red-800 font-medium"
                            : "bg-amber-100 text-amber-800"
                      )}
                      title={`${e.funder_name ?? ""} — ${e.name}`}
                    >
                      {e.funder_name ?? e.grant_name ?? "Grant"}: {e.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
