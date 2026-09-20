"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="mx-auto flex w-full max-w-[1248px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 pt-8 pb-2 sm:px-6 lg:px-8">
      <Link href="/" className="font-mono text-[14px] font-semibold tracking-[0.15em] text-accent" aria-label="Wasif Ali, home">
        WASIF.DEV
      </Link>
      <nav aria-label="Main" className="flex flex-wrap items-center gap-2">
        {NAV.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full border px-3.5 py-2 text-[14px] font-medium transition-colors",
                active
                  ? "border-line-strong bg-line-strong text-ink"
                  : "border-line bg-surface-2 text-muted hover:text-ink hover:border-line-strong",
              )}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          className="rounded-full bg-accent px-3.5 py-2 text-[14px] font-semibold text-bg transition-colors hover:bg-peach"
        >
          Hire me
        </Link>
      </nav>
    </header>
  );
}
