import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getGrantById, getReportsForGrant, getTasksForGrant,
  getAttachmentsForGrant, getNotesForGrant, getFieldDefinitions,
} from "@/lib/grants/queries";
import { getInstanceUrl } from "@/lib/salesforce";
import { GrantDetailTabs } from "@/components/grants/grant-detail-tabs";
import { GrantDetailOverviewEditable } from "@/components/grants/grant-detail-overview-editable";
import { StatusBadge } from "@/components/grants/status-badge";
import { MarkAwardedButton } from "@/components/grants/mark-awarded-button";
import { SfSyncBanner } from "@/components/grants/sf-sync-banner";
import { getCurrentRole } from "@/lib/grants/role";
import { GrantDetailTasks } from "@/components/grants/grant-detail-tasks";
import { GrantDetailNotes } from "@/components/grants/grant-detail-notes";
import { GrantDetailReports } from "@/components/grants/grant-detail-reports";
import { GrantDetailFiles } from "@/components/grants/grant-detail-files";
import { formatCurrency, formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

interface PageProps { params: Promise<{ id: string }>; }

export default async function GrantDetailPage({ params }: PageProps) {
  const { id } = await params;
  const grant = await getGrantById(id);
  if (!grant) notFound();

  const [reports, tasks, attachments, notes, instanceUrl, fieldDefinitions] = await Promise.all([
    getReportsForGrant(id),
    getTasksForGrant(id),
    getAttachmentsForGrant(id),
    getNotesForGrant(id),
    getInstanceUrl(),
    getFieldDefinitions(grant.template_id),
  ]);

  const nextDueReport = reports.find((r) => !r.submitted_date) ?? null;

  const role = await getCurrentRole();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/grants/pipeline" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-3">
          <ArrowLeft className="h-4 w-4" /> Back to Pipeline
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl font-bold">{grant.funder_name}</h1>
          <StatusBadge status={grant.status} />
          <span className="ml-auto text-sm text-muted-foreground">
            {formatCurrency(grant.amount_awarded ?? grant.request_amount)}
            {grant.award_date && ` · awarded ${formatDate(grant.award_date)}`}
          </span>
          <MarkAwardedButton grantId={grant.id} currentStatus={grant.status} />
        </div>
      </div>

      {(grant.status === "awarded" || grant.status === "received" || grant.status === "open") && !grant.sf_opportunity_id && (
        <SfSyncBanner grantId={grant.id} />
      )}

      <GrantDetailTabs
        tabs={[
          { key: "overview", label: "Overview" },
          { key: "tasks", label: `Tasks (${tasks.length})` },
          { key: "reports", label: `Reports (${reports.length})` },
          { key: "files", label: `Files (${attachments.length})` },
          { key: "notes", label: "Notes" },
          { key: "participants", label: "Participants", disabled: true, disabledReason: "Coming in v2" },
        ]}
      >
        {{
          overview: <GrantDetailOverviewEditable grant={grant} instanceUrl={instanceUrl} nextDueReport={nextDueReport} fieldDefinitions={fieldDefinitions} />,
          tasks: <GrantDetailTasks grantId={grant.id} role={role} initialTasks={tasks} />,
          reports: <GrantDetailReports grantId={grant.id} initialReports={reports} />,
          files: <GrantDetailFiles grantId={grant.id} role={role} initialAttachments={attachments} />,
          notes: <GrantDetailNotes grantId={grant.id} initialNotes={notes} />,
          participants: <div className="text-sm text-muted-foreground">Coming in v2.</div>,
        }}
      </GrantDetailTabs>
    </div>
  );
}
