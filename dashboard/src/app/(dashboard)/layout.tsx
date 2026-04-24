import { cookies } from "next/headers";
import { NavSidebar, type Role } from "@/components/nav-sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const role = (cookieStore.get("auth_token")?.value ?? "admin") as Role;

  return (
    <div className="flex min-h-screen">
      <NavSidebar role={role} />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
