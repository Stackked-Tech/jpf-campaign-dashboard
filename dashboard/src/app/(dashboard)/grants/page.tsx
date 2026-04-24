import { getUnifiedGrants, getGrantKpis } from "@/lib/grants/queries";
import { KpiCards } from "@/components/grants/kpi-cards";
import { GrantsList } from "@/components/grants/grants-list";

export const dynamic = "force-dynamic";

export default async function GrantsPage() {
  const [rows, kpis] = await Promise.all([getUnifiedGrants(), getGrantKpis()]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Grants</h1>
        <p className="text-sm text-muted-foreground mt-1">
          All grant pursuits from Salesforce and Instrumentl, unified.
        </p>
      </div>

      <KpiCards kpis={kpis} />

      <GrantsList rows={rows} />
    </div>
  );
}
