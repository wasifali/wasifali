"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/content";

/**
 * Zero-backend contact form: composes a mailto: link from the fields so it works on Vercel
 * with no API keys. Swap `handleSubmit` for a server action + email provider when wanted.
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "someone"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "h-12 w-full rounded-xl border border-line bg-bg px-3.5 text-[15px] text-ink placeholder:text-dim focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className="flex flex-col gap-2 text-[13px] text-muted">
        Your name
        <input className={field} type="text" name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="flex flex-col gap-2 text-[13px] text-muted">
        Work email
        <input className={field} type="email" name="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="flex flex-col gap-2 text-[13px] text-muted sm:col-span-2">
        What are you building, and what role is this?
        <textarea
          className="min-h-[140px] w-full resize-y rounded-xl border border-line bg-bg px-3.5 py-3 text-[15px] text-ink placeholder:text-dim focus:border-accent"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[13px] text-dim">Opens your mail client with the message prefilled. No newsletter, no CRM.</span>
        <button type="submit" className="h-12 rounded-xl bg-accent px-6 text-[15px] font-bold text-bg transition-colors hover:bg-peach">
          Send message
        </button>
      </div>
    </form>
  );
}
