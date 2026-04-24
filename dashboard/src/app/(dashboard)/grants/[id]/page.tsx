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
      reports={detail.reports}
      tasks={detail.tasks}
      attachments={detail.attachments}
      notes={detail.notes}
    />
  );
}
