"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, CalendarRange, FileText, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  showSettings: boolean;
}

const baseItems = [
  { href: "/grants", label: "Overview", icon: BarChart3 },
  { href: "/grants/pipeline", label: "Pipeline", icon: CalendarRange },
  { href: "/grants/reports", label: "Reports", icon: FileText },
];

export function GrantsSidebar({ showSettings }: Props) {
  const pathname = usePathname();
  const navItems = showSettings
    ? [...baseItems, { href: "/grants/settings", label: "Settings", icon: Settings }]
    : baseItems;

  return (
    <aside className="w-60 bg-sidebar h-screen sticky top-0 flex flex-col overflow-y-auto">
      <div className="px-5 py-6 border-b border-white/10">
        <Link href="/grants" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.jobspartnership.org/wp-content/uploads/JPF-brandmark-secondary.svg"
            alt="Jobs Partnership of Florida"
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>
        <p className="mt-2 text-xs text-sidebar-foreground/60 font-medium tracking-wide uppercase">
          Grants Hub
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
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

      <div className="px-5 py-4 border-t border-white/10">
        <p className="text-xs text-sidebar-foreground/40">Jobs Partnership of Florida</p>
      </div>
    </aside>
  );
}
