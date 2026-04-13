import { getGrants } from "@/lib/grants/queries";
import { PipelineTable } from "@/components/grants/pipeline-table";

export const dynamic = "force-dynamic";

export default async function PipelinePage() {
  const grants = await getGrants();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Pipeline</h1>
        <p className="text-sm text-muted-foreground mt-1">All grants grouped by status</p>
      </div>
      <PipelineTable grants={grants} />
    </div>
  );
}
