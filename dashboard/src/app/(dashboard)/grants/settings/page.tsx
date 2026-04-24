import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getFieldDefinitions } from "@/lib/grants/queries";
import { FieldList } from "@/components/grants/custom-field-designer/field-list";

export const dynamic = "force-dynamic";

export default async function GrantsSettingsPage() {
  const fieldDefinitions = await getFieldDefinitions();

  return (
    <div className="space-y-6">
      <Link
        href="/grants"
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-3 w-3" />
        All grants
      </Link>

      <div>
        <h1 className="text-2xl font-bold">Grants settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Configure dashboard-only custom fields for grants.
        </p>
      </div>

      <FieldList fieldDefinitions={fieldDefinitions} />
    </div>
  );
}
