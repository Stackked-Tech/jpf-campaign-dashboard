// --- Schema types (Phase 2 output) ---

export interface PicklistValue {
  label: string;
  value: string;
  active: boolean;
}

export interface FieldInfo {
  apiName: string;
  label: string;
  type: string;
  supabaseType: string;
  length: number | null;
  required: boolean;
  unique: boolean;
  externalId: boolean;
  defaultValue: unknown;
  helpText: string | null;
  formula: string | null;
  picklistValues: PicklistValue[] | null;
  referenceTo: string[] | null;
  relationshipName: string | null;
  relationshipType: "Lookup" | "MasterDetail" | null;
}

export interface ChildRelationship {
  childObject: string;
  childField: string;
  relationshipName: string | null;
  cascadeDelete: boolean;
}

export interface RecordTypeInfo {
  name: string;
  developerName: string;
  description: string | null;
  active: boolean;
  defaultRecordTypeMapping: boolean;
}

export interface ObjectSchema {
  apiName: string;
  label: string;
  labelPlural: string;
  isCustom: boolean;
  keyPrefix: string | null;
  recordTypes: RecordTypeInfo[];
  fields: FieldInfo[];
  childRelationships: ChildRelationship[];
  fieldCount: number;
  relationshipCount: number;
}

export interface SchemaExport {
  exportDate: string;
  orgId: string;
  orgName: string;
  apiVersion: string;
  objects: ObjectSchema[];
  totalObjects: number;
  totalFields: number;
  totalRelationships: number;
}

// --- Automation types (Phase 3 output) ---

export interface FlowInfo {
  id: string;
  developerName: string;
  description: string | null;
  versionNumber: number;
  status: string;
  processType: string;
  triggerType: string | null;
  triggerObject: string | null;
  migrationTarget: string;
}

export interface ValidationRuleInfo {
  id: string;
  objectName: string;
  ruleName: string;
  active: boolean;
  errorMessage: string;
  formula: string;
  migrationTarget: string;
}

export interface WorkflowRuleInfo {
  id: string;
  name: string;
  objectName: string;
  metadata: Record<string, unknown>;
}

export interface ApexTriggerInfo {
  id: string;
  name: string;
  objectName: string;
  body: string;
  apiVersion: string;
  linesOfCode: number;
}

export interface ApexClassInfo {
  id: string;
  name: string;
  body: string;
  apiVersion: string;
  linesOfCode: number;
  category: "business-logic" | "test" | "utility" | "controller" | "unknown";
}

export interface ApprovalProcessInfo {
  id: string;
  developerName: string;
  description: string | null;
  objectName: string;
}

export interface DependencyInfo {
  componentName: string;
  componentType: string;
  referencedName: string;
  referencedType: string;
}

export interface AutomationExport {
  exportDate: string;
  orgId: string;
  flows: FlowInfo[];
  validationRules: ValidationRuleInfo[];
  workflowRules: WorkflowRuleInfo[];
  apexTriggers: ApexTriggerInfo[];
  apexClasses: ApexClassInfo[];
  approvalProcesses: ApprovalProcessInfo[];
  dependencies: DependencyInfo[];
  totals: {
    flows: number;
    validationRules: number;
    workflowRules: number;
    apexTriggers: number;
    apexClasses: number;
    approvalProcesses: number;
  };
}

// --- Auth types ---

export interface OrgInfo {
  accessToken: string;
  instanceUrl: string;
  orgId: string;
  username: string;
  alias: string;
}
