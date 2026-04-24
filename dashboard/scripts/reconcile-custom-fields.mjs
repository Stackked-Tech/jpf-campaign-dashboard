/**
 * Reconciles grants-table columns against field_definitions rows.
 * Intended to run after `git pull` in a dev environment, or on production
 * if the DB and field_definitions ever drift.
 *
 * Usage: node scripts/reconcile-custom-fields.mjs
 *
 * Idempotent: adds any missing columns, leaves existing alone, never drops.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dashboardDir = path.resolve(__dirname, "..");

const envText = fs.readFileSync(path.join(dashboardDir, ".env.local"), "utf8");
const envMap = new Map();
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/);
  if (m) envMap.set(m[1], m[2]);
}
const url = envMap.get("SUPABASE_URL");
const key = envMap.get("SUPABASE_SERVICE_ROLE_KEY");
if (!url || !key) {
  console.error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required");
  process.exit(1);
}

const sb = createClient(url, key, { auth: { persistSession: false } });

const { data, error } = await sb.rpc("reconcile_custom_fields");
if (error) {
  console.error("Reconcile error:", error);
  process.exit(1);
}

const rows = data ?? [];
const added = rows.filter((r) => r.status === "added");
const existed = rows.filter((r) => r.status === "exists");

console.log(`Reconciled ${rows.length} field_definitions:`);
console.log(`  Added: ${added.length}${added.length ? "  (" + added.map((r) => r.key).join(", ") + ")" : ""}`);
console.log(`  Already existed: ${existed.length}`);
