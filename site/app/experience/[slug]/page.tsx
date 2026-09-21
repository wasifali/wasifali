import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Art } from "@/components/art";
import { Eyebrow, Pills, Tile } from "@/components/tile";
import { CASE_STUDIES, EXPERIENCE } from "@/lib/content";

interface Params { slug: string }

export function generateStaticParams(): Params[] {
  return EXPERIENCE.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const r = EXPERIENCE.find((x) => x.slug === slug);
  if (!r) return {};
  return { title: `${r.title} · ${r.company}`, description: r.summary };
}

export default async function RolePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = EXPERIENCE.findIndex((x) => x.slug === slug);
  if (index === -1) redirect("/experience");
  const r = EXPERIENCE[index];
  const next = EXPERIENCE[(index + 1) % EXPERIENCE.length];
  const related = CASE_STUDIES.filter((c) => c.company === r.company);

  return (
    <div className="flex flex-col gap-6">
      <Link href="/experience" className="w-fit rounded-full border border-line bg-surface-2 px-3.5 py-2 text-[14px] text-muted hover:text-ink">
        ← All experience
      </Link>

      <div className="bento">
        <Tile cols={8} rows={2} mdRows={1} tone="hero" as="section" className="justify-between gap-6 p-6 sm:p-8 md:p-10">
          <Eyebrow>{r.company} · {r.period}</Eyebrow>
          <div className="flex flex-col gap-3">
            <h1 className="text-[clamp(30px,6vw,50px)] font-bold leading-[1.02] tracking-[-0.035em]">{r.title}</h1>
            <p className="text-[17px] leading-relaxed text-muted md:text-[18px]">{r.summary}</p>
          </div>
        </Tile>

        <Tile cols={4} rows={2} md={6} mdRows={1} as="section" className="gap-4 text-[14px]" ariaLabel="Facts">
          <Eyebrow>Facts</Eyebrow>
          <dl className="flex flex-col divide-y divide-line">
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-muted">Company</dt>
              <dd className="m-0 text-right">
                {r.companyUrl ? (
                  <a href={r.companyUrl} target="_blank" rel="noopener noreferrer" className="text-peach hover:text-ink">{r.company} ↗</a>
                ) : r.company}
              </dd>
            </div>
            {[
              ["Period", r.period],
              ["Engagement", r.mode],
              ["Stack", r.tags.join(" · ")],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3">
                <dt className="text-muted">{k}</dt>
                <dd className="m-0 text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </Tile>

        <Tile cols={8} rows={2} md={6} mdRows={1} as="section" className="gap-3">
          <Eyebrow>What I did</Eyebrow>
          <ol className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] leading-relaxed text-muted md:text-[16px]">
            {r.bullets.map((b, i) => (
              <li key={b} className="flex gap-3">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{b}</span>
              </li>
            ))}
          </ol>
        </Tile>

        <Tile cols={4} md={6} as="section" className="gap-3">
          <Eyebrow tone="peach">Stack</Eyebrow>
          <Pills items={r.tags} />
        </Tile>

        <Tile cols={4} md={6} tone="accent" href={`/experience/${next.slug}`} className="justify-between" ariaLabel={`Next role: ${next.title} at ${next.company}`}>
          <Eyebrow tone="bg">Next · {next.period}</Eyebrow>
          <div className="flex flex-col gap-1">
            <span className="text-[22px] font-bold leading-tight tracking-[-0.02em]">{next.company} →</span>
            <span className="text-[14px] text-bg/80">{next.title}</span>
          </div>
        </Tile>

        {related.map((cs) => (
          <Tile key={cs.slug} cols={related.length === 1 ? 12 : 6} md={6} href={`/work/${cs.slug}`} className="justify-between gap-4" ariaLabel={`Case study: ${cs.title}`}>
            <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
              <span>Case study · {cs.tag}</span>
              <span>{cs.metrics[0].value} {cs.metrics[0].label}</span>
            </div>
            <Art cs={cs} sizes="(max-width: 1023px) 100vw, 1216px" />
            <div className="flex flex-col gap-1.5">
              <span className="text-[24px] font-bold leading-tight tracking-[-0.03em]">{cs.title}</span>
              <span className="text-[14px] text-muted">{cs.short}</span>
            </div>
          </Tile>
        ))}
      </div>
    </div>
  );
}
