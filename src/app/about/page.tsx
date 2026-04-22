import type { Metadata } from "next";
import Image from "next/image";
import { Download } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { ResearchNetwork } from "@/components/visuals/research-network";
import { cv } from "@/content/cv";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Academic biography, research motivation, education, skills, and tools for B. Pramay."
};

const timeline = [
  {
    label: "B.E.",
    title: "Mechanical Engineering",
    description:
      "Built the foundation in mechanics, design, thermodynamics, materials, manufacturing, and computational thinking."
  },
  {
    label: "M.Tech",
    title: "Machine Design",
    description:
      "Advanced training in solid mechanics, numerical methods, mechanical systems, simulation, and design analysis."
  },
  {
    label: "PhD",
    title: "Aerospace Engineering, IISc Bengaluru",
    description:
      "Research focus on granular materials, constitutive behaviour, contact mechanics, DEM, triaxial simulation, and wave propagation."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A research profile built around mechanics, computation, and granular matter."
        description="This page is structured for a concise academic biography, research motivation, technical skills, and a clear progression from mechanical engineering to doctoral research at IISc Bengaluru."
        primaryAction={{ label: "Download CV", href: profile.cvPath }}
        secondaryAction={{ label: "Contact", href: "/contact" }}
      />

      <section className="container-shell grid gap-10 py-20 lg:grid-cols-[0.86fr_1.14fr]">
        <Reveal>
          <div className="research-gradient-border overflow-hidden rounded-[12px] bg-panel/60 p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
              <Image src={profile.portrait} alt="Headshot placeholder" fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="instrument-card p-6 sm:p-8">
            <p className="eyebrow mb-4">Academic bio</p>
            <div className="space-y-5 text-base leading-8 text-muted">
              <p>
                {profile.name} is a PhD Scholar in the {profile.department} at {profile.affiliation}, with academic training in mechanical engineering and machine design.
              </p>
              <p>
                The research focus is granular mechanics: how particle-scale contact interactions, evolving fabric, confinement, and loading history shape macroscopic response.
              </p>
              <p>
                The work is positioned at the intersection of DEM, contact mechanics, triaxial testing and simulation, wave propagation, constitutive modelling, and data-driven scientific computing.
              </p>
            </div>
            <div className="mt-8">
              <LinkButton href={profile.cvPath} icon="download" download>
                Download PDF CV
              </LinkButton>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="container-shell py-10">
        <SectionHeader
          eyebrow="Academic progression"
          title="From mechanical engineering foundations to doctoral work in granular mechanics."
          description="Replace institution names, years, thesis titles, and advisor details when ready."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {timeline.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <article className="instrument-card h-full p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-[8px] border border-cyan/40 bg-cyan/10 font-semibold text-cyan">
                  {item.label}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell grid gap-8 py-20 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <article className="instrument-card p-6 sm:p-8">
            <p className="eyebrow mb-4">Research motivation</p>
            <h2 className="font-display text-3xl text-foreground">
              Granular materials are simple in form, but mechanically subtle in response.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted">
              The central motivation is to connect contact-scale mechanics with continuum behaviour in a way that remains interpretable, experimentally meaningful, and useful for simulation-driven engineering analysis.
            </p>
            <p className="mt-4 text-base leading-8 text-muted">
              This site is intentionally structured so future publications, simulation tools, visualizations, and technical notes can be added without changing the identity of the website.
            </p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <ResearchNetwork />
        </Reveal>
      </section>

      <section className="container-shell py-10">
        <SectionHeader
          eyebrow="Skills and tools"
          title="Scientific computing stack for simulation, analysis, and visualization."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {cv.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-line/50 bg-panel/40 px-4 py-2 text-sm text-muted">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
          <Download aria-hidden="true" className="h-4 w-4 text-gold" />
          Replace the placeholder PDF in <code className="rounded bg-panel px-2 py-1">public/cv/</code>.
        </div>
      </section>
    </>
  );
}
