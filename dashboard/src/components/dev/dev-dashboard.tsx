"use client";

import { useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  LabelList,
} from "recharts";
import {
  Mail,
  MessageCircle,
  Phone,
  Calendar,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import type { ActivityRecord, CallRecord, MeetingRecord } from "@/lib/queries/activities";
import type { DevPayment } from "@/lib/queries/dev-payments";
import { formatCurrency } from "@/lib/utils";
import { DetailDrawer, type DrawerData } from "@/components/dev/detail-drawer";

// ── Brand palette ──────────────────────────────────

const COLORS = {
  primary: "#1F98EA",
  secondary: "#14B8A6",
  tertiary: "#8B5CF6",
  quaternary: "#F59E0B",
  muted: "#94A3B8",
};

const ACCOUNT_TYPE_COLORS: Record<string, string> = {
  Foundation: "#1F98EA",
  Corporate: "#14B8A6",
  Church: "#8B5CF6",
  Individual: "#F59E0B",
  Government: "#EF4444",
  Other: "#94A3B8",
};

interface DevDashboardProps {
  emails: ActivityRecord[];
  calls: CallRecord[];
  meetings: MeetingRecord[];
  payments: DevPayment[];
  instanceUrl: string;
}

// ── Helpers ──────────────────────────────────────

function getLastWeekRange(): { start: Date; end: Date } {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const lastSunday = new Date(now);
  lastSunday.setDate(now.getDate() - dayOfWeek);
  lastSunday.setHours(23, 59, 59, 999);
  const lastMonday = new Date(lastSunday);
  lastMonday.setDate(lastSunday.getDate() - 6);
  lastMonday.setHours(0, 0, 0, 0);
  return { start: lastMonday, end: lastSunday };
}

function getFYMonths(): string[] {
  const now = new Date();
  const fyStartYear = now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
  const months: string[] = [];
  const start = new Date(fyStartYear, 6, 1);
  while (start <= now) {
    months.push(
      start.toLocaleDateString("en-US", { month: "short", year: "2-digit" })
    );
    start.setMonth(start.getMonth() + 1);
  }
  return months;
}

function getMonthKey(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
}

function groupByAssignee<T extends { Owner: { Name: string } }>(
  records: T[]
): { name: string; count: number }[] {
  const map = new Map<string, number>();
  for (const r of records) {
    const name = r.Owner.Name;
    map.set(name, (map.get(name) || 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// ── Shared chart components ──────────────────────

interface ChartTooltipProps {
  active?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: Array<{ name: string; value: number; color: string; dataKey: string | number; payload: any }>;
  label?: string;
  isCurrency?: boolean;
}

function ChartTooltip({ active, payload, label, isCurrency }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-border/60 rounded-xl shadow-lg px-4 py-3 min-w-[150px]">
      <p className="text-[11px] font-semibold text-foreground tracking-tight mb-1.5">{label}</p>
      <div className="space-y-1">
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center justify-between gap-6 text-xs">
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-[3px] shrink-0"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted-foreground">{entry.name}</span>
            </div>
            <span className="font-bold tabular-nums text-foreground">
              {isCurrency ? formatCurrency(entry.value) : entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomLegend({ payload }: { payload?: Array<{ value: string; color: string }> }) {
  if (!payload) return null;
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center mt-3 px-2">
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-[3px] shrink-0"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-[11px] text-muted-foreground font-medium">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

// ── Activity Card ────────────────────────────────

function ActivityCard({
  title,
  total,
  byAssignee,
  color,
  icon: Icon,
  onTotalClick,
  onAssigneeClick,
}: {
  title: string;
  total: number;
  byAssignee: { name: string; count: number }[];
  color: string;
  icon: React.ElementType;
  onTotalClick?: () => void;
  onAssigneeClick?: (name: string) => void;
}) {
  const maxCount = byAssignee[0]?.count || 1;

  return (
    <div className="group relative rounded-2xl bg-white border border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 overflow-hidden">
      {/* Color accent */}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }} />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${color}12` }}
            >
              <Icon className="w-[18px] h-[18px]" style={{ color }} />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-foreground">{title}</p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60 mt-0.5">
                Last week
              </p>
            </div>
          </div>
        </div>

        {/* Total */}
        <button
          onClick={onTotalClick}
          className="flex items-center gap-1.5 group/total mb-4 cursor-pointer"
        >
          <span
            className="text-[40px] leading-none font-bold tracking-tighter transition-opacity group-hover/total:opacity-70"
            style={{ color }}
          >
            {total}
          </span>
          <ArrowUpRight
            className="w-4 h-4 opacity-0 -translate-y-0.5 group-hover/total:opacity-50 group-hover/total:translate-y-0 transition-all duration-200"
            style={{ color }}
          />
        </button>

        {/* Assignee breakdown */}
        <div className="space-y-2">
          {byAssignee.map((a) => {
            const initials = a.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();
            return (
              <button
                key={a.name}
                className="w-full flex items-center gap-2.5 cursor-pointer rounded-lg p-1.5 -mx-1.5 hover:bg-muted/60 transition-colors duration-150 text-left"
                onClick={() => onAssigneeClick?.(a.name)}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 select-none"
                  style={{ backgroundColor: `${color}14`, color }}
                >
                  {initials}
                </div>
                <span className="w-14 truncate text-xs font-medium text-foreground/70">
                  {a.name.split(" ")[0]}
                </span>
                <div className="flex-1 h-[7px] bg-muted/50 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${(a.count / maxCount) * 100}%`,
                      background: `linear-gradient(90deg, ${color}, ${color}AA)`,
                    }}
                  />
                </div>
                <span
                  className="text-xs font-bold tabular-nums w-6 text-right"
                  style={{ color }}
                >
                  {a.count}
                </span>
              </button>
            );
          })}
          {byAssignee.length === 0 && (
            <p className="text-xs text-muted-foreground/50 italic py-3 text-center">
              No activity recorded
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Monthly Trend Chart ──────────────────────────

function MonthlyTrendChart({
  title,
  data,
  color,
  onBarClick,
}: {
  title: string;
  data: { month: string; count: number }[];
  color: string;
  onBarClick?: (month: string) => void;
}) {
  const gradientId = `trend-${color.replace("#", "")}`;

  return (
    <div className="rounded-2xl bg-white border border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 p-5">
      <div className="flex items-center gap-2 mb-5">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: color }}
        />
        <p className="text-[13px] font-semibold text-foreground tracking-tight">{title}</p>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -16 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.85} />
              <stop offset="100%" stopColor={color} stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="var(--color-border, #e2e8f0)"
            strokeOpacity={0.6}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "var(--color-muted-foreground, #64748b)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "var(--color-muted-foreground, #64748b)" }}
            allowDecimals={false}
            width={32}
          />
          <Tooltip
            content={<ChartTooltip />}
            cursor={{ fill: "var(--color-muted, #f1f5f9)" }}
          />
          <Bar
            dataKey="count"
            fill={`url(#${gradientId})`}
            radius={[5, 5, 0, 0]}
            name={title}
            cursor={onBarClick ? "pointer" : undefined}
            onClick={(entry) =>
              onBarClick?.((entry as unknown as { month: string }).month)
            }
            maxBarSize={36}
          >
            <LabelList
              dataKey="count"
              position="top"
              style={{
                fontSize: 10,
                fontWeight: 600,
                fill: "var(--color-muted-foreground, #64748b)",
              }}
              formatter={(v) => (v === 0 ? "" : v)}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── Payment Stacked Chart ────────────────────────

function PaymentStackedChart({
  title,
  data: rawData,
  accountTypes,
  onBarClick,
}: {
  title: string;
  data: Record<string, string | number>[];
  accountTypes: string[];
  onBarClick?: (month: string) => void;
}) {
  // Compute total per month for the top-of-stack label
  const data = rawData.map((d) => {
    let total = 0;
    for (const t of accountTypes) total += (d[t] as number) || 0;
    return { ...d, _total: total };
  });
  return (
    <div className="rounded-2xl bg-white border border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 p-5">
      <p className="text-[13px] font-semibold text-foreground tracking-tight mb-5">{title}</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 16, right: 4, bottom: 0, left: -8 }}>
          <defs>
            {accountTypes.map((type) => {
              const fill = ACCOUNT_TYPE_COLORS[type] || COLORS.muted;
              return (
                <linearGradient
                  key={type}
                  id={`pay-${type.replace(/\s/g, "")}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={fill} stopOpacity={0.85} />
                  <stop offset="100%" stopColor={fill} stopOpacity={0.5} />
                </linearGradient>
              );
            })}
          </defs>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="var(--color-border, #e2e8f0)"
            strokeOpacity={0.6}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "var(--color-muted-foreground, #64748b)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "var(--color-muted-foreground, #64748b)" }}
            tickFormatter={(v: number) =>
              v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`
            }
            width={44}
          />
          <Tooltip
            content={<ChartTooltip isCurrency />}
            cursor={{ fill: "var(--color-muted, #f1f5f9)" }}
          />
          <Legend content={<CustomLegend />} />
          {accountTypes.map((type, idx) => (
            <Bar
              key={type}
              dataKey={type}
              stackId="payments"
              fill={`url(#pay-${type.replace(/\s/g, "")})`}
              radius={
                idx === accountTypes.length - 1
                  ? [5, 5, 0, 0]
                  : [0, 0, 0, 0]
              }
              name={type}
              cursor={onBarClick ? "pointer" : undefined}
              onClick={(entry) =>
                onBarClick?.((entry as unknown as { month: string }).month)
              }
            >
              {idx === accountTypes.length - 1 && (
                <LabelList
                  dataKey="_total"
                  position="top"
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    fill: "var(--color-muted-foreground, #64748b)",
                  }}
                  formatter={(v) => {
                    const n = Number(v);
                    return n === 0 ? "" : n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;
                  }}
                />
              )}
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── Payment Total Chart ──────────────────────────

function PaymentTotalChart({
  data,
  onBarClick,
}: {
  data: { month: string; total: number }[];
  onBarClick?: (month: string) => void;
}) {
  return (
    <div className="rounded-2xl bg-white border border-border/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300 p-5">
      <p className="text-[13px] font-semibold text-foreground tracking-tight mb-5">
        Monthly Payment Totals
      </p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -8 }}>
          <defs>
            <linearGradient id="payTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.85} />
              <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke="var(--color-border, #e2e8f0)"
            strokeOpacity={0.6}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "var(--color-muted-foreground, #64748b)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 10, fill: "var(--color-muted-foreground, #64748b)" }}
            tickFormatter={(v: number) =>
              v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`
            }
            width={44}
          />
          <Tooltip
            content={<ChartTooltip isCurrency />}
            cursor={{ fill: "var(--color-muted, #f1f5f9)" }}
          />
          <Bar
            dataKey="total"
            fill="url(#payTotal)"
            radius={[5, 5, 0, 0]}
            name="Total"
            cursor={onBarClick ? "pointer" : undefined}
            onClick={(entry) =>
              onBarClick?.((entry as unknown as { month: string }).month)
            }
            maxBarSize={36}
          >
            <LabelList
              dataKey="total"
              position="top"
              style={{
                fontSize: 9,
                fontWeight: 600,
                fill: "var(--color-muted-foreground, #64748b)",
              }}
              formatter={(v) => {
                const n = Number(v);
                return n === 0 ? "" : n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ── Section Header ───────────────────────────────

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5">
      <h2 className="text-base font-semibold text-foreground tracking-tight">{title}</h2>
      {subtitle && (
        <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
      )}
    </div>
  );
}

// ── Main Dashboard ───────────────────────────────

export function DevDashboard({
  emails,
  calls,
  meetings,
  payments,
  instanceUrl,
}: DevDashboardProps) {
  const [drawerData, setDrawerData] = useState<DrawerData | null>(null);
  const { start: lwStart, end: lwEnd } = useMemo(() => getLastWeekRange(), []);
  const fyMonths = useMemo(() => getFYMonths(), []);

  // ── Last week filters ──
  const lastWeekEmails = useMemo(
    () =>
      emails.filter((e) => {
        const d = new Date(e.ActivityDate);
        return d >= lwStart && d <= lwEnd;
      }),
    [emails, lwStart, lwEnd]
  );

  const lastWeekCalls = useMemo(
    () =>
      calls.filter((c) => {
        const d = new Date(c.ActivityDate);
        return d >= lwStart && d <= lwEnd;
      }),
    [calls, lwStart, lwEnd]
  );

  const lastWeekConversations = useMemo(
    () => lastWeekCalls.filter((c) => c.Disposition__c === "Had Conversation"),
    [lastWeekCalls]
  );

  const lastWeekMeetings = useMemo(
    () =>
      meetings.filter((m) => {
        const d = new Date(m.ActivityDate);
        return d >= lwStart && d <= lwEnd;
      }),
    [meetings, lwStart, lwEnd]
  );

  // ── Monthly trends ──
  const emailsByMonth = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of fyMonths) map.set(m, 0);
    for (const e of emails) {
      const key = getMonthKey(e.ActivityDate);
      if (map.has(key)) map.set(key, map.get(key)! + 1);
    }
    return fyMonths.map((month) => ({ month, count: map.get(month) || 0 }));
  }, [emails, fyMonths]);

  const callsByMonth = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of fyMonths) map.set(m, 0);
    for (const c of calls) {
      const key = getMonthKey(c.ActivityDate);
      if (map.has(key)) map.set(key, map.get(key)! + 1);
    }
    return fyMonths.map((month) => ({ month, count: map.get(month) || 0 }));
  }, [calls, fyMonths]);

  const meetingsByMonth = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of fyMonths) map.set(m, 0);
    for (const mt of meetings) {
      const key = getMonthKey(mt.ActivityDate);
      if (map.has(key)) map.set(key, map.get(key)! + 1);
    }
    return fyMonths.map((month) => ({ month, count: map.get(month) || 0 }));
  }, [meetings, fyMonths]);

  // ── Payments ──
  // Keep top 4 account types by total amount; merge the rest into "Other"
  const MAX_ACCOUNT_TYPES = 4;

  const accountTypes = useMemo(() => {
    const totals = new Map<string, number>();
    for (const p of payments) {
      const type = p.npe01__Opportunity__r?.Account?.Type || "Other";
      totals.set(type, (totals.get(type) || 0) + (p.npe01__Payment_Amount__c || 0));
    }
    const sorted = Array.from(totals.entries()).sort((a, b) => b[1] - a[1]);
    const top = sorted.slice(0, MAX_ACCOUNT_TYPES).map(([t]) => t);
    const hasOther = sorted.length > MAX_ACCOUNT_TYPES;
    return hasOther ? [...top, "Other"] : top;
  }, [payments]);

  const topTypeSet = useMemo(
    () => new Set(accountTypes.filter((t) => t !== "Other")),
    [accountTypes]
  );

  const normalizeType = (raw: string | null | undefined) => {
    const type = raw || "Other";
    return topTypeSet.has(type) ? type : "Other";
  };

  const paymentsByMonthStacked = useMemo(() => {
    const map = new Map<string, Record<string, number>>();
    for (const m of fyMonths) {
      const entry: Record<string, number> = {};
      for (const t of accountTypes) entry[t] = 0;
      map.set(m, entry);
    }
    for (const p of payments) {
      if (!p.npe01__Payment_Date__c) continue;
      const key = getMonthKey(p.npe01__Payment_Date__c);
      const bucket = map.get(key);
      if (!bucket) continue;
      const type = normalizeType(p.npe01__Opportunity__r?.Account?.Type);
      bucket[type] = (bucket[type] || 0) + (p.npe01__Payment_Amount__c || 0);
    }
    return fyMonths.map((month) => ({
      month,
      ...map.get(month),
    }));
  }, [payments, fyMonths, accountTypes, normalizeType]);

  const paymentTotals = useMemo(() => {
    const map = new Map<string, number>();
    for (const m of fyMonths) map.set(m, 0);
    for (const p of payments) {
      if (!p.npe01__Payment_Date__c) continue;
      const key = getMonthKey(p.npe01__Payment_Date__c);
      if (map.has(key))
        map.set(key, map.get(key)! + (p.npe01__Payment_Amount__c || 0));
    }
    return fyMonths.map((month) => ({ month, total: map.get(month) || 0 }));
  }, [payments, fyMonths]);

  const fyTotal = useMemo(
    () =>
      payments.reduce((sum, p) => sum + (p.npe01__Payment_Amount__c || 0), 0),
    [payments]
  );

  // ── Labels ──
  const weekLabel = `${lwStart.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })} – ${lwEnd.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })}`;

  // ── Drill-down handlers ──

  const openActivityDrawer = (
    title: string,
    records: (ActivityRecord | CallRecord | MeetingRecord)[]
  ) => setDrawerData({ type: "activity", title, records });

  const openPaymentDrawer = (title: string, records: DevPayment[]) =>
    setDrawerData({ type: "payment", title, records });

  return (
    <div className="space-y-10">
      {/* ── Row 1: Last Week Activity ── */}
      <section>
        <SectionHeader title="Last Week Activity" subtitle={weekLabel} />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <ActivityCard
            title="Emails"
            icon={Mail}
            total={lastWeekEmails.length}
            byAssignee={groupByAssignee(lastWeekEmails)}
            color={COLORS.primary}
            onTotalClick={() =>
              openActivityDrawer(`Emails — ${weekLabel}`, lastWeekEmails)
            }
            onAssigneeClick={(name) =>
              openActivityDrawer(
                `${name} — Emails — ${weekLabel}`,
                lastWeekEmails.filter((r) => r.Owner.Name === name)
              )
            }
          />
          <ActivityCard
            title="Conversations"
            icon={MessageCircle}
            total={lastWeekConversations.length}
            byAssignee={groupByAssignee(lastWeekConversations)}
            color={COLORS.secondary}
            onTotalClick={() =>
              openActivityDrawer(
                `Conversations — ${weekLabel}`,
                lastWeekConversations
              )
            }
            onAssigneeClick={(name) =>
              openActivityDrawer(
                `${name} — Conversations — ${weekLabel}`,
                lastWeekConversations.filter((r) => r.Owner.Name === name)
              )
            }
          />
          <ActivityCard
            title="Calls"
            icon={Phone}
            total={lastWeekCalls.length}
            byAssignee={groupByAssignee(lastWeekCalls)}
            color={COLORS.tertiary}
            onTotalClick={() =>
              openActivityDrawer(`Calls — ${weekLabel}`, lastWeekCalls)
            }
            onAssigneeClick={(name) =>
              openActivityDrawer(
                `${name} — Calls — ${weekLabel}`,
                lastWeekCalls.filter((r) => r.Owner.Name === name)
              )
            }
          />
          <ActivityCard
            title="Meetings"
            icon={Calendar}
            total={lastWeekMeetings.length}
            byAssignee={groupByAssignee(lastWeekMeetings)}
            color={COLORS.quaternary}
            onTotalClick={() =>
              openActivityDrawer(`Meetings — ${weekLabel}`, lastWeekMeetings)
            }
            onAssigneeClick={(name) =>
              openActivityDrawer(
                `${name} — Meetings — ${weekLabel}`,
                lastWeekMeetings.filter((r) => r.Owner.Name === name)
              )
            }
          />
        </div>
      </section>

      {/* ── Row 2: FY Monthly Trends ── */}
      <section>
        <SectionHeader title="Fiscal Year Monthly Trends" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <MonthlyTrendChart
            title="Emails by Month"
            data={emailsByMonth}
            color={COLORS.primary}
            onBarClick={(month) =>
              openActivityDrawer(
                `Emails — ${month}`,
                emails.filter((e) => getMonthKey(e.ActivityDate) === month)
              )
            }
          />
          <MonthlyTrendChart
            title="Calls by Month"
            data={callsByMonth}
            color={COLORS.tertiary}
            onBarClick={(month) =>
              openActivityDrawer(
                `Calls — ${month}`,
                calls.filter((c) => getMonthKey(c.ActivityDate) === month)
              )
            }
          />
          <MonthlyTrendChart
            title="Meetings by Month"
            data={meetingsByMonth}
            color={COLORS.quaternary}
            onBarClick={(month) =>
              openActivityDrawer(
                `Meetings — ${month}`,
                meetings.filter((m) => getMonthKey(m.ActivityDate) === month)
              )
            }
          />
        </div>
      </section>

      {/* ── Row 3: Payments ── */}
      <section>
        <SectionHeader title="Payments" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <PaymentStackedChart
            title="Monthly Payments by Account Type"
            data={paymentsByMonthStacked}
            accountTypes={accountTypes}
            onBarClick={(month) =>
              openPaymentDrawer(
                `Payments — ${month}`,
                payments.filter(
                  (p) =>
                    p.npe01__Payment_Date__c &&
                    getMonthKey(p.npe01__Payment_Date__c) === month
                )
              )
            }
          />
          <PaymentTotalChart
            data={paymentTotals}
            onBarClick={(month) =>
              openPaymentDrawer(
                `Payments — ${month}`,
                payments.filter(
                  (p) =>
                    p.npe01__Payment_Date__c &&
                    getMonthKey(p.npe01__Payment_Date__c) === month
                )
              )
            }
          />

          {/* FY Total — hero card */}
          <button
            className="rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(31,152,234,0.2)] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center relative overflow-hidden text-left"
            style={{
              background: `linear-gradient(135deg, #1F98EA 0%, #1a7bc4 100%)`,
            }}
            onClick={() => openPaymentDrawer("All FY Payments", payments)}
          >
            {/* Decorative shapes */}
            <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/[0.06]" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/[0.04]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/[0.03]" />

            <div className="relative z-10 text-center">
              <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <p className="text-sm font-medium text-white/70 tracking-tight">
                Fiscal Year Total
              </p>
              <p className="mt-1.5 text-4xl font-bold tracking-tighter text-white">
                {formatCurrency(fyTotal)}
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium text-white/50 bg-white/10 rounded-full px-3 py-1">
                <span>View all payments</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </button>
        </div>
      </section>

      <DetailDrawer
        data={drawerData}
        instanceUrl={instanceUrl}
        onClose={() => setDrawerData(null)}
      />
    </div>
  );
}
