import Image from "next/image";
import { Dot, Eyebrow, Pills, Stat, Tile } from "@/components/tile";
import { CASE_STUDIES, EXPERIENCE, SITE, STACK, STATS } from "@/lib/content";

export default function HomePage() {
  const [featured, second, third] = CASE_STUDIES;
  const latest = EXPERIENCE[0];

  return (
    <div className="bento">
      {/* Hero */}
      <Tile cols={7} rows={2} tone="hero" as="section" className="justify-between p-8 md:p-10" ariaLabel="Introduction">
        <div className="flex items-center gap-2.5">
          <Dot />
          <Eyebrow>Available · {SITE.availableFor}</Eyebrow>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[44px] font-bold leading-[1] tracking-[-0.04em] md:text-[64px]">{SITE.name}</h1>
          <p className="max-w-[560px] text-[17px] leading-relaxed text-muted md:text-[20px]">
            {SITE.role}. {SITE.tagline}
          </p>
        </div>
      </Tile>

      {/* Portrait */}
      <Tile cols={2} rows={2} className="tile-portrait overflow-hidden p-0" ariaLabel="Portrait of Wasif Ali">
        <Image
          src="/portrait.jpg"
          alt={`${SITE.name}, portrait`}
          fill
          priority
          sizes="(max-width: 1024px) 50vw, 200px"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.55),transparent_55%)]" aria-hidden />
      </Tile>

      {/* Latest role */}
      <Tile cols={3} as="section" className="justify-between" ariaLabel="Latest role">
        <Eyebrow>Latest</Eyebrow>
        <p className="text-[17px] leading-snug">
          {latest.title} at <span className="text-peach">{latest.company}</span>. {latest.summary}
        </p>
      </Tile>

      {/* Stats pair */}
      <Tile cols={3} as="section" className="grid grid-cols-2 gap-3" ariaLabel="Key numbers">
        <Stat value={STATS[0].value} label={STATS[0].label} size="sm" />
        <Stat value={STATS[1].value} label={STATS[1].label} size="sm" />
      </Tile>

      {/* Featured work */}
      <Tile cols={4} rows={2} href={`/work/${featured.slug}`} className="justify-between" ariaLabel={`Case study: ${featured.title}`}>
        <div className="flex justify-between font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
          <span>01 · {featured.tag}</span>
          <span>{featured.metrics[0].value}</span>
        </div>
        <div className="tile-art h-[140px] rounded-2xl border border-line-strong" style={{ background: featured.art }} aria-hidden />
        <div className="flex flex-col gap-2">
          <span className="text-[26px] font-bold leading-tight tracking-[-0.03em]">{featured.title}</span>
          <span className="text-[15px] leading-snug text-muted">52 microservices. Redis caching took average latency from 1500 ms to 600 ms.</span>
        </div>
      </Tile>

      <Tile cols={4} rows={2} href={`/work/${second.slug}`} className="justify-between" ariaLabel={`Case study: ${second.title}`}>
        <div className="flex justify-between font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
          <span>02 · {second.tag}</span>
          <span>{second.metrics[1].value} tx</span>
        </div>
        <div className="tile-art h-[140px] rounded-2xl border border-line-strong" style={{ background: second.art }} aria-hidden />
        <div className="flex flex-col gap-2">
          <span className="text-[26px] font-bold leading-tight tracking-[-0.03em]">{second.title}</span>
          <span className="text-[15px] leading-snug text-muted">{second.metrics[0].value} users. Wallet auth, gas-optimised contracts, page load down 75%.</span>
        </div>
      </Tile>

      <Tile cols={4} href={`/work/${third.slug}`} className="justify-between" ariaLabel={`Case study: ${third.title}`}>
        <Eyebrow tone="peach">03 · {third.tag}</Eyebrow>
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[22px] font-bold leading-tight tracking-[-0.03em]">{third.title}</span>
          <span className="shrink-0 text-[14px] text-peach">{third.metrics[1].value} clients</span>
        </div>
      </Tile>

      {/* Stack */}
      <Tile cols={4} as="section" className="gap-3" ariaLabel="Stack">
        <Eyebrow>Stack</Eyebrow>
        <Pills items={STACK.daily} />
      </Tile>

      {/* Experience shortcut */}
      <Tile cols={5} href="/experience" className="justify-between" ariaLabel="Experience">
        <Eyebrow tone="peach">Experience</Eyebrow>
        <span className="text-[18px] font-semibold leading-snug">
          {EXPERIENCE.map((r) => r.company).join(" · ")}
        </span>
      </Tile>

      {/* Mentoring */}
      <Tile cols={3} as="section" className="justify-between" ariaLabel="Mentoring">
        <Eyebrow tone="peach">Mentored</Eyebrow>
        <div className="flex items-baseline gap-2">
          <span className="text-[36px] font-bold leading-none tracking-[-0.04em]">15+</span>
          <span className="text-[13px] text-muted">engineers across US &amp; EU teams</span>
        </div>
      </Tile>

      {/* Contact */}
      <Tile cols={4} tone="accent" href={`mailto:${SITE.email}`} className="justify-between" ariaLabel="Email Wasif">
        <Eyebrow tone="bg">Let&apos;s talk</Eyebrow>
        <span className="text-[22px] font-bold leading-tight tracking-[-0.02em] break-all">{SITE.email}</span>
      </Tile>
    </div>
  );
}
