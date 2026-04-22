import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { navItems, profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-line/40 bg-background/70">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
        <div>
          <p className="eyebrow mb-4">Personal academic website</p>
          <h2 className="max-w-xl font-display text-3xl leading-tight text-foreground">
            Granular mechanics, contact-scale physics, and simulation-driven research.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-[8px] border border-line/50 bg-panel/50 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-cyan/60"
          >
            <Mail aria-hidden="true" className="h-4 w-4" />
            {profile.email}
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Navigate</h3>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Profiles</h3>
          <div className="mt-4 grid gap-2">
            {profile.socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-3 rounded-[8px] border border-transparent px-0 py-1 text-sm text-muted transition hover:text-foreground"
              >
                <span>{item.label}</span>
                <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-cyan opacity-0 transition group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line/30 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} {profile.name}. Placeholder content is intentionally marked.</p>
          <p>Built for Vercel with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
