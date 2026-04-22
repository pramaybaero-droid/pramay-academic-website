import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction
}: PageHeroProps) {
  return (
    <section className="container-shell relative z-10 pt-32 sm:pt-36 lg:pt-40">
      <Reveal className="max-w-4xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="font-display text-5xl leading-[0.98] text-balance text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{description}</p>
        {primaryAction || secondaryAction ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryAction ? <LinkButton href={primaryAction.href}>{primaryAction.label}</LinkButton> : null}
            {secondaryAction ? (
              <LinkButton href={secondaryAction.href} variant="ghost">
                {secondaryAction.label}
              </LinkButton>
            ) : null}
          </div>
        ) : null}
      </Reveal>
    </section>
  );
}
