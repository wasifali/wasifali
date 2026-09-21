import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, Pills, Tile } from "@/components/tile";
import { CERTIFICATIONS, EDUCATION, PRINCIPLES, SITE, STACK } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Ten years in software, the last five running teams. Engineering leader and architect across Node.js, TypeScript, Go and React.",
};

export default function AboutPage() {
  return (
    <div className="bento">
      <Tile cols={4} rows={3} md={6} mdRows={1} className="tile-portrait-wide overflow-hidden p-0" ariaLabel="Portrait of Wasif Ali">
        <Image src="/portrait.jpg" alt={`${SITE.name}, portrait`} fill priority sizes="(max-width: 1024px) 100vw, 400px" className="object-cover object-top" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.8),transparent_50%)]" aria-hidden />
        <div className="absolute bottom-6 left-6 flex flex-col gap-1">
          <span className="text-[22px] font-bold">{SITE.name}</span>
          <span className="font-mono text-[11px] tracking-[0.18em] text-peach uppercase">{SITE.location} · {SITE.timezone}</span>
        </div>
      </Tile>

      <Tile cols={8} rows={2} md={6} mdRows={1} tone="hero" as="section" className="justify-between gap-6 p-6 sm:p-8 md:p-10">
        <Eyebrow>About</Eyebrow>
        <div className="flex flex-col gap-4">
          <h1 className="text-[clamp(30px,6.5vw,44px)] font-bold leading-[1] tracking-[-0.035em]">I run teams that ship, and still write the code.</h1>
          <p className="text-[16px] leading-relaxed text-muted md:text-[17px]">
            Ten years in software, the last five running teams. I led a 7-person cross-functional group, frontend, backend, blockchain and QA, that owned architecture, delivery and code quality for a marketplace past a million transactions, and the 5-person backend group behind a 52-service ERP estate serving two BMW marques at 200K requests a day. Most recently sixteen months on contract building Go and React services. I have mentored 15+ engineers and set the code review and QA standards my teams run on. I am comfortable being the person accountable for both the technical call and the ship date.
          </p>
        </div>
      </Tile>

      <Tile cols={4} as="section" className="justify-between">
        <Eyebrow tone="peach">Education</Eyebrow>
        <span className="text-[17px] font-semibold leading-snug">{EDUCATION.degree} · {EDUCATION.school} · {EDUCATION.years}</span>
      </Tile>

      <Tile cols={4} as="section" className="justify-between gap-3">
        <Eyebrow tone="peach">Certified · {CERTIFICATIONS.length}</Eyebrow>
        <ul className="m-0 flex list-none flex-col divide-y divide-line p-0">
          {CERTIFICATIONS.map((c, i) => {
            const [name, subtitle] = c.title.split(": ");
            return (
              <li key={c.title} className="flex gap-3 py-2.5 first:pt-0 last:pb-0">
                <span className="font-mono text-[12px] leading-[1.6] text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold leading-snug">{name}</span>
                  <span className="text-[12px] leading-snug text-muted">{subtitle} · {c.issuer}</span>
                </div>
              </li>
            );
          })}
        </ul>
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
      <Tile cols={4} md={6} as="section" className="gap-3">
        <Eyebrow>Leadership &amp; delivery</Eyebrow>
        <Pills items={STACK.leadership} />
      </Tile>
    </div>
  );
}
