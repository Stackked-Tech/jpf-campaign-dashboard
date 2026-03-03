"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BarChart3, CalendarRange, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/campaigns", label: "Campaigns", icon: BarChart3 },
  { href: "/schedule", label: "Schedule", icon: CalendarRange },
  { href: "/invoices", label: "Invoices", icon: FileText },
];

export function NavSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-sidebar h-screen sticky top-0 flex flex-col overflow-y-auto">
      {/* Brand header */}
      <div className="px-5 py-6 border-b border-white/10">
        <Link href="/campaigns" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.jobspartnership.org/wp-content/uploads/JPF-brandmark-secondary.svg"
            alt="Jobs Partnership of Florida"
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>
        <p className="mt-2 text-xs text-sidebar-foreground/60 font-medium tracking-wide uppercase">
          Campaign Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
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

      {/* Footer */}
      <div className="px-5 py-4 border-t border-white/10">
        <p className="text-xs text-sidebar-foreground/40">
          Jobs Partnership of Florida
        </p>
      </div>
    </aside>
  );
}
