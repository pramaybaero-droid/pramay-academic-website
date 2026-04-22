"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight, BookOpen, Code2, Play } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const tags = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((project) => project.tags))).sort()],
    [projects]
  );
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? projects : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={cn(
              "focus-ring rounded-full border px-3 py-2 text-sm font-semibold transition",
              activeTag === tag
                ? "border-cyan/70 bg-cyan/10 text-cyan"
                : "border-line/50 bg-panel/40 text-muted hover:border-cyan/50 hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <article key={project.id} id={project.id} className="instrument-card overflow-hidden">
            <div className="relative aspect-[16/10] border-b border-line/40">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full border border-line/50 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan backdrop-blur">
                {project.status}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{project.longDescription}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-line/50 px-3 py-1 text-xs text-muted">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <ProjectLink label="GitHub" href={project.github} icon={<Code2 className="h-3.5 w-3.5" />} />
                <ProjectLink label="Live demo" href={project.demo} icon={<Play className="h-3.5 w-3.5" />} />
                <ProjectLink label="Docs" href={project.docs} icon={<BookOpen className="h-3.5 w-3.5" />} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProjectLink({ label, href, icon }: { label: string; href?: string; icon: React.ReactNode }) {
  return (
    <a
      href={href || "#"}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={cn(
        "focus-ring inline-flex h-9 items-center gap-2 rounded-[8px] border border-line/50 bg-background/40 px-3 text-xs font-semibold text-muted transition hover:border-cyan/50 hover:text-foreground",
        !href && "pointer-events-none opacity-50"
      )}
    >
      {icon}
      {label}
      {href?.startsWith("http") ? <ArrowUpRight aria-hidden="true" className="h-3 w-3" /> : null}
    </a>
  );
}
