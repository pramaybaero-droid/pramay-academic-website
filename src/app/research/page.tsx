import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { ResearchThemeExplorer } from "@/components/sections/research-theme-explorer";
import { ResearchNetwork } from "@/components/visuals/research-network";
import { WaveStrip } from "@/components/visuals/wave-strip";
import { researchThemes } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research themes in granular materials, constitutive modelling, wave propagation, DEM, contact mechanics, and data-driven modelling."
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Granular systems studied across particles, waves, constitutive response, and data."
        description="A modular view of the research themes, key questions, methods, representative output slots, and related projects."
        primaryAction={{ label: "View Projects", href: "/projects" }}
        secondaryAction={{ label: "Publications", href: "/publications" }}
      />

      <section className="container-shell py-20">
        <ResearchThemeExplorer themes={researchThemes} />
      </section>

      <section className="container-shell grid gap-8 py-10 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <ResearchNetwork />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="instrument-card p-6 sm:p-8">
            <SectionHeader
              eyebrow="Dynamic motif"
              title="Wave propagation as a diagnostic of evolving granular fabric."
              description="The strip below is a lightweight interaction motif that can later be replaced by simulation-derived wavefronts or live data."
            />
            <div className="mt-8">
              <WaveStrip />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
