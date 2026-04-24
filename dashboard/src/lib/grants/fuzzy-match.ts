// Fuzzy-match helpers for linking an Instrumentl pursuit to an SF grant.
// Ported from scripts/match-instrumentl-to-grants.mjs.

function norm(s: string | null | undefined): string {
  if (!s) return "";
  return s
    .toLowerCase()
    .replace(/\.{2,}$/, "")
    .replace(/[.,'"&()/]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const GENERIC = new Set([
  "the", "of", "and", "a", "an", "for", "to", "in", "on", "by", "with",
  "foundation", "fund", "trust", "charitable", "inc", "llc", "ltd", "co",
  "company", "corp", "corporation", "incorporated", "organization",
  "family", "group", "grants", "grant", "program", "giving", "community",
  "gifts", "donations", "services", "america", "american", "international",
]);

function distinctiveTokens(s: string | null | undefined): Set<string> {
  return new Set(
    norm(s)
      .split(" ")
      .filter((t) => t.length >= 3 && !GENERIC.has(t))
  );
}

export interface MatchCandidate {
  sf_id: string;
  sf_account_name: string | null;
  sf_name: string;
  sf_stage: string | null;
  sf_amount: number | null;
  sf_close_date: string | null;
  f1: number;
  matched_tokens: string[];
}

/**
 * Score every SF grant as a potential match for the given Instrumentl pursuit.
 * Returns candidates with F1 ≥ threshold, sorted by F1 descending.
 */
export function scoreCandidates(
  instAccount: string | null,
  instName: string,
  sfRows: Array<{
    id: string;
    name: string | null;
    account_name: string | null;
    stage_name: string | null;
    amount: number | null;
    close_date: string | null;
  }>,
  threshold = 0.15,
  limit = 10
): MatchCandidate[] {
  const iSet = new Set([
    ...distinctiveTokens(instAccount),
    ...distinctiveTokens(instName),
  ]);
  if (iSet.size === 0) return [];

  const scored: MatchCandidate[] = [];
  for (const sf of sfRows) {
    const sSet = new Set([
      ...distinctiveTokens(sf.account_name),
      ...distinctiveTokens(sf.name),
    ]);
    if (sSet.size === 0) continue;

    const matched: string[] = [];
    for (const t of iSet) if (sSet.has(t)) matched.push(t);
    if (matched.length === 0) continue;

    const precision = matched.length / iSet.size;
    const recall = matched.length / sSet.size;
    const f1 = (2 * precision * recall) / (precision + recall);
    if (f1 < threshold) continue;

    scored.push({
      sf_id: sf.id,
      sf_account_name: sf.account_name,
      sf_name: sf.name ?? "(unnamed)",
      sf_stage: sf.stage_name,
      sf_amount: sf.amount,
      sf_close_date: sf.close_date,
      f1,
      matched_tokens: matched,
    });
  }
  scored.sort((a, b) => b.f1 - a.f1);
  return scored.slice(0, limit);
}
