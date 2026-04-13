import { GrantsSidebar } from "@/components/grants/grants-sidebar";
import { isAdmin } from "@/lib/grants/role";

export default async function GrantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await isAdmin();
  return (
    <div className="flex min-h-screen">
      <GrantsSidebar showSettings={admin} />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
