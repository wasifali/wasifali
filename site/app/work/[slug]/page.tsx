import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Eyebrow, Pills, Stat, Tile } from "@/components/tile";
import { CASE_STUDIES } from "@/lib/content";

interface Params { slug: string }

export function generateStaticParams(): Params[] {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = CASE_STUDIES.findIndex((c) => c.slug === slug);
  if (index === -1) redirect("/");
  const cs = CASE_STUDIES[index];
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <div className="flex flex-col gap-6">
      <Link href="/work" className="w-fit rounded-full border border-line bg-surface-2 px-3.5 py-2 text-[14px] text-muted hover:text-ink">
        ← All work
      </Link>

      <div className="bento">
        <Tile cols={8} rows={2} mdRows={1} tone="hero" as="section" className="justify-between gap-6 p-6 sm:p-8 md:p-10">
          <Eyebrow>Case study · {cs.company} · {cs.period}</Eyebrow>
          <div className="flex flex-col gap-3">
            <h1 className="text-[clamp(32px,7vw,54px)] font-bold leading-[1] tracking-[-0.035em]">{cs.title}</h1>
            <p className="text-[17px] leading-relaxed text-muted md:text-[18px]">{cs.summary}</p>
          </div>
        </Tile>

        <Tile cols={4} rows={2} md={6} mdRows={1} as="section" className="gap-4 text-[14px]" ariaLabel="Facts">
          <Eyebrow>Facts</Eyebrow>
          <dl className="flex flex-col divide-y divide-line">
            {[
              ["Role", cs.role],
              ["Team", cs.team],
              ["Stack", cs.stack.join(" · ")],
              ["Period", cs.period],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3">
                <dt className="text-muted">{k}</dt>
                <dd className="m-0 text-right">{v}</dd>
              </div>
            ))}
            {cs.live && (
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-muted">Live</dt>
                <dd className="m-0"><a href={cs.live} className="text-peach hover:text-ink" target="_blank" rel="noopener noreferrer">{cs.live.replace(/^https?:\/\//, "")} ↗</a></dd>
              </div>
            )}
          </dl>
        </Tile>

        <Tile cols={12} rows={2} mdRows={1} className="items-center justify-center p-0" style={{ background: cs.art }} ariaLabel="Architecture illustration">
          <span className="font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
            Architecture diagram · coming soon
          </span>
        </Tile>

        {cs.metrics.map((m) => (
          <Tile key={m.label} cols={4} md={2} as="section" className="justify-between">
            <Stat value={m.value} label={m.label} size="lg" tone="peach" />
          </Tile>
        ))}

        <Tile cols={6} rows={2} md={6} mdRows={1} as="section" className="gap-3">
          <Eyebrow>The problem</Eyebrow>
          <p className="text-[16px] leading-relaxed text-muted md:text-[17px]">{cs.problem}</p>
        </Tile>

        <Tile cols={6} rows={2} md={6} mdRows={1} as="section" className="gap-3">
          <Eyebrow>What I did</Eyebrow>
          <ol className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] leading-relaxed text-muted md:text-[16px]">
            {cs.built.map((b, i) => (
              <li key={b} className="flex gap-3">
                <span className="font-mono text-accent">0{i + 1}</span>
                <span>{b}</span>
              </li>
            ))}
          </ol>
        </Tile>

        <Tile cols={6} md={6} as="section" className="gap-3">
          <Eyebrow>What broke, and the fix</Eyebrow>
          <p className="text-[15px] leading-relaxed text-muted">{cs.broke}</p>
        </Tile>

        <Tile cols={6} md={6} as="section" className="gap-3">
          <Eyebrow>Results</Eyebrow>
          <p className="text-[15px] leading-relaxed text-muted">{cs.results}</p>
        </Tile>

        <Tile cols={8} as="section" className="gap-3">
          <Eyebrow tone="peach">Stack</Eyebrow>
          <Pills items={cs.stack} />
        </Tile>

        <Tile cols={4} md={6} tone="accent" href={`/work/${next.slug}`} className="justify-between" ariaLabel={`Next case study: ${next.title}`}>
          <Eyebrow tone="bg">Next</Eyebrow>
          <span className="text-[22px] font-bold leading-tight tracking-[-0.02em]">{next.title} →</span>
        </Tile>
      </div>
    </div>
  );
}
