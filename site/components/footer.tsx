import Link from "next/link";
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-[1248px] flex-col gap-3 px-4 pb-10 pt-6 text-[14px] text-dim sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <span className="font-mono tracking-[0.12em] uppercase">{SITE.email}</span>
      <nav aria-label="Footer" className="flex flex-wrap gap-5">
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
        <a href={SITE.resumeUrl} className="hover:text-ink">Résumé</a>
        <Link href="/contact" className="hover:text-ink">Contact</Link>
      </nav>
      <span>© {new Date().getFullYear()} {SITE.name}</span>
    </footer>
  );
}
