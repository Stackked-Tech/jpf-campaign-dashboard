import { getTemplates } from "@/lib/grants/queries";
import { GrantCreateForm } from "@/components/grants/grant-create-form";

export const dynamic = "force-dynamic";

export default async function NewGrantPage() {
  const templates = await getTemplates();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">New grant</h1>
      <GrantCreateForm templates={templates} />
    </div>
  );
}
