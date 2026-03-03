import { getUnpaidPayments } from "@/lib/queries/payments";
import { getInstanceUrl } from "@/lib/salesforce";
import { InvoiceTable } from "@/components/invoice-table";

export const dynamic = "force-dynamic";

export default async function InvoicesPage() {
  const payments = await getUnpaidPayments();
  const instanceUrl = await getInstanceUrl();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Unpaid Invoices</h1>
      <InvoiceTable payments={payments} instanceUrl={instanceUrl} />
    </div>
  );
}
