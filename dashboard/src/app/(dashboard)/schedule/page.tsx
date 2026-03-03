import { getUnpaidPayments } from "@/lib/queries/payments";
import { getInstanceUrl } from "@/lib/salesforce";
import { MonthlySchedule } from "@/components/monthly-schedule";

export const dynamic = "force-dynamic";

export default async function SchedulePage() {
  const payments = await getUnpaidPayments();
  const instanceUrl = await getInstanceUrl();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Payment Schedule</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Upcoming payments grouped by month
        </p>
      </div>
      <MonthlySchedule payments={payments} instanceUrl={instanceUrl} />
    </div>
  );
}
