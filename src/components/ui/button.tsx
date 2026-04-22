import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  download?: boolean;
  external?: boolean;
  icon?: "arrow" | "download" | "none";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-cyan/60 bg-cyan/10 text-foreground shadow-soft-glow hover:border-cyan hover:bg-cyan/20",
  secondary:
    "border-gold/40 bg-gold/10 text-foreground shadow-gold-glow hover:border-gold/70 hover:bg-gold/20",
  ghost: "border-line/50 bg-panel/40 text-foreground hover:border-cyan/40 hover:bg-panel/80"
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
  download,
  external,
  icon = "arrow"
}: LinkButtonProps) {
  const useAnchor =
    external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const iconNode =
    icon === "download" ? (
      <Download aria-hidden="true" className="h-4 w-4" />
    ) : icon === "arrow" ? (
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    ) : null;

  const classes = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border px-4 py-2.5 text-sm font-semibold transition duration-300 ease-instrument",
    "disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    className
  );

  if (useAnchor) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        download={download}
      >
        <span>{children}</span>
        {iconNode}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} download={download}>
      <span>{children}</span>
      {iconNode}
    </Link>
  );
}
