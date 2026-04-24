import { notFound } from "next/navigation";
import {
  getGrantDetail,
  getGrantColumnKeys,
  getFieldDefinitions,
} from "@/lib/grants/queries";
import { GrantDetail } from "@/components/grants/grant-detail";

export const dynamic = "force-dynamic";

export default async function GrantDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [detail, grantColumns, fieldDefinitions] = await Promise.all([
    getGrantDetail(id),
    getGrantColumnKeys(),
    getFieldDefinitions(),
  ]);

  if (!detail) notFound();

  return (
    <GrantDetail
      row={detail.row}
      funderName={detail.funder_name}
      grantColumns={grantColumns}
      fieldDefinitions={fieldDefinitions}
      reportsCount={detail.reports_count}
      openTasksCount={detail.open_tasks_count}
      attachmentsCount={detail.attachments_count}
      notesCount={detail.notes_count}
      overdueReportsCount={detail.overdue_reports_count}
    />
  );
}
