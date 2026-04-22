import type { Metadata } from "next";
import { PublicationExplorer } from "@/components/sections/publication-explorer";
import { PageHero } from "@/components/ui/page-hero";
import { publications } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Searchable publication list with filters for year, topic, venue type, selected papers, DOI, PDF, preprint, citation, and BibTeX placeholders."
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="A clean publication archive ready for peer-reviewed papers, preprints, and thesis outputs."
        description="No publications are fabricated. The current entry is explicitly marked as a placeholder and should be replaced with real records when available."
        primaryAction={{ label: "Add publication data", href: "/publications#publication-list" }}
        secondaryAction={{ label: "Research themes", href: "/research" }}
      />
      <section id="publication-list" className="container-shell py-20">
        <PublicationExplorer publications={publications} />
      </section>
    </>
  );
}
