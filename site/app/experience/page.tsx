import type { Metadata } from "next";
import { Eyebrow, Pills, Tile } from "@/components/tile";
import { EXPERIENCE, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Ten years across Ibanera, Big Immersive, CreativeMorph and Novatore Solutions, the last five leading teams of five to seven engineers.",
};

const PREVIEW_BULLETS = 3;

export default function ExperiencePage() {
  return (
    <div className="bento">
      <Tile cols={12} tone="hero" as="section" className="justify-between gap-6 p-6 sm:p-8 md:flex-row md:items-end md:p-10">
        <div className="flex flex-col gap-3">
          <Eyebrow>Experience · 2016 → 2026</Eyebrow>
          <h1 className="text-[clamp(30px,6.5vw,44px)] font-bold leading-[1] tracking-[-0.035em]">Ten years, four teams, five of them leading.</h1>
        </div>
        <a href={SITE.resumeUrl} className="w-fit shrink-0 rounded-full border border-accent/50 px-4 py-2.5 text-[14px] font-semibold text-peach hover:bg-coal">
          Résumé PDF ↓
        </a>
      </Tile>

      {EXPERIENCE.map((r) => {
        const more = r.bullets.length - PREVIEW_BULLETS;
        return (
          <Tile key={r.slug} cols={6} md={6} href={`/experience/${r.slug}`} className="justify-between gap-4" ariaLabel={`Read more: ${r.title} at ${r.company}`}>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
              <span>{r.period}</span>
              <span>{r.mode}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[clamp(22px,4.5vw,30px)] font-bold leading-tight tracking-[-0.03em]">{r.title}</h2>
              <span className="text-[16px] text-accent">{r.company}</span>
              <p className="text-[15px] leading-relaxed text-muted">{r.summary}</p>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-[14px] leading-relaxed text-muted">
                {r.bullets.slice(0, PREVIEW_BULLETS).map((b) => (
                  <li key={b} className="flex gap-2.5"><span className="text-accent">→</span><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Pills items={r.tags} />
              <span className="shrink-0 text-[14px] text-peach">{more > 0 ? `+${more} more · Read →` : "Read →"}</span>
            </div>
          </Tile>
        );
      })}
    </div>
  );
}
