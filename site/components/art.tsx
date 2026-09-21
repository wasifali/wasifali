import Image from "next/image";
import type { CaseStudy } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Case-study artwork: the themed SVG from /public/work over its gradient, at the SVG's own 8:3
 * ratio so nothing is cropped. Falls back to the gradient alone when a study has no image yet.
 * Decorative by default (empty alt); pass `alt` where the picture carries meaning.
 */
export function Art({ cs, alt = "", sizes = "(max-width: 1023px) 100vw, 600px", priority = false, className }: {
  cs: CaseStudy;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("tile-art relative aspect-[8/3] w-full overflow-hidden rounded-2xl border border-line-strong", className)}
      style={{ background: cs.art }}
      aria-hidden={alt === "" || undefined}
    >
      {cs.image && (
        <Image src={cs.image} alt={alt} fill unoptimized priority={priority} sizes={sizes} className="object-cover" />
      )}
    </div>
  );
}
