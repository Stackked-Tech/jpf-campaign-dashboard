/**
 * Parse the Instrumentl Opportunities Report PDF into structured records,
 * apply the agreed amount-parsing rules, and upsert into instrumentl_opportunities.
 *
 * Usage:
 *   pdftotext -tsv <input.pdf> <output.tsv>
 *   node scripts/import-instrumentl-pdf.mjs <tsv-file> [--dry-run]
 *
 * Column layout (derived from header on page 1):
 *   NAME      x < 225     (grant name + funder below + owner initials in-line)
 *   DEADLINE  225..340    (primary date, optional "(due X)" sub-date, "Rolling"/"Past Due")
 *   STATUS    340..435    ("Awarded-Closed", "LOI Submitted", etc.)
 *   AMOUNT    435..550    ("Requesting $X", "Up to US $Y", etc.)
 *   NEXT TASK 550..680
 *   NOTES     x >= 680
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dashboardDir = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const DRY_RUN = args.includes("--dry-run");
const tsvPath = args.find((a) => !a.startsWith("--"));
if (!tsvPath) {
  console.error("usage: node scripts/import-instrumentl-pdf.mjs <pdf-tsv> [--dry-run]");
  process.exit(1);
}

// Column x-boundaries (left-edge of each column based on header)
const COL = {
  NAME: [0, 225],
  DEADLINE: [225, 340],
  STATUS: [340, 435],
  AMOUNT: [435, 550],
  NEXT_TASK: [550, 680],
  NOTES: [680, Infinity],
};

function colOf(x) {
  for (const [k, [lo, hi]] of Object.entries(COL)) {
    if (x >= lo && x < hi) return k;
  }
  return null;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTH_FULL = {
  Jan: "01", January: "01",
  Feb: "02", February: "02",
  Mar: "03", March: "03",
  Apr: "04", April: "04",
  May: "05",
  Jun: "06", June: "06",
  Jul: "07", July: "07",
  Aug: "08", August: "08",
  Sep: "09", September: "09",
  Oct: "10", October: "10",
  Nov: "11", November: "11",
  Dec: "12", December: "12",
};

// Parse TSV lines → word records
const tsv = fs.readFileSync(tsvPath, "utf8").split(/\r?\n/).slice(1); // skip header
const words = [];
for (const line of tsv) {
  if (!line.trim()) continue;
  const cols = line.split("\t");
  if (cols[0] !== "5") continue; // level 5 = word
  const text = cols[11];
  if (!text || text.startsWith("###")) continue;
  // TSV columns: level(0) page(1) par(2) block(3) line(4) word(5) left(6) top(7) width(8) height(9) conf(10) text(11)
  words.push({
    page: Number(cols[1]),
    x: Number(cols[6]),
    y: Number(cols[7]),
    h: Number(cols[9]),
    text,
  });
}

// Group words by page, sort within page by y then x
const byPage = new Map();
for (const w of words) {
  if (!byPage.has(w.page)) byPage.set(w.page, []);
  byPage.get(w.page).push(w);
}
for (const arr of byPage.values()) arr.sort((a, b) => a.y - b.y || a.x - b.x);

// Find record boundaries: every record has a STATUS-column word (Awarded/Declined/LOI Submitted/
// Planned/Researching/etc.). Using status as the anchor catches Rolling/Archived records that
// have no month-name deadline, and avoids false-positives from multi-step sub-deadline dates.
const STATUS_WORDS = new Set([
  "Awarded", "Declined", "Planned", "Researching", "LOI", "Application",
]);
function findRecordStarts(pageWords, page) {
  const statusAnchors = [];
  // Page 1 has a header/filter table (Statuses: ..., Status label, etc.) above the first
  // real record. The first record's STATUS word is at y=468; anything above y=440 on page 1
  // is header chrome.
  const minY = page === 1 ? 440 : 0;
  for (const w of pageWords) {
    if (w.y < minY) continue;
    if (w.x >= COL.STATUS[0] && w.x < COL.STATUS[1] && STATUS_WORDS.has(w.text)) {
      if (statusAnchors.length === 0 || w.y - statusAnchors[statusAnchors.length - 1].y > 15) {
        statusAnchors.push(w);
      }
    }
  }
  return statusAnchors;
}

// Extract records per page
const records = [];
for (const [page, pageWords] of [...byPage.entries()].sort((a, b) => a[0] - b[0])) {
  // Skip cover/header content on page 1 (above y=440 which is where first record starts)
  // Actually the first record's primary date (Dec 29, 2025 for Journey For Good) is at y=465.75
  // So on page 1 we still include everything — the month-in-deadline check will filter correctly.

  const starts = findRecordStarts(pageWords, page);
  for (let i = 0; i < starts.length; i++) {
    const startY = starts[i].y - 3;
    const endY = i + 1 < starts.length ? starts[i + 1].y - 3 : Infinity;

    const recWords = pageWords.filter((w) => w.y >= startY && w.y < endY);
    records.push({ page, startY, endY, words: recWords });
  }
}

console.log(`Detected ${records.length} records`);

// For each record, group words into columns
function extractFields(recWords) {
  const buckets = { NAME: [], DEADLINE: [], STATUS: [], AMOUNT: [], NEXT_TASK: [], NOTES: [] };
  for (const w of recWords) {
    const col = colOf(w.x);
    if (col) buckets[col].push(w);
  }
  // Within each bucket, group by y (tolerance ±2), then sort buckets by y
  function joinBucket(wordsInCol) {
    if (wordsInCol.length === 0) return "";
    const lines = [];
    let current = [wordsInCol[0]];
    for (let i = 1; i < wordsInCol.length; i++) {
      if (Math.abs(wordsInCol[i].y - current[0].y) <= 3) {
        current.push(wordsInCol[i]);
      } else {
        lines.push(current);
        current = [wordsInCol[i]];
      }
    }
    lines.push(current);
    return lines
      .map((line) => line.sort((a, b) => a.x - b.x).map((w) => w.text).join(" "))
      .join(" ");
  }
  return {
    name: joinBucket(buckets.NAME),
    deadline: joinBucket(buckets.DEADLINE),
    status: joinBucket(buckets.STATUS),
    amount: joinBucket(buckets.AMOUNT),
    next_task: joinBucket(buckets.NEXT_TASK),
    notes: joinBucket(buckets.NOTES),
  };
}

// ========== Field-specific parsing ==========

// Name column contains: grant name + funder name + owner initials (LS/BM)
// The grant name is before the funder (usually on earlier y-lines); owner appears inline
function splitNameAndAccount(nameStr) {
  if (!nameStr) return { opportunity_name: "", account_name: null, owner: null };
  // Extract owner initials (2-letter all-caps surrounded by spaces)
  let rest = nameStr;
  let owner = null;
  const ownerMatch = rest.match(/\b(LS|BM|JP|NG)\b/);
  if (ownerMatch) {
    owner = ownerMatch[1];
    rest = rest.replace(ownerMatch[0], " ").replace(/\s+/g, " ").trim();
  }
  // The structure after joining wrapped lines with spaces loses the name/account boundary.
  // But the funder line is on a SEPARATE y from the grant name. The join above put them all on one string.
  // We need a different strategy: reparse the NAME bucket keeping y-groups distinct so the grant-name
  // line and the funder-name line remain separable.
  return { owner };
}

function extractNameFunder(recWords) {
  // Split NAME column words into y-groups (lines)
  const nameWords = recWords.filter((w) => colOf(w.x) === "NAME");
  nameWords.sort((a, b) => a.y - b.y || a.x - b.x);
  const lines = [];
  let current = null;
  for (const w of nameWords) {
    if (!current || Math.abs(w.y - current.y) > 3) {
      current = { y: w.y, words: [w] };
      lines.push(current);
    } else {
      current.words.push(w);
    }
  }
  const lineStrs = lines.map((l) => l.words.sort((a, b) => a.x - b.x).map((w) => w.text).join(" "));

  // Owner initials (LS/BM/JP/NG) appear near the end of a line at x ~200; they can be either
  // their own mini-line or joined into the name line (y-diff of ~2px).
  // Skip month/section headers that appear between records ("March 2026", "Rolling Grants",
  // "Archived & Expired Grants") — they get bundled into the preceding record's NAME column.
  const MONTH_HEADER_RE = /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}$/;
  const SECTION_HEADER_RE = /^(Rolling Grants|Archived & Expired Grants)$/;
  let owner = null;
  const contentLines = [];
  for (const l of lineStrs) {
    let trimmed = l.trim();
    if (!trimmed) continue;
    if (MONTH_HEADER_RE.test(trimmed) || SECTION_HEADER_RE.test(trimmed)) continue;
    // Strip trailing or standalone owner initials
    const ownerInline = trimmed.match(/(^|\s)(LS|BM|JP|NG)(\s|$)/);
    if (ownerInline) {
      owner = ownerInline[2];
      trimmed = trimmed.replace(/(^|\s)(LS|BM|JP|NG)(\s|$)/, "$1$3").replace(/\s+/g, " ").trim();
    }
    if (!trimmed) continue;
    contentLines.push(trimmed);
  }

  // Split opportunity_name from account_name by FONT HEIGHT:
  // Grant name words are ~10.8pt; funder name words are ~8.4pt. Use a threshold of 9.5.
  // Fallback to "last line is funder" if heights are uniform (rare).
  if (contentLines.length === 0) return { opportunity_name: "", account_name: null, owner };

  const HEIGHT_THRESHOLD = 9.5;
  const nameLines = [];
  const funderLines = [];
  for (const l of lines) {
    const joined = l.words.sort((a, b) => a.x - b.x).map((w) => w.text).join(" ").trim();
    if (!joined) continue;
    if (MONTH_HEADER_RE.test(joined) || SECTION_HEADER_RE.test(joined)) continue;
    if (/^(LS|BM|JP|NG)$/.test(joined)) continue;
    let stripped = joined.replace(/(^|\s)(LS|BM|JP|NG)(\s|$)/, "$1$3").replace(/\s+/g, " ").trim();
    if (!stripped) continue;
    // A line's height = max height of its words (all words in a line typically share a height)
    const lineHeight = Math.max(...l.words.map((w) => w.h || 0));
    if (lineHeight >= HEIGHT_THRESHOLD) nameLines.push(stripped);
    else funderLines.push(stripped);
  }

  if (nameLines.length === 0 && funderLines.length > 0) {
    // All lines have small height — fallback: last line = funder, rest = name
    return {
      opportunity_name: funderLines.slice(0, -1).join(" "),
      account_name: funderLines[funderLines.length - 1],
      owner,
    };
  }
  return {
    opportunity_name: nameLines.join(" "),
    account_name: funderLines.length > 0 ? funderLines.join(" ") : null,
    owner,
  };
}

// Deadline column: "Dec 31, 2025" or "Dec 29, 2025 (due Jan 15, 2026)" or
// "Feb 27, 2026 (due Mar 15, 2026)" or "Mar 23, 2026 Past Due" or "Dec 31, 2025 Rolling"
// Also multi-step: "Feb 27, 2026 Letter of inquiry Mar 27, 2026 Full proposal"
function parseDeadline(s) {
  // Parse first "Mon DD, YYYY" as primary (internal deadline)
  if (!s) return { internal_deadline: null, deadline: null };
  const primary = s.match(/\b([A-Z][a-z]{2}) (\d{1,2}),? (\d{4})\b/);
  let internal = null;
  if (primary) {
    const m = MONTH_FULL[primary[1]];
    internal = m ? `${primary[3]}-${m}-${String(primary[2]).padStart(2, "0")}` : null;
  }
  // Parse "(due X)" or "Mon DD, YYYY" that follows (any non-primary date)
  const dueMatch = s.match(/\(due ([A-Z][a-z]{2}) (\d{1,2}),? (\d{4})\)/);
  let deadline = null;
  if (dueMatch) {
    const m = MONTH_FULL[dueMatch[1]];
    deadline = m ? `${dueMatch[3]}-${m}-${String(dueMatch[2]).padStart(2, "0")}` : null;
  } else {
    // Look for a second date in the string (after the primary, not in parens)
    const all = [...s.matchAll(/\b([A-Z][a-z]{2}) (\d{1,2}),? (\d{4})\b/g)];
    if (all.length >= 2) {
      const d = all[1];
      const m = MONTH_FULL[d[1]];
      deadline = m ? `${d[3]}-${m}-${String(d[2]).padStart(2, "0")}` : null;
    }
  }
  return { internal_deadline: internal, deadline };
}

// Status column: "Awarded - Closed" or "LOI Submitted" or "Declined" or "Planned" etc.
function parseStatus(s) {
  if (!s) return null;
  return s.replace(/\s+-\s+/g, "-").trim();
}

// Amount column → {amount, amount_range, is_in_kind}
function parseAmount(s) {
  if (!s) return { amount: null, amount_range: null, is_in_kind: false };
  const clean = s.trim();
  // pdftotext may render "in-kind" as "in- kind" when the word wraps across a line break
  const inKind = /in[-\s]+kind/i.test(clean);

  if (/unspecified/i.test(clean)) return { amount: null, amount_range: null, is_in_kind: inKind };

  // "US $1,000 - US $20,000" or "$1,000 - $20,000"
  const range = clean.match(/US?\s*\$?([\d,]+(?:\.\d+)?)\s*[-–]\s*US?\s*\$?([\d,]+(?:\.\d+)?)/i);
  if (range) {
    const lo = Number(range[1].replace(/,/g, ""));
    const hi = Number(range[2].replace(/,/g, ""));
    return { amount: (lo + hi) / 2, amount_range: clean, is_in_kind: inKind };
  }

  // "Up to US $10,000" / "Up to $10,000"
  const upTo = clean.match(/up to (?:US\s*)?\$?([\d,]+(?:\.\d+)?)/i);
  if (upTo) {
    const v = Number(upTo[1].replace(/,/g, ""));
    return { amount: v, amount_range: clean, is_in_kind: inKind };
  }

  // "More than US $5,000"
  const moreThan = clean.match(/more than (?:US\s*)?\$?([\d,]+(?:\.\d+)?)/i);
  if (moreThan) {
    const v = Number(moreThan[1].replace(/,/g, ""));
    return { amount: v, amount_range: clean, is_in_kind: inKind };
  }

  // "Requesting $15,000" or "Received $2,500" — single value
  const single = clean.match(/\$([\d,]+(?:\.\d+)?)/);
  if (single) {
    const v = Number(single[1].replace(/,/g, ""));
    return { amount: v, amount_range: null, is_in_kind: inKind };
  }

  return { amount: null, amount_range: clean, is_in_kind: inKind };
}

// ========== Build rows ==========

const rows = [];
for (const rec of records) {
  const { opportunity_name, account_name, owner } = extractNameFunder(rec.words);
  const fields = extractFields(rec.words);
  const { internal_deadline, deadline } = parseDeadline(fields.deadline);
  const status = parseStatus(fields.status);
  const amt = parseAmount(fields.amount);

  const nextTaskAndNotes = [fields.next_task, fields.notes]
    .map((s) => s.trim())
    .filter(Boolean)
    .join("\n\n") || null;

  if (!opportunity_name) continue; // skip malformed

  rows.push({
    opportunity_name,
    account_name,
    internal_deadline,
    deadline,
    status,
    amount: amt.amount,
    amount_range: amt.amount_range,
    is_in_kind: amt.is_in_kind,
    next_task_and_notes: nextTaskAndNotes,
    // owner is captured but we have no user-mapping table yet; leave out of insert
  });
}

console.log(`Built ${rows.length} row objects`);
console.log("Sample:", JSON.stringify(rows[0], null, 2));
console.log("Sample range row:", JSON.stringify(rows.find((r) => r.amount_range), null, 2));

if (process.argv.includes("--list-names")) {
  console.log("\n--- All opportunity names ---");
  rows.forEach((r, i) => console.log(`${i + 1}. [${r.status}] ${r.opportunity_name} | ${r.account_name || "-"}`));
}

if (process.argv.includes("--show-amounts")) {
  console.log("\n--- Amount parsing check ---");
  rows.forEach((r, i) => {
    const display = r.amount_range
      ? `${r.amount} <- ${r.amount_range}${r.is_in_kind ? " [IN-KIND]" : ""}`
      : r.amount != null ? `${r.amount}` : "null";
    console.log(`${i + 1}. ${display} | ${r.opportunity_name}`);
  });
}

if (process.argv.includes("--show-deadlines")) {
  console.log("\n--- Deadline parsing check ---");
  rows.forEach((r, i) => {
    console.log(`${i + 1}. internal=${r.internal_deadline || "null"} deadline=${r.deadline || "null"} | ${r.opportunity_name}`);
  });
}

if (DRY_RUN) {
  console.log("[dry-run] would upsert", rows.length, "rows");
  process.exit(0);
}

// ========== Upsert to Supabase ==========

const envText = fs.readFileSync(path.join(dashboardDir, ".env.local"), "utf8");
const envMap = new Map();
for (const line of envText.split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/);
  if (m) envMap.set(m[1], m[2]);
}
const url = envMap.get("SUPABASE_URL");
const key = envMap.get("SUPABASE_SERVICE_ROLE_KEY");
const sb = createClient(url, key, { auth: { persistSession: false } });

// Clear existing rows before re-import (this is a one-shot PDF snapshot import)
const { error: delErr } = await sb.from("instrumentl_opportunities").delete().not("id", "is", null);
if (delErr) { console.error("Delete error:", delErr); process.exit(1); }

const { data, error } = await sb.from("instrumentl_opportunities").insert(rows).select("id");
if (error) {
  console.error("Insert error:", JSON.stringify(error, null, 2));
  process.exit(1);
}
console.log(`Inserted ${data.length} rows`);

const { count } = await sb.from("instrumentl_opportunities").select("id", { count: "exact", head: true });
console.log(`Total in DB: ${count}`);
