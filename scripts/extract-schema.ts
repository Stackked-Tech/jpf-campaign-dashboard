import jsforce from "jsforce";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import type {
  OrgInfo,
  ObjectSchema,
  FieldInfo,
  ChildRelationship,
  RecordTypeInfo,
  SchemaExport,
} from "./types.js";

const ROOT = path.resolve(import.meta.dirname, "..");
const DOCS_DIR = path.join(ROOT, "docs");

const RELEVANT_STANDARD_OBJECTS = new Set([
  "Account", "Contact", "Lead", "Opportunity", "OpportunityLineItem",
  "Case", "Task", "Event", "Campaign", "CampaignMember", "Contract",
  "Order", "OrderItem", "Product2", "Pricebook2", "PricebookEntry",
  "Quote", "QuoteLineItem", "Asset", "Solution", "Note", "Attachment",
  "ContentDocument", "ContentVersion", "User", "Group", "UserRole",
]);

const SKIP_PATTERNS = [
  /^Apex/, /^Auth/, /^Background/, /^Batch/, /^Chatter/, /^ClientBrowser/,
  /^CollaborationGroup/, /^Community/, /^Cron/,
  /^Custom(Notification|Brand|Help|HttpHeader)/,
  /^DataAssessment/, /^Duplicate/, /^EmailMessage/, /^Entity/, /^External/,
  /^FieldPermissions/, /^Flow(Interview|Record|Stage)/, /^Icon/, /^Idea/,
  /^IdeaComment/, /^Login/, /^Macro/, /^Mail/, /^ObjectPermissions/,
  /^OrgWide/, /^PermissionSet/, /^Platform/, /^Process/, /^Profile/,
  /^Publisher/, /^Queue/, /^Recently/, /^Record$/, /^Redirect/,
  /^Report/, /^Dashboard/, /^Scontrol/, /^Search/, /^Setup/, /^Site/,
  /^Stamp/, /^Stream/, /^TestSuite/, /^TopicAssignment/, /^TwoFactor/,
  /^Undecided/, /^UserApp/, /^UserDevice/, /^UserLogin/, /^UserPref/,
  /^UserProvision/, /^Verification/, /^Vote/, /^WebLink/,
  /History$/, /Feed$/, /Share$/, /Tag$/, /ChangeEvent$/,
];

const SF_TO_SUPABASE_TYPE: Record<string, string> = {
  string: "text", textarea: "text", url: "text", phone: "text", email: "text",
  id: "uuid", reference: "uuid", boolean: "boolean", int: "int4",
  double: "float8", currency: "numeric(18,2)", percent: "numeric(5,2)",
  date: "date", datetime: "timestamptz", time: "time",
  picklist: "text", multipicklist: "text[]", combobox: "text",
  base64: "bytea", encryptedstring: "text", anyType: "jsonb",
  location: "jsonb", address: "jsonb", complexvalue: "jsonb",
};

function shouldIncludeObject(name: string, isCustom: boolean): boolean {
  if (isCustom) return true;
  if (RELEVANT_STANDARD_OBJECTS.has(name)) return true;
  return false;
}

function shouldSkipObject(name: string): boolean {
  return SKIP_PATTERNS.some((pattern) => pattern.test(name));
}

function mapToSupabaseType(sfType: string, field: { length?: number; precision?: number; scale?: number }): string {
  const base = SF_TO_SUPABASE_TYPE[sfType.toLowerCase()] || "text";
  if (sfType === "string" && field.length && field.length <= 255) {
    return `varchar(${field.length})`;
  }
  if (sfType === "double" && field.precision && field.scale) {
    return `numeric(${field.precision},${field.scale})`;
  }
  return base;
}

function mapField(f: Record<string, unknown>): FieldInfo {
  const sfType = f.type as string;
  const refs = f.referenceTo as string[] | undefined;
  let relType: "Lookup" | "MasterDetail" | null = null;
  if (refs && refs.length > 0) {
    relType = (f.cascadeDelete as boolean) ? "MasterDetail" : "Lookup";
  }

  return {
    apiName: f.name as string,
    label: f.label as string,
    type: sfType,
    supabaseType: mapToSupabaseType(sfType, {
      length: f.length as number | undefined,
      precision: f.precision as number | undefined,
      scale: f.scale as number | undefined,
    }),
    length: (f.length as number) || null,
    required: !(f.nillable as boolean) && !(f.defaultedOnCreate as boolean),
    unique: (f.unique as boolean) || false,
    externalId: (f.externalId as boolean) || false,
    defaultValue: f.defaultValue ?? null,
    helpText: (f.inlineHelpText as string) || null,
    formula: (f.calculatedFormula as string) || null,
    picklistValues:
      sfType === "picklist" || sfType === "multipicklist"
        ? ((f.picklistValues as Array<{ label: string; value: string; active: boolean }>) || []).map(
            (pv) => ({ label: pv.label, value: pv.value, active: pv.active })
          )
        : null,
    referenceTo: refs && refs.length > 0 ? refs : null,
    relationshipName: (f.relationshipName as string) || null,
    relationshipType: relType,
  };
}

