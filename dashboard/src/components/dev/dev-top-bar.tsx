"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dev" },
  { label: "Donors", href: "/dev/donors" },
];

export function DevTopBar() {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/login");
  }

  return (
    <header className="h-14 bg-white/80 backdrop-blur-xl border-b border-border/60 px-6 lg:px-10 flex items-center shrink-0 z-20">
      <div className="flex items-center gap-3 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://www.jobspartnership.org/wp-content/uploads/JPF-brandmark-secondary.svg"
          alt="Jobs Partnership of Florida"
          className="h-7 w-auto"
        />
        <div className="h-5 w-px bg-border/60" />
        <span className="text-sm font-semibold tracking-tight text-foreground">
          Development Hub
        </span>
      </div>

      <nav className="flex items-center gap-1 ml-8 flex-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dev"
              ? pathname === "/dev"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium rounded-lg px-3 py-1.5 transition-all duration-150",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-lg px-3 py-1.5 hover:bg-muted transition-all duration-150 shrink-0"
      >
        <LogOut className="h-3.5 w-3.5" />
        Sign out
      </button>
    </header>
  );
}
