"use client";

import { useMemo, useState } from "react";
import { Copy, ExternalLink, FileText, Search } from "lucide-react";
import type { Publication } from "@/content/publications";
import { publicationTopics } from "@/content/publications";
import { cn, uniqueSorted } from "@/lib/utils";

export function PublicationExplorer({ publications }: { publications: Publication[] }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const [type, setType] = useState("All");
  const [year, setYear] = useState("All");

  const years = useMemo(
    () => ["All", ...uniqueSorted(publications.map((publication) => publication.year).filter(Boolean))],
    [publications]
  );
  const types = useMemo(
    () => ["All", ...uniqueSorted(publications.map((publication) => publication.type))],
    [publications]
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return publications.filter((publication) => {
      const matchesQuery = normalized
        ? `${publication.title} ${publication.authors} ${publication.venue} ${publication.topics.join(" ")}`
            .toLowerCase()
            .includes(normalized)
        : true;
      const matchesTopic = topic === "All" || publication.topics.includes(topic);
      const matchesType = type === "All" || publication.type === type;
      const matchesYear = year === "All" || String(publication.year) === year;
      return matchesQuery && matchesTopic && matchesType && matchesYear;
    });
  }, [publications, query, topic, type, year]);

  const copyBibtex = async (bibtex?: string) => {
    if (!bibtex) {
      return;
    }
    await navigator.clipboard.writeText(bibtex);
  };

  return (
    <div className="grid gap-6">
      <div className="instrument-card grid gap-3 p-4 lg:grid-cols-[1.2fr_0.8fr_0.7fr_0.7fr]">
        <label className="relative">
          <span className="sr-only">Search publications</span>
          <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="focus-ring h-11 w-full rounded-[8px] border border-line/50 bg-background/50 pl-10 pr-3 text-sm text-foreground placeholder:text-muted"
            placeholder="Search title, author, topic"
          />
        </label>
        <FilterSelect label="Topic" value={topic} options={["All", ...publicationTopics]} onChange={setTopic} />
        <FilterSelect label="Type" value={type} options={types.map(String)} onChange={setType} />
        <FilterSelect label="Year" value={year} options={years.map(String)} onChange={setYear} />
      </div>

      <div className="grid gap-4">
        {filtered.map((publication) => (
          <article
            key={publication.id}
            className={cn(
              "instrument-card p-5",
              publication.featured && "border-gold/50 bg-gold/10"
            )}
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  {publication.selected ? (
                    <span className="rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                      Selected
                    </span>
                  ) : null}
                  {publication.placeholder ? (
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      Placeholder
                    </span>
                  ) : null}
                </div>
                <h3 className="text-xl font-semibold leading-snug text-foreground">{publication.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{publication.authors}</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {publication.venue} - {publication.year} - {publication.type}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {publication.topics.map((item) => (
                    <span key={item} className="rounded-full border border-line/50 px-3 py-1 text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <PublicationLink label="DOI" href={publication.doi} />
                <PublicationLink label="PDF" href={publication.pdf} icon={<FileText className="h-3.5 w-3.5" />} />
                <PublicationLink label="Preprint" href={publication.preprint} />
                <button
                  type="button"
                  onClick={() => copyBibtex(publication.bibtex)}
                  disabled={!publication.bibtex}
                  className="focus-ring inline-flex h-9 items-center gap-2 rounded-[8px] border border-line/50 bg-background/40 px-3 text-xs font-semibold text-muted transition hover:border-cyan/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Copy aria-hidden="true" className="h-3.5 w-3.5" />
                  BibTeX
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring h-11 w-full rounded-[8px] border border-line/50 bg-background/50 px-3 text-sm text-foreground"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {label}: {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function PublicationLink({
  label,
  href,
  icon
}: {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}) {
  return (
    <a
      href={href || "#"}
      aria-disabled={!href}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
      className={cn(
        "focus-ring inline-flex h-9 items-center gap-2 rounded-[8px] border border-line/50 bg-background/40 px-3 text-xs font-semibold text-muted transition hover:border-cyan/50 hover:text-foreground",
        !href && "pointer-events-none opacity-50"
      )}
    >
      {icon || <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />}
      {label}
    </a>
  );
}
