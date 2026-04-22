import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { GrainField } from "@/components/visuals/grain-field";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { WaveStrip } from "@/components/visuals/wave-strip";
import { credibility, profile, researchSignals } from "@/content/profile";
import { projects } from "@/content/projects";
import { newsItems } from "@/content/news";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Personal academic website for granular mechanics, constitutive modelling, wave propagation, DEM, contact mechanics, and simulation."
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="hero-mesh relative min-h-screen overflow-hidden pb-16 pt-28 sm:pt-32">
        <GrainField className="particle-mask absolute inset-0 h-full w-full opacity-80" />
        <div className="container-shell relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <p className="eyebrow mb-5">Computational and experimental granular mechanics</p>
            <h1 className="max-w-5xl font-display text-5xl leading-[0.95] text-balance text-foreground sm:text-7xl lg:text-8xl">
              {profile.name}
            </h1>
            <div className="mt-6 max-w-3xl space-y-3 text-base leading-8 text-muted sm:text-lg">
              <p>
                {profile.role}, {profile.department}, {profile.affiliation}.
              </p>
              <p className="text-xl leading-8 text-foreground sm:text-2xl">{profile.identity}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/research">View Research</LinkButton>
              <LinkButton href="/publications" variant="ghost">
                Publications
              </LinkButton>
              <LinkButton href="/simulations#interactive-triaxial-test-simulator" variant="secondary">
                Open Triaxial Simulator
              </LinkButton>
              <LinkButton href={profile.cvPath} variant="ghost" icon="download" download>
                Download CV
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="research-gradient-border overflow-hidden rounded-[14px] bg-panel/60 p-3 shadow-soft-glow">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] border border-line/40">
                <Image
                  src={profile.portrait}
                  alt="Portrait placeholder"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-5 right-5 rounded-[10px] border border-line/40 bg-background/80 p-4 shadow-soft-glow backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Current focus</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Contact-scale mechanisms, triaxial response, wave transmission, and data-aware constitutive models for granular systems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell relative z-10 -mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {researchSignals.map((signal, index) => {
          const Icon = signal.icon;
          return (
            <Reveal key={signal.title} delay={index * 0.04}>
              <article className="instrument-card h-full p-5">
                <Icon aria-hidden="true" className="h-5 w-5 text-cyan" />
                <h2 className="mt-4 text-base font-semibold text-foreground">{signal.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{signal.description}</p>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="container-shell relative z-10 py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeader
            eyebrow="Featured work"
            title="Flagship projects shaped around simulations, contact laws, and interpretable mechanics."
            description="The cards below are structured placeholders for tools, demos, notebooks, and software releases."
          />
          <Reveal>
            <WaveStrip />
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <a href={`/projects#${project.id}`} className="instrument-card group block h-full overflow-hidden">
                <div className="relative aspect-[16/10] border-b border-line/40">
                  <Image src={project.image} alt={`${project.title} preview`} fill sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-foreground">{project.title}</h3>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-cyan" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line/40 bg-panel/30 py-8">
        <div className="container-shell grid gap-4 lg:grid-cols-[0.32fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Latest updates</p>
            <p className="mt-2 text-sm text-muted">Replace these with papers, talks, code releases, or demo notes.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {newsItems.map((item) => (
              <a key={item.title} href={item.href || "#"} className="instrument-card block p-4">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                  <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" />
                  {item.date}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-24">
        <SectionHeader
          eyebrow="Credibility"
          title="Academic identity, methods, and software context in one clear view."
          description="Use this area to make affiliation, degrees, research approach, and technical stack visible without clutter."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {credibility.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 0.05}>
                <article className="instrument-card h-full p-5">
                  <Icon aria-hidden="true" className="h-5 w-5 text-gold" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{item.label}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.value}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.detail}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
