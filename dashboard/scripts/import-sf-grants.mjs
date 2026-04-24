/**
 * Import all Opportunities with RecordType = "Grant" from Salesforce into Supabase.
 * Mirrors the full Opportunity schema 1:1 (SF field names → snake_case columns).
 * Idempotent — upserts on the SF Id (primary key).
 *
 * Usage:
 *   node scripts/import-sf-grants.mjs [--dry-run]
 *
 * Auth priority (same as src/lib/salesforce.ts):
 *   1. SF_USERNAME + SF_PASSWORD (+ SF_SECURITY_TOKEN) — SOAP login
 *   2. sf CLI fallback via SF_ORG_ALIAS (default "prod")
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";
import jsforce from "jsforce";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dashboardDir = path.resolve(__dirname, "..");

// Load .env.local (handles keys with trailing whitespace in the env file)
const envText = fs.readFileSync(path.join(dashboardDir, ".env.local"), "utf8");
const envMap = new Map();
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/);
  if (m) envMap.set(m[1], m[2]);
}
const getEnv = (k) => envMap.get(k) || process.env[k];

const GRANT_RECORD_TYPE_DEV_NAME = "Grant";
const DRY_RUN = process.argv.includes("--dry-run");

function snake(name) {
  let s = name.replace(/__/g, "_");
  s = s.replace(/([a-z0-9])([A-Z])/g, "$1_$2");
  s = s.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2");
  return s.toLowerCase();
}

async function buildSfConnection() {
  const loginUrl = getEnv("SF_LOGIN_URL") || "https://login.salesforce.com";
  const username = getEnv("SF_USERNAME");
  const password = getEnv("SF_PASSWORD");
  const securityToken = getEnv("SF_SECURITY_TOKEN") || "";
  if (username && password) {
    const conn = new jsforce.Connection({ loginUrl, version: "62.0" });
    await conn.login(username, password + securityToken);
    return conn;
  }
  const alias = getEnv("SF_ORG_ALIAS") || "prod";
  const raw = execSync(`sf org display --target-org ${alias} --json`, { encoding: "utf-8", timeout: 30000 });
  const parsed = JSON.parse(raw).result;
  return new jsforce.Connection({ instanceUrl: parsed.instanceUrl, accessToken: parsed.accessToken, version: "62.0" });
}

const sfUrl = getEnv("SUPABASE_URL");
const sbKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");
if (!sfUrl || !sbKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}
const sb = createClient(sfUrl, sbKey, { auth: { persistSession: false } });

const sf = await buildSfConnection();
console.log(`SF instance: ${sf.instanceUrl}`);

// Find the Grant record type
const rt = await sf.query(
  `SELECT Id FROM RecordType WHERE SobjectType = 'Opportunity' AND DeveloperName = '${GRANT_RECORD_TYPE_DEV_NAME}' LIMIT 1`
);
if (rt.records.length === 0) throw new Error(`Record type '${GRANT_RECORD_TYPE_DEV_NAME}' not found`);
const recordTypeId = rt.records[0].Id;
console.log(`Grant record type: ${recordTypeId}`);

// Describe Opportunity to get queryable field list + type info
const describe = await sf.sobject("Opportunity").describe();
const fieldList = describe.fields.filter((f) => f.type !== "address" && f.type !== "location" && f.name !== "CompoundName");
const fieldNames = fieldList.map((f) => f.name);
console.log(`Querying ${fieldNames.length} fields on Opportunity`);

// Query all Grant opportunities (autoFetch handles the 2000-record paging)
const soql = `SELECT ${fieldNames.join(",")} FROM Opportunity WHERE RecordTypeId = '${recordTypeId}'`;
const result = await sf.query(soql, { autoFetch: true, maxFetch: 100000 });
console.log(`Fetched ${result.records.length} records from Salesforce`);

// Map SF → snake_case rows
const rows = result.records.map((rec) => {
  const row = {};
  for (const f of fieldList) {
    let v = rec[f.name];
    if (v === undefined) v = null;
    row[snake(f.name)] = v;
  }
  row.synced_at = new Date().toISOString();
  return row;
});

if (DRY_RUN) {
  console.log(`[dry-run] Would upsert ${rows.length} rows. First row id=${rows[0]?.id} name=${rows[0]?.name}`);
  process.exit(0);
}

const { data, error } = await sb.from("grants").upsert(rows, { onConflict: "id" }).select("id");
if (error) {
  console.error("Upsert error:", JSON.stringify(error, null, 2));
  process.exit(1);
}
console.log(`Upserted ${data.length} rows`);

const { count } = await sb.from("grants").select("id", { count: "exact", head: true });
console.log(`Total grants in DB: ${count}`);
