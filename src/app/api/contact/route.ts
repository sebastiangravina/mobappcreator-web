// Contact form endpoint: validates the message and emails it to the team through Resend.
// The API key only lives on the server, in the RESEND_API_KEY environment variable.

const TOPICS = ["Sales question", "Agency plans", "Technical support", "Partnerships", "Other"] as const;
const LIMITS = { name: 100, company: 120, email: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort limit per server instance: 5 messages per IP every 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const fail = (status: number, error: string) => Response.json({ ok: false, error }, { status });

export async function POST(request: Request) {
  // Only accept posts sent from this website.
  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) return fail(403, "Not allowed.");

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return fail(429, "Too many messages. Please try again in a few minutes.");

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return fail(400, "Invalid request.");
  }

  // Hidden field that people never see; bots tend to fill it in. Pretend it worked.
  if (clean(data.website, 200)) return Response.json({ ok: true });

  const name = clean(data.name, LIMITS.name);
  const company = clean(data.company, LIMITS.company);
  const email = clean(data.email, LIMITS.email);
  const message = clean(data.message, LIMITS.message);
  const topic = TOPICS.includes(data.subject as (typeof TOPICS)[number]) ? (data.subject as string) : "Other";

  if (!name || !email || !message) return fail(400, "Please fill in your name, email and message.");
  if (!EMAIL_RE.test(email)) return fail(400, "Please enter a valid email address.");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = (process.env.CONTACT_TO_EMAIL ?? "info@mobappcreator.com").split(",").map((s) => s.trim());
  if (!apiKey || !from) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_FROM_EMAIL is not set.");
    return fail(500, "The form is not available right now. Please email info@mobappcreator.com.");
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company || "—"],
    ["Email", email],
    ["Topic", topic],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}\n\n— Sent from the contact form on mobappcreator.com`;
  const html = `<table style="font:14px/1.5 -apple-system,Segoe UI,sans-serif;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="padding:2px 16px 2px 0;color:#6e6e73">${k}</td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p style="font:15px/1.6 -apple-system,Segoe UI,sans-serif;white-space:pre-wrap">${escapeHtml(
    message,
  )}</p><p style="font:12px -apple-system,Segoe UI,sans-serif;color:#6e6e73">Sent from the contact form on mobappcreator.com</p>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `[Website] ${topic}: ${name}${company ? ` (${company})` : ""}`,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend error", res.status, await res.text());
      return fail(502, "We couldn’t send your message. Please try again or email info@mobappcreator.com.");
    }
  } catch (err) {
    console.error("Contact form: Resend request failed", err);
    return fail(502, "We couldn’t send your message. Please try again or email info@mobappcreator.com.");
  }

  return Response.json({ ok: true });
}
