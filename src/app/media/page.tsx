import type { Metadata } from "next";
import { MediaGallery } from "@/components/sections/media-gallery";
import { PageHero } from "@/components/ui/page-hero";
import { mediaItems } from "@/content/media";

export const metadata: Metadata = {
  title: "Media and Visualizations",
  description:
    "Cinematic scientific gallery for triaxial compression, force chains, contact networks, wave propagation, micro-macro response, and parameter studies."
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media and visualizations"
        title="A clean gallery for simulation movies, force networks, figures, and scientific visuals."
        description="This page supports videos, GIF previews, image galleries, captions, categorized filtering, and fullscreen viewing."
        primaryAction={{ label: "View simulations", href: "/simulations" }}
        secondaryAction={{ label: "Research context", href: "/research" }}
      />
      <section className="container-shell py-20">
        <MediaGallery items={mediaItems} />
      </section>
    </>
  );
}
