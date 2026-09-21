import type { Metadata } from "next";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE, SITE, SKILLS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description: `${SITE.name}, ${SITE.role}. Printable résumé.`,
  robots: { index: false },
};

const H2 = "font-mono text-[11px] font-semibold tracking-[0.2em] text-accent uppercase";

/**
 * HTML mirror of public/resume/Wasif-Ali-Resume.pdf, rendered from the same content as the site.
 * Print-optimised; `npm run resume:pdf` can regenerate the PDF from this page (see site/README.md).
 */
export default function ResumePage() {
  return (
    <article className="resume mx-auto max-w-[840px] rounded-tile border border-line bg-surface p-8 text-[14px] leading-relaxed text-ink md:p-12 print:max-w-none print:rounded-none print:border-0 print:bg-white print:p-0 print:text-black">
      <header className="flex flex-col gap-2 border-b-2 border-accent pb-5">
        <h1 className="text-[34px] font-bold leading-none tracking-[-0.03em]">{SITE.name}</h1>
        <p className="text-[16px] font-semibold text-peach print:text-neutral-800">{SITE.headline}</p>
        <p className="font-mono text-[12px] text-dim print:text-neutral-600">
          {SITE.phoneDisplay} · {SITE.email} · {SITE.location} · linkedin.com/in/wasifali1 · github.com/{SITE.handle}
        </p>
      </header>

      <section className="mt-6">
        <h2 className={H2}>Professional summary</h2>
        <p className="mt-2 text-muted print:text-neutral-800">{SITE.summary}</p>
      </section>

      <section className="mt-6 break-inside-avoid">
        <h2 className={H2}>Leadership &amp; technical skills</h2>
        <dl className="mt-2 flex flex-col gap-1.5">
          {SKILLS.map((g) => (
            <div key={g.title} className="text-muted print:text-neutral-800">
              <dt className="inline font-semibold text-ink print:text-black">{g.title}: </dt>
              <dd className="inline">{g.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-6">
        <h2 className={H2}>Leadership experience</h2>
        <div className="mt-3 flex flex-col gap-5">
          {EXPERIENCE.map((r) => (
            <div key={r.company} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[16px] font-bold">
                  {r.title} · <span className="font-semibold text-accent">{r.company}</span>
                </h3>
                <span className="font-mono text-[12px] text-dim print:text-neutral-600">{r.period} · {r.mode}</span>
              </div>
              <ul className="mt-1.5 list-disc pl-5 text-muted print:text-neutral-800">
                {r.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 break-inside-avoid sm:grid-cols-2">
        <div>
          <h2 className={H2}>Education</h2>
          <p className="mt-2 text-muted print:text-neutral-800">
            <b className="text-ink print:text-black">{EDUCATION.degree}</b>, {EDUCATION.school} · {EDUCATION.years}
          </p>
        </div>
        <div>
          <h2 className={H2}>Certifications</h2>
          <ul className="mt-2 list-disc pl-5 text-muted print:text-neutral-800">
            {CERTIFICATIONS.map((c) => <li key={c.title}>{c.title} — {c.issuer}</li>)}
          </ul>
        </div>
      </section>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4 text-[12px] text-dim">
        <span>Open to {SITE.availableFor} · remote with US/EU overlap or relocation</span>
        <a href={SITE.resumeUrl} className="rounded-full border border-accent/50 px-3.5 py-1.5 font-semibold text-peach hover:bg-coal">Download PDF ↓</a>
      </footer>
    </article>
  );
}
