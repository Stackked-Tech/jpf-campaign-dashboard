import jsforce from "jsforce";
import Connection from "jsforce/lib/connection";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import type {
  OrgInfo,
  AutomationExport,
  FlowInfo,
  ValidationRuleInfo,
  WorkflowRuleInfo,
  ApexTriggerInfo,
  ApexClassInfo,
  ApprovalProcessInfo,
  DependencyInfo,
  SchemaExport,
} from "./types.js";

const ROOT = path.resolve(import.meta.dirname, "..");
const DOCS_DIR = path.join(ROOT, "docs");

const FLOW_MIGRATION_MAP: Record<string, string> = {
  AutoLaunchedFlow: "Supabase DB trigger or Edge Function",
  Flow: "Next.js form/wizard component",
  Workflow: "Supabase DB trigger or Edge Function",
  CustomEvent: "Supabase Realtime or webhook",
  InvocableProcess: "Utility function",
  RecordTriggeredFlow: "Supabase DB trigger or Edge Function",
};

function classifyApexClass(name: string, body: string): ApexClassInfo["category"] {
  const lower = name.toLowerCase();
  if (lower.endsWith("test") || lower.endsWith("_test") || lower.includes("test_")) return "test";
  if (lower.endsWith("controller") || lower.endsWith("ctrl")) return "controller";
  if (lower.endsWith("util") || lower.endsWith("utils") || lower.endsWith("helper") || lower.endsWith("helpers"))
    return "utility";
  if (body.includes("@RestResource") || body.includes("@HttpGet") || body.includes("@HttpPost"))
    return "controller";
  return "business-logic";
}

async function queryTooling<T extends Record<string, unknown>>(conn: Connection, soql: string, label: string): Promise<T[]> {
  console.log(`  > Querying ${label}...`);
  try {
    const result = await conn.tooling.query<T>(soql);
    const records = result.records || [];
    console.log(`    Found ${records.length} ${label}`);
    return records;
  } catch (err) {
    console.warn(`    Warning: ${label} query failed: ${(err as Error).message.slice(0, 100)}`);
    return [];
  }
}

