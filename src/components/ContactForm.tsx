"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

/** Sends the message to /api/contact, which emails it to the team through Resend. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) throw new Error(data.error);
      form.reset();
      setStatus({ state: "sent" });
    } catch (err) {
      setStatus({
        state: "error",
        message: (err instanceof Error && err.message) || `We couldn’t send your message. Please email ${site.email}.`,
      });
    }
  }

  const field =
    "mt-1.5 w-full rounded-[12px] border border-line bg-card px-4 py-3 text-[16px] text-fg outline-none transition placeholder:text-fg-3 focus:border-sky focus:ring-4 focus:ring-sky/20";
  const sending = status.state === "sending";

  if (status.state === "sent") {
    return (
      <div role="status" className="rounded-[20px] bg-bg-alt p-8 text-center ring-1 ring-line">
        <p className="title">Thanks, your message is on its way.</p>
        <p className="mt-2 text-[16px] text-fg-2">We’ll reply to the email address you gave us.</p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 text-[15px] font-medium text-link underline underline-offset-[3px]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" aria-busy={sending}>
      <label className="text-[14px] font-medium">
        Name
        <input name="name" required maxLength={100} autoComplete="name" className={field} />
      </label>
      <label className="text-[14px] font-medium">
        Company <span className="font-normal text-fg-3">(optional)</span>
        <input name="company" maxLength={120} autoComplete="organization" className={field} />
      </label>
      <label className="text-[14px] font-medium sm:col-span-2">
        Email
        <input name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
      </label>
      <label className="text-[14px] font-medium sm:col-span-2">
        Subject
        <select name="subject" className={field} defaultValue="Sales question">
          <option>Sales question</option>
          <option>Agency plans</option>
          <option>Technical support</option>
          <option>Partnerships</option>
          <option>Other</option>
        </select>
      </label>
      <label className="text-[14px] font-medium sm:col-span-2">
        Message
        <textarea name="message" required maxLength={5000} rows={5} className={`${field} resize-y`} />
      </label>
      {/* Spam trap: hidden from people and screen readers. */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="h-12 rounded-full bg-ink px-8 text-[17px] font-medium text-on-ink transition hover:opacity-85 active:scale-[0.98] disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className={`text-[14px] ${status.state === "error" ? "text-[#d70015] dark:text-[#ff6961]" : "text-fg-2"}`}>
          {status.state === "error" ? status.message : ""}
        </p>
      </div>
    </form>
  );
}
