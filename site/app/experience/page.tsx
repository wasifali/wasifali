import type { Metadata } from "next";
import { Eyebrow, Pills, Tile } from "@/components/tile";
import { EXPERIENCE, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Ten years across Ibanera, Big Immersive, CreativeMorph and Novatore Solutions.",
};

export default function ExperiencePage() {
  const [first, second, ...rest] = EXPERIENCE;
  return (
    <div className="bento">
      <Tile cols={12} tone="hero" as="section" className="flex-row items-end justify-between gap-6 p-8 md:p-10">
        <div className="flex flex-col gap-3">
          <Eyebrow>Experience · 2016 → 2026</Eyebrow>
          <h1 className="text-[34px] font-bold leading-[1] tracking-[-0.035em] md:text-[44px]">Ten years, four teams.</h1>
        </div>
        <a href={SITE.resumeUrl} className="shrink-0 rounded-full border border-accent/50 px-4 py-2.5 text-[14px] font-semibold text-peach hover:bg-coal">
          Résumé PDF ↓
        </a>
      </Tile>

      {[first, second].map((r) => (
        <Tile key={r.company} cols={6} rows={2} as="article" className="justify-between gap-4">
          <div className="flex justify-between font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
            <span>{r.period}</span>
            <span>{r.mode}</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[26px] font-bold leading-tight tracking-[-0.03em] md:text-[30px]">{r.title}</h2>
            {r.companyUrl ? (
              <a href={r.companyUrl} target="_blank" rel="noopener noreferrer" className="w-fit text-[16px] text-accent hover:text-peach">{r.company} ↗</a>
            ) : (
              <span className="text-[16px] text-accent">{r.company}</span>
            )}
            <p className="text-[15px] leading-relaxed text-muted">{r.summary}</p>
            <ul className="m-0 flex list-none flex-col gap-1.5 p-0 text-[14px] leading-relaxed text-muted">
              {r.bullets.slice(0, 3).map((b) => (
                <li key={b} className="flex gap-2.5"><span className="text-accent">→</span><span>{b}</span></li>
              ))}
            </ul>
          </div>
          <Pills items={r.tags} />
        </Tile>
      ))}

      {rest.map((r) => (
        <Tile key={r.company} cols={6} as="article" className="justify-between gap-3">
          <div className="flex justify-between font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
            <span>{r.period}</span>
            <span>{r.mode}</span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.03em]">{r.title}</h2>
            <span className="shrink-0 text-[15px] text-accent">{r.company}</span>
          </div>
          <p className="text-[14px] leading-relaxed text-muted">{r.summary}</p>
        </Tile>
      ))}
    </div>
  );
}
