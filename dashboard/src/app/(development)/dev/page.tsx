export const dynamic = "force-dynamic";

import { getEmailActivity, getCallActivity, getMeetingActivity } from "@/lib/queries/activities";
import { getFYPayments } from "@/lib/queries/dev-payments";
import { getInstanceUrl } from "@/lib/salesforce";
import { DevDashboard } from "@/components/dev/dev-dashboard";

export default async function DevPage() {
  const [emails, calls, meetings, payments, instanceUrl] = await Promise.all([
    getEmailActivity(),
    getCallActivity(),
    getMeetingActivity(),
    getFYPayments(),
    getInstanceUrl(),
  ]);

  return (
    <DevDashboard
      emails={emails}
      calls={calls}
      meetings={meetings}
      payments={payments}
      instanceUrl={instanceUrl}
    />
  );
}
