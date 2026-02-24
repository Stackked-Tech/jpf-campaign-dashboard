import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const RAW_DIR = path.join(ROOT, "raw-metadata");
const MANIFEST_DIR = path.join(RAW_DIR, "manifest");

const METADATA_CATEGORIES: Record<string, string[]> = {
  "objects-schema": [
    "CustomObject", "Layout", "CompactLayout", "ListView", "RecordType", "BusinessProcess",
  ],
  automation: [
    "Flow", "Workflow", "ApprovalProcess", "AssignmentRule", "AutoResponseRule",
    "EscalationRule", "MatchingRule", "DuplicateRule",
  ],
  code: [
    "ApexClass", "ApexTrigger", "ApexPage", "ApexComponent",
    "LightningComponentBundle", "AuraDefinitionBundle", "StaticResource",
  ],
  security: [
    "Profile", "PermissionSet", "PermissionSetGroup", "Role",
    "SharingRules", "SharingOwnerRule", "SharingCriteriaRule",
  ],
  ui: [
    "FlexiPage", "CustomTab", "CustomApplication", "HomePageLayout", "CustomPageWebLink",
  ],
  data: [
    "CustomMetadata", "GlobalValueSet", "StandardValueSet", "CustomLabel",
  ],
  email: ["EmailTemplate", "Letterhead"],
  connected: [
    "ConnectedApp", "NamedCredential", "RemoteSiteSetting",
    "ExternalDataSource", "ExternalServiceRegistration",
  ],
};

function buildPackageXml(types: string[], version = "60.0"): string {
  const typeEntries = types
    .map(
      (t) => `  <types>\n    <members>*</members>\n    <name>${t}</name>\n  </types>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<Package xmlns="http://soap.sforce.com/2006/04/metadata">\n${typeEntries}\n  <version>${version}</version>\n</Package>`;
}

function runSfCommand(args: string[], label: string): string {
  console.log(`  > ${label}`);
  try {
    return execFileSync("sf", args, {
      encoding: "utf-8",
      timeout: 300_000,
      cwd: RAW_DIR,
    });
  } catch (err: unknown) {
    const error = err as { stderr?: string; message?: string };
    throw new Error(`SF CLI error (${label}): ${error.stderr || error.message}`);
  }
}

export async function exportMetadata(orgAlias: string): Promise<void> {
  console.log("\nPhase 1: Raw Metadata Export");
  console.log("-".repeat(50));

  if (!existsSync(RAW_DIR)) mkdirSync(RAW_DIR, { recursive: true });
  if (!existsSync(MANIFEST_DIR)) mkdirSync(MANIFEST_DIR, { recursive: true });

  // SF CLI requires the force-app directory to exist before retrieval
  const forceAppDir = path.join(RAW_DIR, "force-app");
  if (!existsSync(forceAppDir)) mkdirSync(forceAppDir, { recursive: true });

  const projectJson = path.join(RAW_DIR, "sfdx-project.json");
  if (!existsSync(projectJson)) {
    writeFileSync(
      projectJson,
      JSON.stringify(
        {
          packageDirectories: [{ path: "force-app", default: true }],
          namespace: "",
          sfdcLoginUrl: "https://login.salesforce.com",
          sourceApiVersion: "60.0",
        },
        null,
        2
      )
    );
  }

  let successCount = 0;
  let errorCount = 0;

  for (const [category, types] of Object.entries(METADATA_CATEGORIES)) {
    const manifestPath = path.join(MANIFEST_DIR, `package-${category}.xml`);
    const xml = buildPackageXml(types);
    writeFileSync(manifestPath, xml);

    try {
      runSfCommand(
        [
          "project", "retrieve", "start",
          "--manifest", manifestPath,
          "--target-org", orgAlias,
          "--ignore-conflicts",
        ],
        `Retrieving ${category} (${types.length} types)`
      );
      successCount++;
    } catch (err) {
      console.warn(`  Warning: ${category} retrieval had errors (some types may not exist in this org)`);
      console.warn(`    ${(err as Error).message.slice(0, 200)}`);
      errorCount++;
    }
  }

  console.log("\n  > Generating org-wide manifest (bonus pass)...");
  try {
    runSfCommand(
      [
        "project", "generate", "manifest",
        "--from-org", orgAlias,
        "--output-dir", MANIFEST_DIR,
        "--name", "fullOrg",
      ],
      "Auto-generating full manifest"
    );

    const fullManifestPath = path.join(MANIFEST_DIR, "fullOrg.xml");
    if (existsSync(fullManifestPath)) {
      let content = readFileSync(fullManifestPath, "utf-8");
      content = content.replace(
        /^\s*<members>[a-zA-Z0-9]+__[^<]*<\/members>\s*$/gm,
        ""
      );
      writeFileSync(fullManifestPath, content);
      console.log("  > Cleaned managed package entries from manifest");
    }
  } catch {
    console.warn("  Warning: Auto-manifest generation failed (non-critical, category retrieval covers this)");
  }

  console.log(`\nPhase 1 complete: ${successCount} categories retrieved, ${errorCount} warnings`);
  console.log(`   Raw metadata stored in: ${RAW_DIR}/force-app/`);
}
