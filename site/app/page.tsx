import Image from "next/image";
import { Art } from "@/components/art";
import { Dot, Eyebrow, Pills, Stat, Tile } from "@/components/tile";
import { CASE_STUDIES, EXPERIENCE, SITE, STACK, STATS } from "@/lib/content";

const mentored = STATS.find((s) => s.label === "engineers mentored") ?? STATS[STATS.length - 1];
const teamLed = STATS.find((s) => s.label.startsWith("engineers led")) ?? STATS[2];

export default function HomePage() {
  const [featured, second, third] = CASE_STUDIES;
  const latest = EXPERIENCE[0];

  return (
    <div className="bento">
      {/* Hero */}
      <Tile cols={7} rows={2} tone="hero" as="section" className="justify-between p-6 sm:p-8 md:p-10" ariaLabel="Introduction">
        <div className="flex items-center gap-2.5">
          <Dot />
          <Eyebrow>Available · {SITE.availableFor}</Eyebrow>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[clamp(40px,9vw,64px)] font-bold leading-[1] tracking-[-0.04em]">{SITE.name}</h1>
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
      <Tile cols={3} as="section" className="grid grid-cols-2 content-center gap-3" ariaLabel="Key numbers">
        <Stat value={STATS[0].value} label={STATS[0].label} size="sm" />
        <Stat value={teamLed.value} label={teamLed.label} size="sm" />
      </Tile>

      {/* Featured work */}
      <Tile cols={4} rows={2} href={`/work/${featured.slug}`} className="justify-between" ariaLabel={`Case study: ${featured.title}`}>
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
          <span>01 · {featured.tag}</span>
          <span>{featured.metrics[0].value}</span>
        </div>
        <Art cs={featured} priority sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px" />
        <div className="flex flex-col gap-2">
          <span className="text-[26px] font-bold leading-tight tracking-[-0.03em]">{featured.title}</span>
          <span className="text-[15px] leading-snug text-muted">{featured.short}. {featured.metrics[1].value} {featured.metrics[1].label}.</span>
        </div>
      </Tile>

      <Tile cols={4} rows={2} href={`/work/${second.slug}`} className="justify-between" ariaLabel={`Case study: ${second.title}`}>
        <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[12px] tracking-[0.18em] text-peach uppercase">
          <span>02 · {second.tag}</span>
          <span>{second.metrics[1].value} tx</span>
        </div>
        <Art cs={second} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px" />
        <div className="flex flex-col gap-2">
          <span className="text-[26px] font-bold leading-tight tracking-[-0.03em]">{second.title}</span>
          <span className="text-[15px] leading-snug text-muted">{second.metrics[0].value} users. Led a {second.team.split(" ")[0]}-person cross-functional team; page load down 75%.</span>
        </div>
      </Tile>

      <Tile cols={4} href={`/work/${third.slug}`} className="justify-between" ariaLabel={`Case study: ${third.title}`}>
        <Eyebrow tone="peach">03 · {third.tag}</Eyebrow>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
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
          <span className="text-[36px] font-bold leading-none tracking-[-0.04em]">{mentored.value}</span>
          <span className="text-[13px] text-muted">engineers across US &amp; EU teams</span>
        </div>
      </Tile>

      {/* Contact */}
      <Tile cols={4} md={6} tone="accent" href={`mailto:${SITE.email}`} className="justify-between" ariaLabel="Email Wasif">
        <Eyebrow tone="bg">Let&apos;s talk</Eyebrow>
        <span className="text-[22px] font-bold leading-tight tracking-[-0.02em] break-all">{SITE.email}</span>
      </Tile>
    </div>
  );
}
