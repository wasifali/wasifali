import type { Metadata } from "next";
import { CASE_STUDIES, CERTIFICATIONS, EDUCATION, EXPERIENCE, SITE, STACK } from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description: `${SITE.name}, ${SITE.role}. Printable résumé.`,
  robots: { index: false },
};

/**
 * HTML résumé rendered from the same content as the site. Print-optimised: the PDF at
 * /resume/Wasif-Ali-Resume.pdf is generated from this page (see site/README.md).
 */
export default function ResumePage() {
  return (
    <article className="resume mx-auto max-w-[840px] rounded-tile border border-line bg-surface p-8 text-[14px] leading-relaxed text-ink md:p-12 print:max-w-none print:rounded-none print:border-0 print:bg-white print:p-0 print:text-black">
      <header className="flex flex-col gap-2 border-b-2 border-accent pb-5">
        <h1 className="text-[34px] font-bold leading-none tracking-[-0.03em]">{SITE.name}</h1>
        <p className="text-[16px] text-muted print:text-neutral-700">{SITE.role} · 10 years in production</p>
        <p className="font-mono text-[12px] text-dim print:text-neutral-600">
          {SITE.email} · {SITE.phoneDisplay} · linkedin.com/in/wasifali1 · github.com/{SITE.handle} · {SITE.location} ({SITE.timezone})
        </p>
      </header>

      <section className="mt-6">
        <h2 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">Summary</h2>
        <p className="mt-2 text-muted print:text-neutral-800">
          Senior full stack developer with ten years of production Node.js and TypeScript. Backend lead for a 52-service ERP estate serving BMW Mini and Motorrad (200K requests/day), architect of a consumer marketplace past one million transactions, and author of a NestJS reference architecture reused across 20+ client projects. Cuts latency, cuts defects, mentors engineers across distributed teams.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">Experience</h2>
        <div className="mt-3 flex flex-col gap-5">
          {EXPERIENCE.map((r) => (
            <div key={r.company} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[16px] font-bold">{r.title} · <span className="font-semibold text-accent">{r.company}</span></h3>
                <span className="font-mono text-[12px] text-dim print:text-neutral-600">{r.period} · {r.mode}</span>
              </div>
              <ul className="mt-1.5 list-disc pl-5 text-muted print:text-neutral-800">
                {r.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 break-inside-avoid">
        <h2 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">Selected projects</h2>
        <ul className="mt-2 list-disc pl-5 text-muted print:text-neutral-800">
          {CASE_STUDIES.map((c) => (
            <li key={c.slug}><b className="text-ink print:text-black">{c.title}</b> — {c.short}. {c.metrics.map((m) => `${m.value} ${m.label}`).join("; ")}.</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 break-inside-avoid sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">Stack</h2>
          <p className="mt-2 text-muted print:text-neutral-800"><b className="text-ink print:text-black">Daily:</b> {STACK.daily.join(", ")}</p>
          <p className="mt-1 text-muted print:text-neutral-800"><b className="text-ink print:text-black">Shipped:</b> {STACK.shipped.join(", ")}</p>
          <p className="mt-1 text-muted print:text-neutral-800"><b className="text-ink print:text-black">Working:</b> {STACK.working.join(", ")}</p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">Education &amp; certifications</h2>
          <p className="mt-2 text-muted print:text-neutral-800"><b className="text-ink print:text-black">{EDUCATION.degree}</b>, {EDUCATION.school}, {EDUCATION.years}</p>
          {CERTIFICATIONS.map((c) => <p key={c.title} className="mt-1 text-muted print:text-neutral-800">{c.title} — {c.issuer}</p>)}
        </div>
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[12px] text-dim print:hidden">
        <span>Open to {SITE.availableFor} · remote with US/EU overlap or relocation</span>
        <a href={SITE.resumeUrl} className="rounded-full bg-accent px-4 py-2 font-semibold text-bg hover:bg-peach">Download PDF ↓</a>
      </footer>
    </article>
  );
}
