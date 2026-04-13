"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab { key: string; label: string; disabled?: boolean; disabledReason?: string; }
interface Props { tabs: Tab[]; children: Record<string, React.ReactNode>; }

export function GrantDetailTabs({ tabs, children }: Props) {
  const firstEnabled = tabs.find((t) => !t.disabled)?.key ?? tabs[0].key;
  const [active, setActive] = useState<string>(firstEnabled);
  return (
    <div>
      <div className="flex border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => !t.disabled && setActive(t.key)}
            disabled={t.disabled}
            title={t.disabled ? t.disabledReason : undefined}
            className={cn(
              "px-4 py-2.5 text-sm font-medium border-b-2 -mb-px",
              t.disabled ? "text-muted-foreground/50 cursor-not-allowed border-transparent" :
              active === t.key ? "text-primary border-primary" :
              "text-muted-foreground border-transparent hover:text-foreground"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{children[active]}</div>
    </div>
  );
}
