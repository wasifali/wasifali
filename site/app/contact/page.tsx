import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Dot, Eyebrow, Tile } from "@/components/tile";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Senior, Lead or Staff roles on distributed teams with US or EU overlap. Replies within a day.",
};

export default function ContactPage() {
  return (
    <div className="bento">
      <Tile cols={7} rows={2} tone="hero" as="section" className="justify-between p-8 md:p-10">
        <div className="flex items-center gap-2.5">
          <Dot />
          <Eyebrow>Contact · replies within a day · {SITE.timezone}</Eyebrow>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[36px] font-bold leading-[1] tracking-[-0.035em] md:text-[54px]">Let&apos;s talk about your backend.</h1>
          <p className="text-[16px] leading-relaxed text-muted md:text-[17px]">
            {SITE.availableFor} on distributed product teams with US or EU overlap. Enterprise platforms, high-throughput services, Web3 integrations.
          </p>
        </div>
      </Tile>

      <Tile cols={5} rows={4} as="section" className="gap-4" ariaLabel="Contact form">
        <Eyebrow>Message</Eyebrow>
        <ContactForm />
      </Tile>

      <Tile cols={7} tone="accent" href={`mailto:${SITE.email}`} className="justify-between" ariaLabel="Email Wasif">
        <Eyebrow tone="bg">Email · fastest</Eyebrow>
        <span className="text-[24px] font-bold leading-tight tracking-[-0.02em] break-all md:text-[26px]">{SITE.email}</span>
      </Tile>

      <Tile cols={2} href={SITE.linkedin} className="justify-between p-5" ariaLabel="LinkedIn profile">
        <Eyebrow tone="peach">LinkedIn</Eyebrow>
        <span className="text-[15px] font-semibold">in/wasifali1</span>
      </Tile>
      <Tile cols={2} href={SITE.github} className="justify-between p-5" ariaLabel="GitHub profile">
        <Eyebrow tone="peach">GitHub</Eyebrow>
        <span className="text-[15px] font-semibold">{SITE.handle}</span>
      </Tile>
      <Tile cols={3} href={SITE.whatsapp} className="justify-between p-5" ariaLabel="WhatsApp">
        <Eyebrow tone="peach">WhatsApp</Eyebrow>
        <span className="text-[15px] font-semibold">{SITE.phoneDisplay}</span>
      </Tile>
    </div>
  );
}
