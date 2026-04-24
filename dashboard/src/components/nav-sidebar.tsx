"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarRange,
  Code,
  FileText,
  FolderOpen,
  Settings,
  LogOut,
  ArrowLeftRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type Role = "admin" | "dev" | "grants";

type Portal = "admin" | "grants";

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  /** If set, hide this item unless current role is included. */
  roles?: Role[];
}

const NAV: Record<Portal, NavItem[]> = {
  admin: [
    { href: "/campaigns", label: "Campaigns", icon: BarChart3 },
    { href: "/schedule", label: "Schedule", icon: CalendarRange },
    { href: "/invoices", label: "Invoices", icon: FileText },
  ],
  grants: [
    { href: "/grants", label: "Grants", icon: FolderOpen },
    { href: "/grants/reports", label: "Reports", icon: CalendarRange },
    { href: "/grants/settings", label: "Field settings", icon: Settings, roles: ["admin"] },
  ],
};

const PORTAL_LABEL: Record<Portal, string> = {
  admin: "Campaign Dashboard",
  grants: "Grants Portal",
};

function portalFromPath(pathname: string): Portal {
  if (pathname.startsWith("/grants")) return "grants";
  return "admin";
}

export function NavSidebar({ role }: { role: Role }) {
  const pathname = usePathname();
  const router = useRouter();
  const portal = portalFromPath(pathname);

  const items = NAV[portal].filter(
    (item) => !item.roles || item.roles.includes(role)
  );

  const signOut = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/");
  };

  // Admins can freely hop between portals without re-auth. Non-admins can't
  // see the other portal anyway (middleware enforces the boundary).
  const otherPortal: Portal = portal === "admin" ? "grants" : "admin";
  const canSwitchPortal = role === "admin";

  return (
    <aside className="w-60 bg-sidebar h-screen sticky top-0 flex flex-col overflow-y-auto">
      <div className="px-5 py-6 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.jobspartnership.org/wp-content/uploads/JPF-brandmark-secondary.svg"
            alt="Jobs Partnership of Florida"
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>
        <p className="mt-2 text-xs text-sidebar-foreground/60 font-medium tracking-wide uppercase">
          {PORTAL_LABEL[portal]}
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {items.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/grants" &&
              pathname.startsWith("/grants/") &&
              !pathname.startsWith("/grants/reports") &&
              !pathname.startsWith("/grants/settings")) ||
            (item.href !== "/grants" && pathname.startsWith(item.href + "/"));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-active text-white"
                  : "text-sidebar-foreground hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {canSwitchPortal && (
        <div className="px-3 pb-2">
          <div className="border-t border-white/10 pt-3">
            <Link
              href={otherPortal === "admin" ? "/campaigns" : "/grants"}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-white/10 hover:text-white transition-colors"
            >
              <ArrowLeftRight className="h-4 w-4" />
              {PORTAL_LABEL[otherPortal]}
            </Link>
          </div>
        </div>
      )}

      {role === "admin" && (
        <div className="px-3 pb-2">
          <div className={canSwitchPortal ? "" : "border-t border-white/10 pt-3"}>
            <Link
              href="/dev/donors"
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/dev")
                  ? "bg-sidebar-active text-white"
                  : "text-sidebar-foreground hover:bg-white/10 hover:text-white"
              )}
            >
              <Code className="h-4 w-4" />
              Dev Portal
            </Link>
          </div>
        </div>
      )}

      <div className="px-3 pb-2">
        <div className="border-t border-white/10 pt-3">
          <button
            onClick={signOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-white/10 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign out / switch role
          </button>
        </div>
      </div>

      <div className="px-5 py-4 border-t border-white/10">
        <p className="text-xs text-sidebar-foreground/40">
          Jobs Partnership of Florida
        </p>
      </div>
    </aside>
  );
}
