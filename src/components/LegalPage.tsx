import { Rich } from "./help/Rich";
import { Container } from "./ui";
import { legalEntity, legalStatus, type LegalBlock, type LegalSection } from "@/lib/legal";


const anchor = (h: string) =>
  h
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function Contact() {
  return (
    <address className="mb-5 rounded-[18px] bg-bg-alt p-5 text-[16px] not-italic leading-relaxed text-fg-2 ring-1 ring-line">
      <strong className="font-semibold text-fg">{legalEntity.name}</strong>
      <br />
      {legalEntity.region}
      {legalStatus.mailingAddress ? (
        <>
          <br />
          {legalStatus.mailingAddress}
        </>
      ) : null}
      <br />
      <a href={`mailto:${legalEntity.email}`}>{legalEntity.email}</a>
      <br />
      <a href={legalEntity.website}>{legalEntity.website.replace("https://", "")}</a>
    </address>
  );
}

function Block({ b }: { b: LegalBlock }) {
  switch (b.t) {
    case "p":
      return (
        <p>
          <Rich text={b.text} />
        </p>
      );
    case "ul":
      return (
        <ul>
          {b.items.map((it) => (
            <li key={it}>
              <Rich text={it} />
            </li>
          ))}
        </ul>
      );
    case "contact":
      return <Contact />;
    case "todo":
      return process.env.NODE_ENV === "development" ? (
        <p role="note" className="rounded-[14px] border border-dashed border-orange/60 bg-orange/10 p-4 !text-[14px]">
          <strong className="font-semibold text-fg">Review note (only shown in development): </strong>
          {b.text}
        </p>
      ) : null;
  }
}

export function LegalPage({
  title,
  summary,
  sections,
}: {
  title: string;
  summary: string;
  sections: LegalSection[];
}) {
  return (
    <article className="pt-32 pb-28 sm:pt-40">
      <Container className="max-w-[760px]">
        <p className="eyebrow">Legal</p>
        <h1 className="headline mt-3">{title}</h1>
        <p className="lede mt-5">{summary}</p>
        <p className="mt-5 text-[14px] text-fg-3">
          {legalStatus.effectiveDate ? `Effective ${legalStatus.effectiveDate}` : `Last updated ${legalStatus.lastUpdated}`} ·
          Operated by {legalEntity.name}, a Florida limited liability company
        </p>

        <nav aria-label="On this page" className="mt-10 rounded-[20px] bg-bg-alt p-6 ring-1 ring-line">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-fg-3">On this page</h2>
          <ol className="mt-3 grid gap-x-8 gap-y-1.5 text-[15px] sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.h}>
                <a href={`#${anchor(s.h)}`} className="text-fg-2 hover:text-link">
                  {s.h}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose-apple mt-4">
          {sections.map((s) => (
            <section key={s.h} id={anchor(s.h)} className="scroll-mt-24">
              <h2>{s.h}</h2>
              {s.blocks.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
