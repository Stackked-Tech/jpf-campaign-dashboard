import { notFound } from "next/navigation";
import {
  getGrantDetail,
  getGrantColumnKeys,
  getFieldDefinitions,
} from "@/lib/grants/queries";
import { getPicklistOptions } from "@/lib/grants/sf-sync";
import { CORE_FIELD_COLUMNS } from "@/lib/grants/core-fields";
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

  // Scope picklist options to this grant's record type so that e.g. the
  // Stage dropdown shows only the stages valid for the Grant record type.
  const recordTypeId = (detail.row.record_type_id as string | null) ?? undefined;
  const picklistOptions = await getPicklistOptions(
    CORE_FIELD_COLUMNS,
    recordTypeId
  );

  return (
    <GrantDetail
      row={detail.row}
      funderName={detail.funder_name}
      grantColumns={grantColumns}
      fieldDefinitions={fieldDefinitions}
      picklistOptions={picklistOptions}
      reports={detail.reports}
      tasks={detail.tasks}
      attachments={detail.attachments}
      notes={detail.notes}
    />
  );
}
