import type { Metadata } from "next";
import { Activity, Gauge, Layers, Play, SlidersHorizontal, Waves } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { TriaxialCellVisual } from "@/components/visuals/triaxial-cell-visual";
import { WaveStrip } from "@/components/visuals/wave-strip";

export const metadata: Metadata = {
  title: "Simulations",
  description:
    "Interactive triaxial test simulator page and future scientific demos for stress-strain response, confining pressure, void ratio, contact models, and wave propagation."
};

const demoSlots = [
  {
    title: "Stress-strain response",
    description: "Axial strain, deviatoric stress, volumetric response, and peak/residual behaviour.",
    icon: Activity
  },
  {
    title: "Confining pressure effects",
    description: "Compare response under different sigma3 values and drainage assumptions.",
    icon: Gauge
  },
  {
    title: "Void ratio influence",
    description: "Explore dense versus loose initial states and dilatancy trends.",
    icon: Layers
  },
  {
    title: "Contact model comparison",
    description: "Contrast Hertz-Mindlin, Cundall-Strack, damping, and frictional settings.",
    icon: SlidersHorizontal
  },
  {
    title: "Wave propagation visualization",
    description: "Inspect wavefront speed, attenuation, and transmission through contact networks.",
    icon: Waves
  }
];

export default function SimulationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Simulations"
        title="A serious scientific demo platform for granular mechanics."
        description="The simulations page is designed to host interactive tools, embedded app previews, and future demos without presenting them as toys."
        primaryAction={{ label: "Launch simulator", href: "#interactive-triaxial-test-simulator" }}
        secondaryAction={{ label: "Project cards", href: "/projects" }}
      />

      <section id="interactive-triaxial-test-simulator" className="container-shell grid gap-8 py-20 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <TriaxialCellVisual />
        </Reveal>
        <Reveal delay={0.08}>
          <article className="instrument-card p-6 sm:p-8">
            <p className="eyebrow mb-4">Interactive Triaxial Test Simulator</p>
            <h2 className="font-display text-4xl text-foreground">Launch point for the triaxial simulation app.</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Users will be able to vary confining pressure, axial strain, initial density or void ratio, and contact or constitutive parameters, then inspect stress-strain response and microstructural indicators.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Confining pressure", "Axial strain", "Void ratio", "Contact model", "Stress path", "Export figures"].map((item) => (
                <span key={item} className="rounded-[8px] border border-line/50 bg-background/40 px-4 py-3 text-sm text-muted">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="#simulator-preview" icon="arrow">
                Launch Simulator
              </LinkButton>
              <LinkButton href="/projects#triaxial-test-simulator" variant="ghost">
                Documentation
              </LinkButton>
            </div>
          </article>
        </Reveal>
      </section>

      <section id="simulator-preview" className="container-shell py-10">
        <div className="instrument-card overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
            <div className="border-b border-line/40 p-6 lg:border-b-0 lg:border-r">
              <p className="eyebrow mb-4">Mock UI panel</p>
              <div className="grid gap-4">
                {["sigma3", "epsilon1 rate", "initial e", "friction angle", "contact stiffness"].map((item) => (
                  <label key={item} className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{item}</span>
                    <span className="h-2 rounded-full bg-line/50">
                      <span className="block h-2 w-2/3 rounded-full bg-cyan" />
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-cyan">
                <Play aria-hidden="true" className="h-4 w-4" />
                Simulation preview placeholder
              </div>
              <WaveStrip />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["q-p path", "epsilonv response", "fabric tensor"].map((item) => (
                  <div key={item} className="rounded-[8px] border border-line/50 bg-background/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{item}</p>
                    <div className="mt-4 h-20 rounded-[6px] bg-gradient-to-br from-cyan/20 via-panel to-gold/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <SectionHeader
          eyebrow="Future demos"
          title="A platform for focused mechanics demonstrations."
          description="Each slot is ready for a future interactive component, embedded app, or recorded simulation."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {demoSlots.map((slot, index) => {
            const Icon = slot.icon;
            return (
              <Reveal key={slot.title} delay={index * 0.04}>
                <article className="instrument-card h-full p-5">
                  <Icon aria-hidden="true" className="h-5 w-5 text-gold" />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{slot.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{slot.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
