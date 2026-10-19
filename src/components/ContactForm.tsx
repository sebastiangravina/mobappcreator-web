"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * No backend yet: on submit this opens the visitor's email app with the
 * message filled in. To collect submissions instead, point the form at a
 * service such as Formspree, Basin or a HubSpot form.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nCompany: ${f.get("company")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-[12px] border border-line bg-card px-4 py-3 text-[16px] text-fg outline-none transition placeholder:text-fg-3 focus:border-sky focus:ring-4 focus:ring-sky/20";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="text-[14px] font-medium">
        Name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="text-[14px] font-medium">
        Company <span className="font-normal text-fg-3">(optional)</span>
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="text-[14px] font-medium sm:col-span-2">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
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
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="h-12 rounded-full bg-ink px-8 text-[17px] font-medium text-on-ink transition hover:opacity-85 active:scale-[0.98]"
        >
          Send message
        </button>
        <p role="status" className="text-[14px] text-fg-2">
          {sent ? "Your email app should open with the message ready to send." : ""}
        </p>
      </div>
    </form>
  );
}
