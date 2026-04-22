"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Search, X } from "lucide-react";
import { navItems } from "@/content/profile";
import { projects } from "@/content/projects";
import { publications } from "@/content/publications";
import { researchThemes } from "@/content/research";
import { cn } from "@/lib/utils";

type SearchItem = {
  title: string;
  detail: string;
  href: string;
  category: string;
};

const baseItems: SearchItem[] = [
  ...navItems.map((item) => ({
    title: item.label,
    detail: "Site page",
    href: item.href,
    category: "Navigation"
  })),
  ...researchThemes.map((theme) => ({
    title: theme.title,
    detail: theme.summary,
    href: `/research#${theme.id}`,
    category: "Research"
  })),
  ...projects.map((project) => ({
    title: project.title,
    detail: project.description,
    href: `/projects#${project.id}`,
    category: "Projects"
  })),
  ...publications.map((publication) => ({
    title: publication.title,
    detail: publication.venue,
    href: "/publications",
    category: "Publications"
  }))
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return baseItems.slice(0, 9);
    }
    return baseItems
      .filter((item) =>
        `${item.title} ${item.detail} ${item.category}`.toLowerCase().includes(normalized)
      )
      .slice(0, 10);
  }, [query]);

  const navigate = (href: string) => {
    window.location.href = href;
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring hidden h-10 items-center gap-2 rounded-[8px] border border-line/50 bg-panel/50 px-3 text-sm text-muted transition duration-300 ease-instrument hover:border-cyan/60 hover:text-foreground md:inline-flex"
        aria-label="Open site search"
      >
        <Search aria-hidden="true" className="h-4 w-4" />
        <span>Search</span>
        <Command aria-hidden="true" className="h-3.5 w-3.5 text-cyan" />
      </button>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-line/50 bg-panel/50 text-foreground transition duration-300 ease-instrument hover:border-cyan/60 md:hidden"
        aria-label="Open site search"
      >
        <Search aria-hidden="true" className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[90] bg-background/80 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              className="mx-auto mt-24 max-w-2xl overflow-hidden rounded-[10px] border border-line/60 bg-panel shadow-soft-glow"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-line/50 px-4 py-3">
                <Search aria-hidden="true" className="h-5 w-5 text-cyan" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-11 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted"
                  placeholder="Search research, projects, pages"
                />
                <button
                  type="button"
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-[8px] text-muted hover:text-foreground"
                  aria-label="Close search"
                  onClick={() => setOpen(false)}
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[420px] overflow-y-auto p-2">
                {filtered.length ? (
                  filtered.map((item, index) => (
                    <button
                      key={`${item.category}-${item.title}`}
                      type="button"
                      onClick={() => navigate(item.href)}
                      className={cn(
                        "focus-ring flex w-full flex-col rounded-[8px] px-4 py-3 text-left transition duration-200 hover:bg-cyan/10",
                        index === 0 && "bg-cyan/10"
                      )}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">
                        {item.category}
                      </span>
                      <span className="mt-1 font-semibold text-foreground">{item.title}</span>
                      <span className="mt-1 line-clamp-2 text-sm leading-6 text-muted">{item.detail}</span>
                    </button>
                  ))
                ) : (
                  <p className="px-4 py-10 text-center text-sm text-muted">No matching results.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
