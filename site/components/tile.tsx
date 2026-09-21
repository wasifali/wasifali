import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Bento primitives. Every surface on the site is one of these.
 *  - <Tile>     a rounded card that spans `cols` × `rows` of the .bento grid
 *  - <Eyebrow>  the small mono label at the top of a tile
 *  - <Stat>     a big number with a caption
 *  - <Pills>    a wrap of small tags
 */

type TileTone = "surface" | "hero" | "accent";

const TONES: Record<TileTone, string> = {
  surface: "bg-surface border border-line text-ink",
  hero: "border border-line-strong text-ink bg-[linear-gradient(135deg,#1a0d07,#2c1208)]",
  accent: "bg-accent text-bg border border-accent",
};

interface TileProps {
  /** Columns spanned on the 12-column desktop grid (≥1024px). */
  cols?: number;
  /** Rows spanned on desktop. */
  rows?: number;
  /** Columns spanned on the 6-column tablet grid (640–1023px). Defaults to full width for wide tiles, half width otherwise. */
  md?: number;
  /** Rows spanned on tablet. Defaults to `rows`. */
  mdRows?: number;
  tone?: TileTone;
  href?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  as?: "section" | "div" | "article";
  ariaLabel?: string;
}

export function Tile({ cols = 4, rows = 1, md, mdRows, tone = "surface", href, className, style, children, as = "div", ariaLabel }: TileProps) {
  const base = cn(
    "relative box-border flex flex-col rounded-tile p-6 md:p-7",
    TONES[tone],
    href && "tile-link hover:border-accent/60",
    className,
  );
  // Spans are applied by .bento in globals.css per breakpoint; phones collapse to one column.
  const gridStyle = {
    "--cols": cols,
    "--rows": rows,
    "--cols-md": md ?? (cols >= 7 ? 6 : 3),
    "--rows-md": mdRows ?? rows,
    ...style,
  } as CSSProperties;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return external ? (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={base} style={gridStyle} aria-label={ariaLabel}>
        {children}
      </a>
    ) : (
      <Link href={href} className={base} style={gridStyle} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  const Comp = as;
  return (
    <Comp className={base} style={gridStyle} aria-label={ariaLabel}>
      {children}
    </Comp>
  );
}

export function Eyebrow({ children, tone = "accent", className }: { children: ReactNode; tone?: "accent" | "peach" | "bg"; className?: string }) {
  const color = tone === "accent" ? "text-accent" : tone === "peach" ? "text-peach" : "text-bg";
  return <span className={cn("font-mono text-[12px] font-semibold tracking-[0.18em] uppercase", color, className)}>{children}</span>;
}

export function Stat({ value, label, size = "md", tone = "ink" }: { value: string; label: string; size?: "sm" | "md" | "lg"; tone?: "ink" | "peach" | "bg" }) {
  const sizes = { sm: "text-[28px]", md: "text-[36px] md:text-[40px]", lg: "text-[44px] md:text-[48px]" };
  const tones = { ink: "text-ink", peach: "text-peach", bg: "text-bg" };
  return (
    <div className="flex flex-col gap-1">
      <span className={cn("font-bold leading-none tracking-[-0.04em]", sizes[size], tones[tone])}>{value}</span>
      <span className={cn("text-[13px] leading-snug", tone === "bg" ? "text-bg/80" : "text-muted")}>{label}</span>
    </div>
  );
}

export function Pills({ items, tone = "coal" }: { items: readonly string[]; tone?: "coal" | "bg" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it}
          className={cn(
            "rounded-full px-3 py-1.5 text-[13px] font-medium",
            tone === "coal" ? "bg-coal text-peach" : "bg-bg/15 text-bg",
          )}
        >
          {it}
        </span>
      ))}
    </div>
  );
}

export function Dot({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-2 w-2 shrink-0", className)} aria-hidden>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}
