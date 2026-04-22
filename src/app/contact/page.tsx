import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact form, institutional email placeholder, collaboration invitation, and academic profile links."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Open to academic discussions, collaborations, and simulation or software inquiries."
        description="Use this page for institutional contact details, profile links, and a professional inquiry form."
        primaryAction={{ label: "Email directly", href: `mailto:${profile.email}` }}
        secondaryAction={{ label: "View CV", href: "/cv" }}
      />

      <section className="container-shell grid gap-8 py-20 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="grid gap-5">
            <article className="instrument-card p-6">
              <Mail aria-hidden="true" className="h-5 w-5 text-cyan" />
              <h2 className="mt-4 text-xl font-semibold text-foreground">Institutional email</h2>
              <a href={`mailto:${profile.email}`} className="mt-2 block text-sm text-muted hover:text-foreground">
                {profile.email}
              </a>
            </article>
            <article className="instrument-card p-6">
              <MapPin aria-hidden="true" className="h-5 w-5 text-gold" />
              <h2 className="mt-4 text-xl font-semibold text-foreground">Institution</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                {profile.department}, {profile.affiliation}. Replace this section with lab, office, or group details if desired.
              </p>
            </article>
            <article className="instrument-card p-6">
              <h2 className="text-xl font-semibold text-foreground">Profiles</h2>
              <div className="mt-4 grid gap-2">
                {profile.socials.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between rounded-[8px] border border-line/50 bg-background/40 px-4 py-3 text-sm text-muted transition hover:border-cyan/50 hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-cyan" />
                  </a>
                ))}
              </div>
            </article>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
