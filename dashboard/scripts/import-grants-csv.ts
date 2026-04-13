import fs from "node:fs";
import path from "node:path";
import Papa from "papaparse";
import { createClient } from "@supabase/supabase-js";
import { Connection } from "jsforce";
import { execSync } from "node:child_process";

type Status = "pending" | "awarded" | "received" | "open" | "declined";

interface ParsedRow {
  funder_name: string;
  notes: string | null;
  status: Status;
  declined_date: string | null;
  restriction: "restricted" | "unrestricted" | null;
  program_name: string | null;
  request_amount: number | null;
  submission_date: string | null;
  award_date: string | null;
  amount_awarded: number | null;
  amount_received: number | null;
  receipt_date: string | null;
  acknowledged_date: string | null;
  grant_closes_date: string | null;
  report_requirement: string | null;
}

function parseMoney(s: string | undefined): number | null {
  if (!s) return null;
  const cleaned = s.replace(/[$,\s]/g, "");
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function parseDate(s: string | undefined): string | null {
  if (!s || !s.trim()) return null;
  const m = s.trim().match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})$/);
  if (!m) return null;
  const [, mo, d, y] = m;
  const year = y.length === 2 ? `20${y}` : y;
  return `${year}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

function parseStatus(s: string | undefined): { status: Status | null; declined_date: string | null } {
  if (!s) return { status: null, declined_date: null };
  const lower = s.toLowerCase().trim();
  if (lower.startsWith("declined")) {
    const dateMatch = s.match(/(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})/);
    return {
      status: "declined",
      declined_date: dateMatch ? parseDate(dateMatch[0]) : null,
    };
  }
  if (lower === "pending") return { status: "pending", declined_date: null };
  if (lower === "awarded") return { status: "awarded", declined_date: null };
  if (lower === "received") return { status: "received", declined_date: null };
  if (lower === "open") return { status: "open", declined_date: null };
  return { status: null, declined_date: null };
}

function parseProgram(s: string | undefined): { restriction: ParsedRow["restriction"]; program_name: string | null } {
  if (!s || !s.trim()) return { restriction: null, program_name: null };
  const lower = s.toLowerCase();
  let restriction: ParsedRow["restriction"] = null;
  if (lower.includes("unrestricted") || lower.includes("gen. support") || lower.includes("general support")) {
    restriction = "unrestricted";
  } else if (lower.includes("restricted")) {
    restriction = "restricted";
  }
  const parts = s.split(/[;:]/);
  const programPart = parts.length > 1 ? parts.slice(1).join(";").trim() : (restriction ? null : s.trim());
  return { restriction, program_name: programPart || null };
}

function rowLooksLikeHeaderOrTotal(row: Record<string, string>): boolean {
  const funder = (row["Funder"] ?? "").toUpperCase();
  return (
    !row["Funder"] ||
    funder.startsWith("TOTAL") ||
    funder.startsWith("AWARDED GRANTS") ||
    funder.startsWith("CORPORATE SPONSOR GRANTS") ||
    funder.startsWith("PRIVATE FOUNDATION GRANTS") ||
    funder.startsWith("PENDING PROPOSALS") ||
    funder.startsWith("OPEN GRANTS") ||
    funder.startsWith("DECLINED REQUESTS") ||
    funder.startsWith("GREEN =") ||
    funder.startsWith("YELLOW =") ||
    funder.startsWith("PINK =") ||
    funder.startsWith("GRAY =")
  );
}

function parseRow(raw: Record<string, string>): ParsedRow | null {
  if (rowLooksLikeHeaderOrTotal(raw)) return null;
  const { status, declined_date } = parseStatus(raw["Status"]);
  if (!status) return null;
  const { restriction, program_name } = parseProgram(raw["Program"]);
  return {
    funder_name: raw["Funder"].trim(),
    notes: raw["Notes"]?.trim() || null,
    status,
    declined_date,
    restriction,
    program_name,
    request_amount: parseMoney(raw[" Request Amount "]),
    submission_date: parseDate(raw[" Submission Date "]),
    award_date: parseDate(raw[" Award Date "]),
    amount_awarded: status === "awarded" ? parseMoney(raw[" Amount Awarded / Received "]) : null,
    amount_received: status === "received" ? parseMoney(raw[" Amount Awarded / Received "]) : null,
    receipt_date: parseDate(raw["Receipt Date"]),
    acknowledged_date: parseDate(raw["Acknowledged"]),
    grant_closes_date: parseDate(raw["Grant closes"]),
    report_requirement: raw["Report Requirement? Scheduled?"]?.trim() || null,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const csvPath = args.find((a) => !a.startsWith("--"));
  const dryRun = args.includes("--dry-run");
  if (!csvPath) {
    console.error("usage: tsx scripts/import-grants-csv.ts <path.csv> [--dry-run]");
    process.exit(1);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
    process.exit(1);
  }
  const sb = createClient(url, key, { auth: { persistSession: false } });

  const fullText = fs.readFileSync(path.resolve(csvPath), "utf8");
  // First row is a sheet title ("2024-2025 Jobs Partnership..."); real headers are on row 2.
  const lines = fullText.split(/\r?\n/);
  const headerLine = lines.findIndex((l) => l.startsWith("Funder,"));
  const text = headerLine >= 0 ? lines.slice(headerLine).join("\n") : fullText;
  const parsed = Papa.parse<Record<string, string>>(text, { header: true, skipEmptyLines: true });
  const rows = (parsed.data.map(parseRow).filter(Boolean)) as ParsedRow[];

  const active = rows.filter((r) => r.status !== "declined");
  console.log(`Parsed ${rows.length} rows, ${active.length} active rows`);

  const { data: existing } = await sb.from("grants").select("funder_name, submission_date, request_amount, status");
  const existingKey = (r: { funder_name: string; submission_date: string | null; request_amount: number | null; status: string }) =>
    `${r.funder_name}|${r.submission_date ?? ""}|${r.request_amount ?? ""}|${r.status}`;
  const existingSet = new Set((existing ?? []).map(existingKey));

  let inserted = 0;
  let skipped = 0;
  for (const r of active) {
    if (existingSet.has(existingKey({ ...r }))) { skipped++; continue; }
    if (dryRun) {
      console.log(`[dry-run] insert ${r.funder_name} (${r.status})`);
      inserted++;
      continue;
    }
    const { error } = await sb.from("grants").insert({
      ...r,
      created_by: "csv_import",
      custom_fields: {},
    });
    if (error) console.error(`Failed ${r.funder_name}: ${error.message}`);
    else inserted++;
  }
  console.log(`Inserted: ${inserted}, skipped (dupes): ${skipped}`);

  console.log("\nLinking to SF Opportunities...");
  const sfConn = await buildSfConnection();
  const { data: fresh } = await sb.from("grants").select("id, funder_name, amount_awarded, amount_received, award_date")
    .in("status", ["awarded", "received", "open"]).is("sf_opportunity_id", null);
  let linked = 0;
  for (const g of fresh ?? []) {
    const amount = g.amount_awarded ?? g.amount_received;
    if (!amount || !g.award_date) continue;
    const escaped = g.funder_name.replace(/'/g, "\\'");
    const q = `SELECT Id, Name, Amount, CloseDate FROM Opportunity WHERE Name LIKE '%${escaped}%' AND CloseDate = ${g.award_date} LIMIT 5`;
    const res = await sfConn.query<{ Id: string; Amount: number | null }>(q);
    const match = res.records.find((o) => Math.abs((o.Amount ?? 0) - amount) < 0.01);
    if (match) {
      if (!dryRun) await sb.from("grants").update({ sf_opportunity_id: match.Id }).eq("id", g.id);
      linked++;
    }
  }
  console.log(`SF-linked: ${linked}`);
}

async function buildSfConnection(): Promise<Connection> {
  const loginUrl = process.env.SF_LOGIN_URL || "https://login.salesforce.com";
  const username = process.env.SF_USERNAME;
  const password = process.env.SF_PASSWORD;
  const securityToken = process.env.SF_SECURITY_TOKEN || "";
  if (username && password) {
    const conn = new Connection({ loginUrl, version: "62.0" });
    await conn.login(username, password + securityToken);
    return conn;
  }
  const alias = process.env.SF_ORG_ALIAS || "prod";
  const raw = execSync(`sf org display --target-org ${alias} --json`, { encoding: "utf-8", timeout: 30000 });
  const parsed = JSON.parse(raw).result;
  return new Connection({ instanceUrl: parsed.instanceUrl, accessToken: parsed.accessToken, version: "62.0" });
}

main().catch((e) => { console.error(e); process.exit(1); });