export async function extractAutomation(
  orgInfo: OrgInfo,
  schemaData?: SchemaExport
): Promise<AutomationExport> {
  console.log("\nPhase 3: Automation & Logic Inventory");
  console.log("-".repeat(50));

  const conn = new jsforce.Connection({
    instanceUrl: orgInfo.instanceUrl,
    accessToken: orgInfo.accessToken,
    version: "60.0",
  });

  const rawFlows = await queryTooling<Record<string, unknown>>(
    conn,
    `SELECT Id, Definition.DeveloperName, Definition.Description, VersionNumber, Status, ProcessType, TriggerType, TriggerObjectOrEventLabel FROM Flow WHERE Status = 'Active'`,
    "active Flows"
  );

  const flows: FlowInfo[] = rawFlows.map((f) => {
    const def = f.Definition as Record<string, unknown> | undefined;
    const processType = (f.ProcessType as string) || "Unknown";
    return {
      id: f.Id as string,
      developerName: def?.DeveloperName as string || "Unknown",
      description: (def?.Description as string) || null,
      versionNumber: f.VersionNumber as number,
      status: f.Status as string,
      processType,
      triggerType: (f.TriggerType as string) || null,
      triggerObject: (f.TriggerObjectOrEventLabel as string) || null,
      migrationTarget: FLOW_MIGRATION_MAP[processType] || "Review manually",
    };
  });

  const rawValidations = await queryTooling<Record<string, unknown>>(
    conn,
    `SELECT Id, EntityDefinition.DeveloperName, ValidationName, Active, ErrorMessage, Metadata FROM ValidationRule WHERE Active = true`,
    "active Validation Rules"
  );

  const validationRules: ValidationRuleInfo[] = rawValidations.map((v) => {
    const entity = v.EntityDefinition as Record<string, unknown> | undefined;
    const metadata = v.Metadata as Record<string, unknown> | undefined;
    return {
      id: v.Id as string,
      objectName: (entity?.DeveloperName as string) || "Unknown",
      ruleName: v.ValidationName as string,
      active: v.Active as boolean,
      errorMessage: (v.ErrorMessage as string) || "",
      formula: (metadata?.errorConditionFormula as string) || "",
      migrationTarget: "Zod schema + Postgres CHECK constraint",
    };
  });

  const rawWorkflows = await queryTooling<Record<string, unknown>>(
    conn,
    `SELECT Id, Name, TableEnumOrId, Metadata FROM WorkflowRule`,
    "Workflow Rules"
  );

  const workflowRules: WorkflowRuleInfo[] = rawWorkflows.map((w) => ({
    id: w.Id as string,
    name: w.Name as string,
    objectName: w.TableEnumOrId as string,
    metadata: (w.Metadata as Record<string, unknown>) || {},
  }));

  const rawTriggers = await queryTooling<Record<string, unknown>>(
    conn,
    `SELECT Id, Name, Body, TableEnumOrId, ApiVersion, Status FROM ApexTrigger WHERE Status = 'Active'`,
    "active Apex Triggers"
  );

  const apexTriggers: ApexTriggerInfo[] = rawTriggers.map((t) => {
    const body = (t.Body as string) || "";
    return {
      id: t.Id as string,
      name: t.Name as string,
      objectName: t.TableEnumOrId as string,
      body,
      apiVersion: (t.ApiVersion as string) || "",
      linesOfCode: body.split("\n").length,
    };
  });

  const rawClasses = await queryTooling<Record<string, unknown>>(
    conn,
    `SELECT Id, Name, Body, ApiVersion, LengthWithoutComments FROM ApexClass`,
    "Apex Classes"
  );

  const apexClasses: ApexClassInfo[] = rawClasses.map((c) => {
    const body = (c.Body as string) || "";
    const name = c.Name as string;
    return {
      id: c.Id as string,
      name,
      body,
      apiVersion: (c.ApiVersion as string) || "",
      linesOfCode: body.split("\n").length,
      category: classifyApexClass(name, body),
    };
  });

  const rawApprovals = await queryTooling<Record<string, unknown>>(
    conn,
    `SELECT Id, DeveloperName, Description, TableEnumOrId FROM ProcessDefinition WHERE State = 'Active'`,
    "active Approval Processes"
  );

  const approvalProcesses: ApprovalProcessInfo[] = rawApprovals.map((a) => ({
    id: a.Id as string,
    developerName: a.DeveloperName as string,
    description: (a.Description as string) || null,
    objectName: a.TableEnumOrId as string,
  }));

  const rawDeps = await queryTooling<Record<string, unknown>>(
    conn,
    `SELECT MetadataComponentName, MetadataComponentType, RefMetadataComponentName, RefMetadataComponentType FROM MetadataComponentDependency WHERE RefMetadataComponentType = 'CustomObject'`,
    "metadata dependencies"
  );

  const dependencies: DependencyInfo[] = rawDeps.map((d) => ({
    componentName: d.MetadataComponentName as string,
    componentType: d.MetadataComponentType as string,
    referencedName: d.RefMetadataComponentName as string,
    referencedType: d.RefMetadataComponentType as string,
  }));

  const exportData: AutomationExport = {
    exportDate: new Date().toISOString(),
    orgId: orgInfo.orgId,
    flows,
    validationRules,
    workflowRules,
    apexTriggers,
    apexClasses,
    approvalProcesses,
    dependencies,
    totals: {
      flows: flows.length,
      validationRules: validationRules.length,
      workflowRules: workflowRules.length,
      apexTriggers: apexTriggers.length,
      apexClasses: apexClasses.length,
      approvalProcesses: approvalProcesses.length,
    },
  };

  if (!existsSync(DOCS_DIR)) mkdirSync(DOCS_DIR, { recursive: true });

  const jsonPath = path.join(DOCS_DIR, "automation-inventory.json");
  writeFileSync(jsonPath, JSON.stringify(exportData, null, 2));
  console.log(`\n  Wrote ${jsonPath}`);

  const mdPath = path.join(DOCS_DIR, "automation-inventory.md");
  writeFileSync(mdPath, generateAutomationMd(exportData));
  console.log(`  Wrote ${mdPath}`);

  const summaryPath = path.join(DOCS_DIR, "migration-summary.md");
  writeFileSync(summaryPath, generateMigrationSummary(exportData, schemaData));
  console.log(`  Wrote ${summaryPath}`);

  console.log(
    `\nPhase 3 complete: ${flows.length} flows, ${validationRules.length} validation rules, ` +
      `${apexTriggers.length} triggers, ${apexClasses.length} classes`
  );

  return exportData;
}

