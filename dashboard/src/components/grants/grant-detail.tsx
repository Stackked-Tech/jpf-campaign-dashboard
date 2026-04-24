import type {
  FieldDefinition,
  GrantReport,
  GrantTask,
  GrantAttachment,
  GrantNote,
} from "@/lib/grants/types";
import { GrantHeader } from "./grant-header";
import { GrantDetailTabs } from "./grant-detail-tabs";
import { CoreFieldsTab } from "./grant-fields/core-fields-tab";
import { CustomFieldsTab } from "./grant-fields/custom-fields-tab";
import { AllFieldsExpander } from "./grant-fields/all-fields-expander";
import { ReportsPanel } from "./grant-sidebar/reports-panel";
import { TasksPanel } from "./grant-sidebar/tasks-panel";
import { AttachmentsPanel } from "./grant-sidebar/attachments-panel";
import { NotesPanel } from "./grant-sidebar/notes-panel";

export interface GrantDetailProps {
  row: Record<string, unknown>;
  funderName: string | null;
  grantColumns: string[];
  fieldDefinitions: FieldDefinition[];
  reports: GrantReport[];
  tasks: GrantTask[];
  attachments: GrantAttachment[];
  notes: GrantNote[];
}

export function GrantDetail({
  row,
  funderName,
  grantColumns,
  fieldDefinitions,
  reports,
  tasks,
  attachments,
  notes,
}: GrantDetailProps) {
  const name = (row.name as string) ?? "(Unnamed grant)";
  const status = (row.stage_name as string) ?? null;
  const amount = (row.amount as number | null) ?? null;

  const customFieldKeys = fieldDefinitions.map((f) => f.key);

  const grantId = row.id as string;

  const tabs = [
    {
      key: "core",
      label: "Core fields",
      content: (
        <>
          <CoreFieldsTab grantId={grantId} row={row} funderName={funderName} />
          <AllFieldsExpander
            row={row}
            grantColumns={grantColumns}
            customFieldKeys={customFieldKeys}
          />
        </>
      ),
    },
    {
      key: "custom",
      label: "Custom fields",
      badge: fieldDefinitions.length || undefined,
      content: (
        <CustomFieldsTab
          grantId={grantId}
          row={row}
          fieldDefinitions={fieldDefinitions}
        />
      ),
    },
    {
      key: "activity",
      label: "Activity",
      content: (
        <div className="py-12 text-center text-sm text-muted-foreground">
          Activity feed rendering in Phase 4.
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <GrantHeader
        grantId={grantId}
        name={name}
        funderName={funderName}
        status={status}
        amount={amount}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <div>
          <GrantDetailTabs tabs={tabs} />
        </div>

        <div className="space-y-4">
          <ReportsPanel grantId={grantId} reports={reports} />
          <TasksPanel grantId={grantId} tasks={tasks} />
          <AttachmentsPanel grantId={grantId} attachments={attachments} />
          <NotesPanel grantId={grantId} notes={notes} />
        </div>
      </div>
    </div>
  );
}
