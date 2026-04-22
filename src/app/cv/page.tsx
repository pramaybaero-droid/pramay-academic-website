import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { PrintButton } from "@/components/ui/print-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { cv } from "@/content/cv";
import { profile } from "@/content/profile";
import { publications } from "@/content/publications";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Academic CV layout for education, research interests, publications, skills, projects, awards, talks, teaching, and contact."
};

export default function CvPage() {
  return (
    <>
      <PageHero
        eyebrow="CV"
        title="A printable academic CV layout ready for real details."
        description="Replace placeholders with exact dates, institutions, publications, awards, talks, teaching roles, and contact details."
        primaryAction={{ label: "Download PDF CV", href: profile.cvPath }}
        secondaryAction={{ label: "Contact", href: "/contact" }}
      />

      <section className="container-shell grid gap-8 py-20 lg:grid-cols-[0.35fr_0.65fr]">
        <aside className="instrument-card h-fit p-6">
          <h2 className="font-display text-3xl text-foreground">{profile.name}</h2>
          <p className="mt-3 text-sm leading-6 text-muted">{cv.summary}</p>
          <div className="mt-6 grid gap-3">
            <LinkButton href={profile.cvPath} icon="download" download>
              Download PDF
            </LinkButton>
            <PrintButton />
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-line/50 bg-panel/40 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-cyan/50"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Email
            </a>
          </div>
        </aside>

        <div className="grid gap-8">
          <CvSection title="Education">
            <div className="grid gap-4">
              {cv.education.map((item) => (
                <article key={item.degree} className="rounded-[8px] border border-line/50 bg-background/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </CvSection>

          <CvSection title="Research interests">
            <div className="flex flex-wrap gap-2">
              {profile.researchKeywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-line/50 px-3 py-1 text-sm text-muted">
                  {keyword}
                </span>
              ))}
            </div>
          </CvSection>

          <CvSection title="Publications">
            <div className="grid gap-3">
              {publications.map((publication) => (
                <article key={publication.id} className="rounded-[8px] border border-line/50 bg-background/40 p-4">
                  <h3 className="font-semibold text-foreground">{publication.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {publication.authors}. {publication.venue}. {publication.year}.
                  </p>
                </article>
              ))}
            </div>
          </CvSection>

          <CvSection title="Projects">
            <div className="grid gap-3 sm:grid-cols-2">
              {projects.slice(0, 4).map((project) => (
                <article key={project.id} className="rounded-[8px] border border-line/50 bg-background/40 p-4">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{project.description}</p>
                </article>
              ))}
            </div>
          </CvSection>

          <CvSection title="Skills">
            <div className="flex flex-wrap gap-2">
              {cv.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-line/50 px-3 py-1 text-sm text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </CvSection>

          {cv.sections.map((section) => (
            <CvSection key={section.title} title={section.title}>
              <ul className="grid gap-2 text-sm leading-6 text-muted">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CvSection>
          ))}
        </div>
      </section>
    </>
  );
}

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <section className="instrument-card p-6">
        <SectionHeader eyebrow="CV" title={title} className="[&>h2]:text-3xl" />
        <div className="mt-6">{children}</div>
      </section>
    </Reveal>
  );
}
