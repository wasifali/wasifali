import type { Metadata } from "next";
import { Eyebrow, Stat, Tile } from "@/components/tile";
import { CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Four production systems: BMW ERP microservices, a consumer Web3 marketplace, an OCR annotation platform and a fitness CMS.",
};

export default function WorkPage() {
  const [a, b, c, d] = CASE_STUDIES;
  return (
    <div className="bento">
      <Tile cols={8} tone="hero" as="section" className="justify-between p-8 md:p-10">
        <Eyebrow>Work · {CASE_STUDIES.length} case studies</Eyebrow>
        <h1 className="text-[34px] font-bold leading-[1] tracking-[-0.035em] md:text-[44px]">Systems that carried real traffic.</h1>
      </Tile>
      <Tile cols={4} as="section" className="grid grid-cols-2 gap-3">
        <Stat value="52" label="services led" size="sm" />
        <Stat value="150K+" label="end users served" size="sm" />
      </Tile>

      {[a, b].map((cs, i) => (
        <Tile key={cs.slug} cols={6} rows={2} href={`/work/${cs.slug}`} className="justify-between" ariaLabel={`Read case study: ${cs.title}`}>
          <div className="flex justify-between font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
            <span>0{i + 1} · {cs.tag}</span>
            <span>{cs.period}</span>
          </div>
          <div className="tile-art h-[150px] rounded-2xl border border-line-strong" style={{ background: cs.art }} aria-hidden />
          <div className="flex flex-col gap-2">
            <span className="text-[28px] font-bold leading-tight tracking-[-0.03em]">{cs.title}</span>
            <span className="text-[15px] leading-snug text-muted">{cs.summary}</span>
          </div>
        </Tile>
      ))}

      {[c, d].map((cs, i) => (
        <Tile key={cs.slug} cols={6} href={`/work/${cs.slug}`} className="flex-row items-center justify-between gap-6" ariaLabel={`Read case study: ${cs.title}`}>
          <div className="flex flex-col gap-1.5">
            <Eyebrow tone="peach">0{i + 3} · {cs.tag}</Eyebrow>
            <span className="text-[24px] font-bold leading-tight tracking-[-0.03em]">{cs.title}</span>
            <span className="text-[14px] text-muted">{cs.metrics.map((m) => `${m.value} ${m.label}`).join(" · ")}</span>
          </div>
          <span className="shrink-0 text-[14px] text-peach">Read →</span>
        </Tile>
      ))}
    </div>
  );
}
