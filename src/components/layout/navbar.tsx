"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CommandPalette } from "@/components/layout/command-palette";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navItems, profile } from "@/content/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[60] border-b border-line/40 bg-background/70 backdrop-blur-2xl">
      <nav className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-[8px]" onClick={() => setOpen(false)}>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-[8px] border border-cyan/50 bg-cyan/10 text-sm font-bold text-cyan">
            P
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-gold" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold leading-none text-foreground">{profile.shortName}</span>
            <span className="mt-1 block text-xs text-muted">Granular mechanics</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-[8px] px-3 py-2 text-sm font-medium text-muted transition duration-300 ease-instrument hover:bg-panel/70 hover:text-foreground",
                  active && "bg-cyan/10 text-cyan"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <CommandPalette />
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-line/50 bg-panel/50 text-foreground transition duration-300 ease-instrument hover:border-cyan/60 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" className="h-4 w-4" /> : <Menu aria-hidden="true" className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line/40 bg-background/95 lg:hidden">
          <div className="container-shell grid gap-1 py-4">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "focus-ring rounded-[8px] px-3 py-3 text-sm font-medium text-muted transition hover:bg-panel hover:text-foreground",
                    active && "bg-cyan/10 text-cyan"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