function generateAutomationMd(data: AutomationExport): string {
  const lines: string[] = [
    "# Automation Inventory", "",
    `> Exported: ${data.exportDate}`, "",
    "## Summary", "",
    `| Type | Count |`, `|------|-------|`,
    `| Flows (active) | ${data.totals.flows} |`,
    `| Validation Rules (active) | ${data.totals.validationRules} |`,
    `| Workflow Rules | ${data.totals.workflowRules} |`,
    `| Apex Triggers (active) | ${data.totals.apexTriggers} |`,
    `| Apex Classes | ${data.totals.apexClasses} |`,
    `| Approval Processes (active) | ${data.totals.approvalProcesses} |`,
    "", "---", "",
  ];

  const objectMap = new Map<string, {
    flows: FlowInfo[];
    validationRules: ValidationRuleInfo[];
    workflowRules: WorkflowRuleInfo[];
    apexTriggers: ApexTriggerInfo[];
    approvalProcesses: ApprovalProcessInfo[];
  }>();

  const getOrCreate = (name: string) => {
    if (!objectMap.has(name)) {
      objectMap.set(name, { flows: [], validationRules: [], workflowRules: [], apexTriggers: [], approvalProcesses: [] });
    }
    return objectMap.get(name)!;
  };

  for (const f of data.flows) { if (f.triggerObject) getOrCreate(f.triggerObject).flows.push(f); }
  for (const v of data.validationRules) getOrCreate(v.objectName).validationRules.push(v);
  for (const w of data.workflowRules) getOrCreate(w.objectName).workflowRules.push(w);
  for (const t of data.apexTriggers) getOrCreate(t.objectName).apexTriggers.push(t);
  for (const a of data.approvalProcesses) getOrCreate(a.objectName).approvalProcesses.push(a);

  for (const [objName, items] of [...objectMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const total = items.flows.length + items.validationRules.length + items.workflowRules.length + items.apexTriggers.length + items.approvalProcesses.length;
    if (total === 0) continue;

    lines.push(`## ${objName}`, "");

    if (items.flows.length > 0) {
      lines.push("### Flows", "");
      lines.push("| Flow | Type | Trigger | Description | Migration Target |");
      lines.push("|------|------|---------|-------------|-----------------|");
      for (const f of items.flows) {
        lines.push(`| ${f.developerName} | ${f.processType} | ${f.triggerType || "N/A"} | ${f.description || "N/A"} | ${f.migrationTarget} |`);
      }
      lines.push("");
    }

    if (items.validationRules.length > 0) {
      lines.push("### Validation Rules", "");
      lines.push("| Rule | Error Message | Formula | Migration Target |");
      lines.push("|------|--------------|---------|-----------------|");
      for (const v of items.validationRules) {
        const formulaSnippet = v.formula.length > 80 ? v.formula.slice(0, 80) + "..." : v.formula;
        lines.push(`| ${v.ruleName} | ${v.errorMessage} | \`${formulaSnippet}\` | ${v.migrationTarget} |`);
      }
      lines.push("");
    }

    if (items.workflowRules.length > 0) {
      lines.push("### Workflow Rules", "");
      lines.push("| Rule | Object |");
      lines.push("|------|--------|");
      for (const w of items.workflowRules) { lines.push(`| ${w.name} | ${w.objectName} |`); }
      lines.push("");
    }

    if (items.apexTriggers.length > 0) {
      lines.push("### Apex Triggers", "");
      lines.push("| Trigger | Lines | API Version |");
      lines.push("|---------|-------|-------------|");
      for (const t of items.apexTriggers) { lines.push(`| ${t.name} | ${t.linesOfCode} | ${t.apiVersion} |`); }
      lines.push("");
    }

    if (items.approvalProcesses.length > 0) {
      lines.push("### Approval Processes", "");
      lines.push("| Process | Description |");
      lines.push("|---------|-------------|");
      for (const a of items.approvalProcesses) { lines.push(`| ${a.developerName} | ${a.description || "N/A"} |`); }
      lines.push("");
    }

    lines.push("---", "");
  }

  lines.push("## Apex Classes (All)", "");
  lines.push("| Class | Category | Lines | API Version |");
  lines.push("|-------|----------|-------|-------------|");
  for (const c of data.apexClasses.sort((a, b) => a.name.localeCompare(b.name))) {
    lines.push(`| ${c.name} | ${c.category} | ${c.linesOfCode} | ${c.apiVersion} |`);
  }
  lines.push("");

  return lines.join("\n");
}

function generateMigrationSummary(automation: AutomationExport, schema?: SchemaExport): string {
  const lines: string[] = [
    "# Migration Summary", "",
    `> Generated: ${automation.exportDate}`, "",
    "## Org Overview", "",
  ];

  if (schema) {
    lines.push(
      `| Metric | Count |`, `|--------|-------|`,
      `| Custom Objects | ${schema.objects.filter((o) => o.isCustom).length} |`,
      `| Standard Objects (in use) | ${schema.objects.filter((o) => !o.isCustom).length} |`,
      `| Total Fields | ${schema.totalFields} |`,
      `| Total Relationships | ${schema.totalRelationships} |`,
      `| Active Flows | ${automation.totals.flows} |`,
      `| Active Validation Rules | ${automation.totals.validationRules} |`,
      `| Workflow Rules | ${automation.totals.workflowRules} |`,
      `| Apex Triggers | ${automation.totals.apexTriggers} |`,
      `| Apex Classes | ${automation.totals.apexClasses} |`,
      `| Approval Processes | ${automation.totals.approvalProcesses} |`, ""
    );
  }

  if (schema) {
    lines.push("## Object Priority Matrix", "");
    lines.push("Objects ranked by migration complexity (fields + relationships + automation):", "");
    lines.push("| Object | Fields | Relationships | Automation | Priority |");
    lines.push("|--------|--------|--------------|------------|----------|");

    const objectAutomation = new Map<string, number>();
    for (const f of automation.flows) {
      if (f.triggerObject) objectAutomation.set(f.triggerObject, (objectAutomation.get(f.triggerObject) || 0) + 1);
    }
    for (const v of automation.validationRules) objectAutomation.set(v.objectName, (objectAutomation.get(v.objectName) || 0) + 1);
    for (const t of automation.apexTriggers) objectAutomation.set(t.objectName, (objectAutomation.get(t.objectName) || 0) + 1);

    const ranked = schema.objects
      .map((obj) => {
        const autoCount = objectAutomation.get(obj.apiName) || 0;
        const score = obj.fieldCount + obj.relationshipCount * 2 + autoCount * 5;
        const priority = score > 80 ? "High" : score > 30 ? "Medium" : "Low";
        return { ...obj, autoCount, score, priority };
      })
      .sort((a, b) => b.score - a.score);

    for (const obj of ranked) {
      lines.push(`| ${obj.apiName} | ${obj.fieldCount} | ${obj.relationshipCount} | ${obj.autoCount} | **${obj.priority}** |`);
    }
    lines.push("");
  }

  if (schema) {
    const picklists: { object: string; field: string; values: string[] }[] = [];
    for (const obj of schema.objects) {
      for (const f of obj.fields) {
        if (f.picklistValues && f.picklistValues.length > 0) {
          picklists.push({
            object: obj.apiName,
            field: f.apiName,
            values: f.picklistValues.filter((pv) => pv.active).map((pv) => pv.value),
          });
        }
      }
    }

    if (picklists.length > 0) {
      lines.push("## Picklist / Enum Inventory", "");
      lines.push("These become Postgres enum types or lookup tables:", "");
      lines.push("| Object | Field | Values |");
      lines.push("|--------|-------|--------|");
      for (const p of picklists) {
        const valuesStr = p.values.length <= 5
          ? p.values.join(", ")
          : p.values.slice(0, 5).join(", ") + ` (+${p.values.length - 5} more)`;
        lines.push(`| ${p.object} | ${p.field} | ${valuesStr} |`);
      }
      lines.push("");
    }
  }

  lines.push("## Migration Checklist", "");

  if (schema) {
    const customCount = schema.objects.filter((o) => o.isCustom).length;
    lines.push(`- [ ] Create ${customCount} Supabase tables for custom objects`);
    const picklists = schema.objects.flatMap((o) => o.fields.filter((f) => f.picklistValues && f.picklistValues.length > 0));
    if (picklists.length > 0) lines.push(`- [ ] Create ${picklists.length} enum types / lookup tables from picklists`);
    const lookups = schema.objects.flatMap((o) => o.fields.filter((f) => f.referenceTo));
    lines.push(`- [ ] Create ${lookups.length} foreign key relationships`);
  }

  if (automation.totals.flows > 0) lines.push(`- [ ] Rebuild ${automation.totals.flows} Flows as DB triggers / Edge Functions / components`);
  if (automation.totals.validationRules > 0) lines.push(`- [ ] Convert ${automation.totals.validationRules} validation rules to Zod schemas + CHECK constraints`);
  if (automation.totals.apexTriggers > 0) lines.push(`- [ ] Port ${automation.totals.apexTriggers} Apex triggers to application logic`);

  const businessClasses = automation.apexClasses.filter((c) => c.category === "business-logic");
  if (businessClasses.length > 0) lines.push(`- [ ] Review ${businessClasses.length} Apex business logic classes for porting`);
  if (automation.totals.approvalProcesses > 0) lines.push(`- [ ] Design approval workflows for ${automation.totals.approvalProcesses} approval processes`);

  lines.push("- [ ] Design RLS policies based on Salesforce profiles/permission sets");
  lines.push("- [ ] Plan data migration (records, attachments, files)");
  lines.push("- [ ] Map record types to application logic");
  lines.push("");

  return lines.join("\n");
}
