import { parseArgs, getOrgInfo } from "./auth.js";
import { exportMetadata } from "./export-metadata.js";
import { extractSchema } from "./extract-schema.js";
import { extractAutomation } from "./extract-automation.js";

async function main() {
  console.log("========================================");
  console.log("  Salesforce Org Export Tool");
  console.log("  Migration Planning Documentation");
  console.log("========================================");
  console.log("");

  const { orgAlias } = parseArgs();
  const orgInfo = getOrgInfo(orgAlias);

  console.log(`Connected to: ${orgInfo.username}`);
  console.log(`  Instance: ${orgInfo.instanceUrl}`);
  console.log(`  Org ID: ${orgInfo.orgId}`);

  const startTime = Date.now();

  // Phase 1: Raw Metadata
  await exportMetadata(orgAlias);

  // Phase 2: Schema Extraction
  const schemaData = await extractSchema(orgInfo);

  // Phase 3: Automation Inventory
  await extractAutomation(orgInfo, schemaData);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log("\n" + "=".repeat(50));
  console.log(`Export complete in ${elapsed}s`);
  console.log("");
  console.log("Raw metadata:  ./raw-metadata/force-app/");
  console.log("Documentation: ./docs/");
  console.log("  - data-dictionary.md     (schema reference)");
  console.log("  - data-dictionary.json   (machine-readable)");
  console.log("  - erd.md                 (relationship diagrams)");
  console.log("  - automation-inventory.md (all automation)");
  console.log("  - automation-inventory.json");
  console.log("  - migration-summary.md   (planning overview)");
  console.log("=".repeat(50));
}

main().catch((err) => {
  console.error("\nExport failed:", err.message);
  process.exit(1);
});
