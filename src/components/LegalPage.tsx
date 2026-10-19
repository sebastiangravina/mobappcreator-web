import { Container } from "./ui";

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <article className="pt-32 pb-28 sm:pt-40">
      <Container className="max-w-[720px]">
        <p className="eyebrow">Legal</p>
        <h1 className="headline mt-3">{title}</h1>
        <p className="mt-4 text-[14px] text-fg-3">Last updated {updated}</p>
        <div
          role="note"
          className="mt-8 rounded-[16px] border border-dashed border-orange/60 bg-orange/10 p-4 text-[14px] leading-relaxed"
        >
          Placeholder text for the website draft. Replace with the current legal text from MobApp Labs before launch.
        </div>
        <div className="prose-apple mt-6">
          {sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
