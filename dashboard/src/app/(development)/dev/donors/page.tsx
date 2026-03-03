export const dynamic = "force-dynamic";

import { getDonorContacts } from "@/lib/queries/donors";
import { getInstanceUrl } from "@/lib/salesforce";
import { DonorTable } from "@/components/dev/donor-table";

export default async function DonorsPage() {
  const [donors, instanceUrl] = await Promise.all([
    getDonorContacts(),
    getInstanceUrl(),
  ]);

  return <DonorTable donors={donors} instanceUrl={instanceUrl} />;
}
