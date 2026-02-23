import { execFileSync } from "node:child_process";
import type { OrgInfo } from "./types.js";

export function getOrgInfo(orgAlias: string): OrgInfo {
  console.log(`Reading auth for org: ${orgAlias}`);

  const result = execFileSync(
    "sf",
    ["org", "display", "--target-org", orgAlias, "--json"],
    { encoding: "utf-8", timeout: 30_000 }
  );

  const parsed = JSON.parse(result);

  if (parsed.status !== 0) {
    throw new Error(
      `Failed to get org info: ${parsed.message || "Unknown error"}. ` +
        `Run 'sf org login web --alias ${orgAlias}' first.`
    );
  }

  const r = parsed.result;
  return {
    accessToken: r.accessToken,
    instanceUrl: r.instanceUrl,
    orgId: r.id,
    username: r.username,
    alias: orgAlias,
  };
}

export function parseArgs(): { orgAlias: string } {
  const args = process.argv.slice(2);
  const orgIndex = args.indexOf("--org");

  if (orgIndex === -1 || !args[orgIndex + 1]) {
    console.error("Usage: npx tsx scripts/run-export.ts --org <org-alias>");
    console.error("  First authenticate: sf org login web --alias <org-alias>");
    process.exit(1);
  }

  return { orgAlias: args[orgIndex + 1] };
}