function mapChildRelationship(cr: Record<string, unknown>): ChildRelationship | null {
  const childObj = cr.childSObject as string;
  if (!childObj || shouldSkipObject(childObj)) return null;

  return {
    childObject: childObj,
    childField: cr.field as string,
    relationshipName: (cr.relationshipName as string) || null,
    cascadeDelete: (cr.cascadeDelete as boolean) || false,
  };
}

export async function extractSchema(orgInfo: OrgInfo): Promise<SchemaExport> {
  console.log("\nPhase 2: Schema & Relationship Extraction");
  console.log("-".repeat(50));

  const conn = new jsforce.Connection({
    instanceUrl: orgInfo.instanceUrl,
    accessToken: orgInfo.accessToken,
    version: "60.0",
  });

  console.log("  > Fetching object list...");
  const globalDescribe = await conn.describeGlobal();
  const allObjects = globalDescribe.sobjects;
  console.log(`    Found ${allObjects.length} total sObjects`);

  const targetObjects = allObjects.filter((obj) => {
    if (shouldSkipObject(obj.name)) return false;
    return shouldIncludeObject(obj.name, obj.custom);
  });
  console.log(`    Filtered to ${targetObjects.length} relevant objects`);

  const objects: ObjectSchema[] = [];
  let totalFields = 0;
  let totalRelationships = 0;

  for (let i = 0; i < targetObjects.length; i++) {
    const obj = targetObjects[i];
    const progress = `[${i + 1}/${targetObjects.length}]`;
    process.stdout.write(`  > ${progress} Describing ${obj.name}...`);

    try {
      const describe = await conn.sobject(obj.name).describe();

      const fields = describe.fields.map((f) => mapField(f as unknown as Record<string, unknown>));
      const childRels = describe.childRelationships
        .map((cr) => mapChildRelationship(cr as unknown as Record<string, unknown>))
        .filter((cr): cr is ChildRelationship => cr !== null);

      const recordTypes: RecordTypeInfo[] = (describe.recordTypeInfos || [])
        .filter((rt) => rt.name !== "Master")
        .map((rt) => {
          const raw = rt as unknown as Record<string, unknown>;
          return {
            name: rt.name,
            developerName: (raw.developerName as string) || rt.name,
            description: null,
            active: (raw.active as boolean) ?? true,
            defaultRecordTypeMapping: rt.defaultRecordTypeMapping,
          };
        });

      const schema: ObjectSchema = {
        apiName: obj.name,
        label: obj.label,
        labelPlural: obj.labelPlural || obj.label + "s",
        isCustom: obj.custom,
        keyPrefix: obj.keyPrefix || null,
        recordTypes,
        fields,
        childRelationships: childRels,
        fieldCount: fields.length,
        relationshipCount: fields.filter((f) => f.referenceTo).length + childRels.length,
      };

      objects.push(schema);
      totalFields += fields.length;
      totalRelationships += schema.relationshipCount;

      process.stdout.write(` ${fields.length} fields, ${schema.relationshipCount} rels\n`);
    } catch (err) {
      process.stdout.write(` SKIPPED (${(err as Error).message.slice(0, 80)})\n`);
    }

    if (i % 10 === 9) {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  const exportData: SchemaExport = {
    exportDate: new Date().toISOString(),
    orgId: orgInfo.orgId,
    orgName: orgInfo.username,
    apiVersion: "60.0",
    objects,
    totalObjects: objects.length,
    totalFields,
    totalRelationships,
  };

  if (!existsSync(DOCS_DIR)) mkdirSync(DOCS_DIR, { recursive: true });

  const jsonPath = path.join(DOCS_DIR, "data-dictionary.json");
  writeFileSync(jsonPath, JSON.stringify(exportData, null, 2));
  console.log(`\n  Wrote ${jsonPath}`);

  const mdPath = path.join(DOCS_DIR, "data-dictionary.md");
  writeFileSync(mdPath, generateDataDictionaryMd(exportData));
  console.log(`  Wrote ${mdPath}`);

  const erdPath = path.join(DOCS_DIR, "erd.md");
  writeFileSync(erdPath, generateErdMd(exportData));
  console.log(`  Wrote ${erdPath}`);

  console.log(`\nPhase 2 complete: ${objects.length} objects, ${totalFields} fields, ${totalRelationships} relationships`);

  return exportData;
}

function generateDataDictionaryMd(data: SchemaExport): string {
  const lines: string[] = [
    "# Data Dictionary", "",
    `> Exported: ${data.exportDate}`,
    `> Org: ${data.orgName} (${data.orgId})`,
    `> Objects: ${data.totalObjects} | Fields: ${data.totalFields} | Relationships: ${data.totalRelationships}`,
    "", "---", "",
  ];

  lines.push("## Table of Contents", "");
  for (const obj of data.objects.sort((a, b) => a.apiName.localeCompare(b.apiName))) {
    lines.push(`- [${obj.label} (${obj.apiName})](#${obj.apiName.toLowerCase().replace(/_/g, "")})`);
  }
  lines.push("", "---", "");

  for (const obj of data.objects.sort((a, b) => a.apiName.localeCompare(b.apiName))) {
    const anchor = obj.apiName.toLowerCase().replace(/_/g, "");
    lines.push(
      `## ${obj.label} (\`${obj.apiName}\`) {#${anchor}}`, "",
      `| Property | Value |`, `|----------|-------|`,
      `| Custom | ${obj.isCustom ? "Yes" : "No"} |`,
      `| Key Prefix | ${obj.keyPrefix || "N/A"} |`,
      `| Fields | ${obj.fieldCount} |`,
      `| Relationships | ${obj.relationshipCount} |`,
      `| Record Types | ${obj.recordTypes.length || "None"} |`, ""
    );

    if (obj.recordTypes.length > 0) {
      lines.push("### Record Types", "");
      lines.push("| Name | Developer Name | Active | Default |");
      lines.push("|------|----------------|--------|---------|");
      for (const rt of obj.recordTypes) {
        lines.push(`| ${rt.name} | ${rt.developerName} | ${rt.active ? "Yes" : "No"} | ${rt.defaultRecordTypeMapping ? "Yes" : "No"} |`);
      }
      lines.push("");
    }

    lines.push("### Fields", "");
    lines.push("| Field | Label | SF Type | Supabase Type | Required | Unique | Reference |");
    lines.push("|-------|-------|---------|---------------|----------|--------|-----------|");
    for (const f of obj.fields) {
      const ref = f.referenceTo ? `-> ${f.referenceTo.join(", ")} (${f.relationshipType})` : "";
      lines.push(`| \`${f.apiName}\` | ${f.label} | ${f.type} | \`${f.supabaseType}\` | ${f.required ? "Yes" : ""} | ${f.unique ? "Yes" : ""} | ${ref} |`);
    }
    lines.push("");

    const picklists = obj.fields.filter((f) => f.picklistValues && f.picklistValues.length > 0);
    if (picklists.length > 0) {
      lines.push("### Picklist Values", "");
      for (const f of picklists) {
        lines.push(`**${f.label}** (\`${f.apiName}\`):`);
        for (const pv of f.picklistValues!) {
          lines.push(`- ${pv.active ? "" : "~~"}${pv.label}${pv.active ? "" : "~~"} = \`${pv.value}\``);
        }
        lines.push("");
      }
    }

    if (obj.childRelationships.length > 0) {
      lines.push("### Child Relationships", "");
      lines.push("| Child Object | Field | Relationship | Cascade Delete |");
      lines.push("|-------------|-------|-------------|----------------|");
      for (const cr of obj.childRelationships) {
        lines.push(`| ${cr.childObject} | ${cr.childField} | ${cr.relationshipName || "N/A"} | ${cr.cascadeDelete ? "Yes" : "No"} |`);
      }
      lines.push("");
    }

    lines.push("---", "");
  }

  return lines.join("\n");
}

function generateErdMd(data: SchemaExport): string {
  const lines: string[] = [
    "# Entity Relationship Diagrams", "",
    `> Exported: ${data.exportDate}`, "",
  ];

  interface Rel { from: string; to: string; field: string; type: "Lookup" | "MasterDetail"; }
  const relationships: Rel[] = [];

  for (const obj of data.objects) {
    for (const f of obj.fields) {
      if (f.referenceTo && f.relationshipType) {
        for (const ref of f.referenceTo) {
          relationships.push({ from: obj.apiName, to: ref, field: f.apiName, type: f.relationshipType });
        }
      }
    }
  }

  const objectNames = new Set(data.objects.map((o) => o.apiName));
  const chunks = chunkObjects(data.objects, 15);

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const chunkObjectNames = new Set(chunk.map((o) => o.apiName));
    const chunkRels = relationships.filter(
      (r) => chunkObjectNames.has(r.from) && (chunkObjectNames.has(r.to) || objectNames.has(r.to))
    );

    lines.push(`## Diagram ${i + 1}`, "");
    lines.push("```mermaid");
    lines.push("erDiagram");

    for (const rel of chunkRels) {
      const cardinality = rel.type === "MasterDetail" ? "||--o{" : "}o--o{";
      lines.push(`    ${rel.to} ${cardinality} ${rel.from} : "${rel.field}"`);
    }
    lines.push("");

    for (const obj of chunk) {
      lines.push(`    ${obj.apiName} {`);
      const keyFields = obj.fields
        .filter((f) => f.type !== "id" && !f.apiName.startsWith("System"))
        .slice(0, 8);
      for (const f of keyFields) {
        const cleanType = f.supabaseType.replace(/[^a-zA-Z0-9]/g, "_");
        lines.push(`        ${cleanType} ${f.apiName}`);
      }
      lines.push("    }");
    }

    lines.push("```", "");
  }

  return lines.join("\n");
}

function chunkObjects(objects: ObjectSchema[], maxSize: number): ObjectSchema[][] {
  const chunks: ObjectSchema[][] = [];
  const remaining = [...objects];
  while (remaining.length > 0) {
    chunks.push(remaining.splice(0, maxSize));
  }
  return chunks;
}
