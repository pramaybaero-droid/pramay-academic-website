import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[70vh] flex-col items-start justify-center pt-28">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-5xl text-foreground">Page not found</h1>
      <p className="mt-4 max-w-xl text-muted">
        The requested page is not available. Use the navigation or return to the homepage.
      </p>
      <LinkButton href="/" className="mt-8">
        Back home
      </LinkButton>
    </section>
  );
}
