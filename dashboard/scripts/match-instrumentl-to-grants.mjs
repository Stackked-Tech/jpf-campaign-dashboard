/**
 * Cross-check Instrumentl opportunities against SF grants (Opportunity mirror).
 * Fetches Account.Name from SF for all grant.account_id's, then fuzzy-matches
 * against instrumentl_opportunities.account_name and opportunity_name.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";
import jsforce from "jsforce";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dashboardDir = path.resolve(__dirname, "..");
const envText = fs.readFileSync(path.join(dashboardDir, ".env.local"), "utf8");
const envMap = new Map();
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/);
  if (m) envMap.set(m[1], m[2]);
}

const sb = createClient(envMap.get("SUPABASE_URL"), envMap.get("SUPABASE_SERVICE_ROLE_KEY"), {
  auth: { persistSession: false },
});

async function buildSfConnection() {
  const loginUrl = envMap.get("SF_LOGIN_URL") || "https://login.salesforce.com";
  const username = envMap.get("SF_USERNAME");
  const password = envMap.get("SF_PASSWORD");
  const securityToken = envMap.get("SF_SECURITY_TOKEN") || "";
  if (username && password) {
    const conn = new jsforce.Connection({ loginUrl, version: "62.0" });
    await conn.login(username, password + securityToken);
    return conn;
  }
  const alias = envMap.get("SF_ORG_ALIAS") || "prod";
  const raw = execSync(`sf org display --target-org ${alias} --json`, { encoding: "utf-8", timeout: 30000 });
  const parsed = JSON.parse(raw).result;
  return new jsforce.Connection({ instanceUrl: parsed.instanceUrl, accessToken: parsed.accessToken, version: "62.0" });
}

// Normalize: lowercase, strip punctuation/ellipsis, collapse whitespace
function norm(s) {
  if (!s) return "";
  return s
    .toLowerCase()
    .replace(/\.{2,}$/, "")
    .replace(/[.,'"&()\/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Generic words that appear in almost every funder name — not distinctive signal
const GENERIC = new Set([
  "the", "of", "and", "a", "an", "for", "to", "in", "on", "by", "with",
  "foundation", "fund", "trust", "charitable", "inc", "llc", "ltd", "co",
  "company", "corp", "corporation", "incorporated", "organization", "organisation",
  "family", "group", "grants", "grant", "program", "giving", "community",
  "gifts", "donations", "services", "america", "american", "international",
]);

function distinctiveTokens(s) {
  // Distinctive tokens = words ≥ 3 chars, not generic
  return new Set(
    norm(s)
      .split(" ")
      .filter((t) => t.length >= 3 && !GENERIC.has(t))
  );
}

function allTokens(s) {
  return new Set(
    norm(s).split(" ").filter((t) => t.length >= 2)
  );
}

// Match score: F1 between Instrumentl distinctive tokens and SF distinctive tokens,
// using distinctive tokens from both account+opportunity names on each side.
function matchInfo(instAccName, instOppName, sfAccName, sfOppName) {
  const iSet = new Set([...distinctiveTokens(instAccName), ...distinctiveTokens(instOppName)]);
  const sSet = new Set([...distinctiveTokens(sfAccName), ...distinctiveTokens(sfOppName)]);
  if (iSet.size === 0 || sSet.size === 0) return { f1: 0, hits: 0, iTotal: iSet.size, sTotal: sSet.size, matched: [] };
  const matched = [];
  for (const t of iSet) if (sSet.has(t)) matched.push(t);
  const hits = matched.length;
  if (hits === 0) return { f1: 0, hits: 0, iTotal: iSet.size, sTotal: sSet.size, matched: [] };
  const precision = hits / iSet.size;
  const recall = hits / sSet.size;
  const f1 = (2 * precision * recall) / (precision + recall);
  return { f1, hits, iTotal: iSet.size, sTotal: sSet.size, matched };
}

async function main() {
  // 1. Query ALL SF Opportunities (any record type) so we can see Instrumentl rows that are
  // tracked in SF under Donation / Major Gift / Matching Gift record types, not only Grant.
  console.log("Querying ALL SF Opportunities + Account names...");
  const sf = await buildSfConnection();
  const q = `SELECT Id, Name, StageName, Amount, CloseDate, AccountId, Account.Name, RecordType.Name FROM Opportunity`;
  const res = await sf.query(q, { autoFetch: true, maxFetch: 200000 });
  console.log(`Loaded ${res.records.length} SF opportunities (all record types)`);
  const grantsEnriched = res.records.map((o) => ({
    id: o.Id,
    name: o.Name,
    account_id: o.AccountId,
    account_name: o.Account?.Name || null,
    amount: o.Amount,
    close_date: o.CloseDate,
    stage_name: o.StageName,
    record_type: o.RecordType?.Name || null,
  }));

  // 3. Load Instrumentl opportunities
  const { data: inst } = await sb
    .from("instrumentl_opportunities")
    .select("id, opportunity_name, account_name, status, amount, internal_deadline, deadline");
  console.log(`Loaded ${inst.length} Instrumentl opportunities`);

  // 4. For each Instrumentl row, find the BEST SF grant by F1 score on distinctive tokens
  const matches = [];
  for (const i of inst) {
    let best = null;
    let bestInfo = { f1: 0 };
    for (const g of grantsEnriched) {
      const info = matchInfo(i.account_name, i.opportunity_name, g.account_name || "", g.name || "");
      if (info.f1 > bestInfo.f1) {
        bestInfo = info;
        best = g;
      }
    }
    matches.push({ instrumentl: i, grant: best, info: bestInfo });
  }

  // Thresholds: confident = F1 ≥ 0.5, possible = 0 < F1 < 0.5, none = 0
  const confident = matches.filter((m) => m.info.f1 >= 0.5);
  const possible = matches.filter((m) => m.info.f1 > 0 && m.info.f1 < 0.5);
  const none = matches.filter((m) => m.info.f1 === 0);

  console.log(`\n=== Match summary ===`);
  console.log(`Confident  (F1 ≥ 0.50): ${confident.length}`);
  console.log(`Possible   (0 < F1 < 0.50): ${possible.length}`);
  console.log(`No match   (F1 = 0, Instrumentl-only): ${none.length}`);

  const fmt = (m) =>
    `F1=${m.info.f1.toFixed(2)} [${m.grant?.record_type || "?"}] ` +
    `"${m.instrumentl.account_name}" → "${m.grant?.account_name || "-"}"  (on: ${m.info.matched.join(", ")})`;

  console.log(`\n--- Confident matches (likely same pursuit) ---`);
  confident.forEach((m) => console.log(fmt(m)));

  console.log(`\n--- Possible matches (review — share 1+ token but may be coincidence) ---`);
  possible.forEach((m) => console.log(fmt(m)));

  console.log(`\n--- Instrumentl rows with NO match in SF ---`);
  none.forEach((m) =>
    console.log(
      `"${m.instrumentl.account_name}"  |  ${m.instrumentl.opportunity_name.slice(0, 60)}`
    )
  );

  // 6. SF grants not matched by any confident Instrumentl row
  const matchedSfIds = new Set(confident.map((m) => m.grant.id));
  const unmatchedSf = grantsEnriched.filter((g) => !matchedSfIds.has(g.id));
  console.log(`\n--- SF grants with no confident Instrumentl match (${unmatchedSf.length}) ---`);
  unmatchedSf.forEach((g) =>
    console.log(`  [${g.stage_name}] ${g.account_name} | ${g.name.slice(0, 70)}`)
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
