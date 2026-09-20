import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, Pills, Tile } from "@/components/tile";
import { CERTIFICATIONS, EDUCATION, PRINCIPLES, SITE, STACK } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "I make backends predictable and teams faster. Ten years of production Node.js and TypeScript.",
};

export default function AboutPage() {
  return (
    <div className="bento">
      <Tile cols={4} rows={3} className="tile-portrait p-0" ariaLabel="Portrait of Wasif Ali">
        <Image src="/portrait.jpg" alt={`${SITE.name}, portrait`} fill priority sizes="(max-width: 1024px) 100vw, 400px" className="object-cover object-top" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.8),transparent_50%)]" aria-hidden />
        <div className="absolute bottom-6 left-6 flex flex-col gap-1">
          <span className="text-[22px] font-bold">{SITE.name}</span>
          <span className="font-mono text-[11px] tracking-[0.18em] text-peach uppercase">{SITE.location} · {SITE.timezone}</span>
        </div>
      </Tile>

      <Tile cols={8} rows={2} tone="hero" as="section" className="justify-between p-8 md:p-10">
        <Eyebrow>About</Eyebrow>
        <div className="flex flex-col gap-4">
          <h1 className="text-[34px] font-bold leading-[1] tracking-[-0.035em] md:text-[44px]">I make backends predictable and teams faster.</h1>
          <p className="text-[16px] leading-relaxed text-muted md:text-[17px]">
            Ten years of production Node.js and TypeScript. Backend lead for a 52-service ERP estate serving two BMW marques, a consumer marketplace past a million transactions, and the NestJS reference architecture an agency reused across twenty client projects. The pattern in my work is the un-glamorous middle: caching that survives cold starts, service boundaries that hold under dealer-hours traffic, and review programs that measurably cut defects.
          </p>
        </div>
      </Tile>

      <Tile cols={4} as="section" className="justify-between">
        <Eyebrow tone="peach">Education</Eyebrow>
        <span className="text-[17px] font-semibold leading-snug">{EDUCATION.degree} · {EDUCATION.school} · {EDUCATION.years}</span>
      </Tile>

      <Tile cols={4} as="section" className="justify-between">
        <Eyebrow tone="peach">Certified</Eyebrow>
        <span className="text-[16px] font-semibold leading-snug">{CERTIFICATIONS.map((c) => c.title.split(":")[0]).join(" · ")} · {CERTIFICATIONS[0].issuer}</span>
      </Tile>

      {PRINCIPLES.map((p, i) => (
        <Tile key={p.title} cols={3} tone={i === PRINCIPLES.length - 1 ? "accent" : "surface"} as="section" className="gap-2 p-5 md:p-6">
          <span className={`text-[16px] font-bold leading-snug ${i === PRINCIPLES.length - 1 ? "text-bg" : ""}`}>{p.title}</span>
          <span className={`text-[13px] leading-relaxed ${i === PRINCIPLES.length - 1 ? "text-bg/85" : "text-muted"}`}>{p.body}</span>
        </Tile>
      ))}

      <Tile cols={4} as="section" className="gap-3">
        <Eyebrow>Daily · 10 years</Eyebrow>
        <Pills items={STACK.daily} />
      </Tile>
      <Tile cols={4} as="section" className="gap-3">
        <Eyebrow>Shipped in production</Eyebrow>
        <Pills items={STACK.shipped} />
      </Tile>
      <Tile cols={4} as="section" className="gap-3">
        <Eyebrow>Working knowledge</Eyebrow>
        <Pills items={STACK.working} />
      </Tile>
    </div>
  );
}
