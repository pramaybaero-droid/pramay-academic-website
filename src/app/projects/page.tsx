import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectExplorer } from "@/components/sections/project-explorer";
import { LinkButton } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { TriaxialCellVisual } from "@/components/visuals/triaxial-cell-visual";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects and Software",
  description:
    "Scientific software, triaxial simulation tools, DEM workflows, contact-model comparisons, constitutive modelling code, and data analysis pipelines."
};

const featured = projects.find((project) => project.id === "triaxial-test-simulator") ?? projects[0];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects and software"
        title="Computational tools for granular mechanics, simulation workflows, and model interpretation."
        description="Project cards are structured for GitHub links, live demos, documentation, preview images or videos, tags, and status labels."
        primaryAction={{ label: "Open simulator page", href: "/simulations" }}
        secondaryAction={{ label: "View media", href: "/media" }}
      />

      <section className="container-shell grid gap-8 py-20 lg:grid-cols-[1fr_0.86fr]">
        <Reveal>
          <article className="instrument-card overflow-hidden">
            <div className="relative aspect-[16/9] border-b border-line/40">
              <Image src={featured.image} alt={`${featured.title} preview`} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="eyebrow mb-4">Featured platform</p>
              <h2 className="font-display text-4xl text-foreground">{featured.title}</h2>
              <p className="mt-4 text-base leading-8 text-muted">{featured.longDescription}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton href="/simulations#interactive-triaxial-test-simulator">Launch simulator</LinkButton>
                <LinkButton href={featured.github || "#"} variant="ghost" external={featured.github?.startsWith("http")}>
                  GitHub
                </LinkButton>
              </div>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <TriaxialCellVisual />
        </Reveal>
      </section>

      <section className="container-shell py-12">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Software archive"
            title="Reusable structure for scientific apps, notebooks, workflows, and documentation."
            description="Replace placeholder repository URLs and screenshots as projects mature."
          />
          <a href="/simulations" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan">
            Simulation platform
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
        <ProjectExplorer projects={projects} />
      </section>
    </>
  );
}
