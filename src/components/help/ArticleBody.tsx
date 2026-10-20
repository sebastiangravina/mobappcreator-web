import type { Block } from "@/lib/help";
import type { HelpImage } from "@/lib/help-images";
import { Icon } from "../Icon";
import { Rich } from "./Rich";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const headingsOf = (blocks: Block[]) =>
  blocks.filter((b): b is { h: string } => "h" in b).map((b) => ({ id: slugify(b.h), text: b.h }));

// ── Image placement ─────────────────────────────────────────────────
// Each image is shown after the first block (or numbered step) whose text contains its anchor.

type Placement = { block: number; step?: number };

function textOf(b: Block): string {
  if ("p" in b) return b.p;
  if ("h" in b) return b.h;
  if ("ul" in b) return b.ul.join("\n");
  if ("ol" in b) return b.ol.join("\n");
  if ("note" in b) return b.note;
  if ("code" in b) return b.code;
  return "";
}

function place(blocks: Block[], img: HelpImage): Placement | null {
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (img.anchor.startsWith("H:")) {
      if ("h" in b && b.h === img.anchor.slice(2)) return { block: i };
      continue;
    }
    if ("steps" in b) {
      const s = b.steps.findIndex((st) => `${st.title}\n${st.body ?? ""}`.includes(img.anchor));
      if (s >= 0) return { block: i, step: s };
    } else if (textOf(b).includes(img.anchor)) return { block: i };
  }
  return null;
}

function Figures({ images }: { images: HelpImage[] }) {
  if (!images.length) return null;
  // Several small screenshots in a row (phone screens, QR codes, examples) sit side by side.
  const row = images.length > 1 && images.every((im) => im.w <= 520 && !im.caption);
  return (
    <div className={row ? "!my-7 flex flex-wrap items-start gap-4" : "!my-7 space-y-5"}>
      {images.map((im) => (
        <figure key={im.src} className={row ? "min-w-0" : ""} style={row ? { width: Math.min(im.w, 260) } : undefined}>
          <a
            href={im.src}
            target="_blank"
            rel="noopener"
            title="Open full size"
            className="block overflow-hidden rounded-[14px] bg-white ring-1 ring-line transition hover:ring-fg-3"
            style={row ? undefined : { maxWidth: Math.min(im.w, 720) }}
          >
            <img src={im.src} alt={im.alt} width={im.w} height={im.h} loading="lazy" decoding="async" className="block h-auto w-full" />
          </a>
          {im.caption && <figcaption className="mt-2 text-[14px] font-medium text-fg-2">{im.alt}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

// ── Body ────────────────────────────────────────────────────────────

export function ArticleBody({ blocks, images = [] }: { blocks: Block[]; images?: HelpImage[] }) {
  const afterBlock = new Map<number, HelpImage[]>();
  const afterStep = new Map<string, HelpImage[]>();
  for (const img of images) {
    const p = place(blocks, img);
    if (!p) continue;
    if (p.step === undefined) afterBlock.set(p.block, [...(afterBlock.get(p.block) ?? []), img]);
    else {
      const k = `${p.block}:${p.step}`;
      afterStep.set(k, [...(afterStep.get(k) ?? []), img]);
    }
  }

  return (
    <div className="help-body space-y-5 text-[17px] leading-[1.7] text-fg-2">
      {blocks.map((b, i) => (
        <BlockView key={i} b={b} i={i} afterStep={afterStep} after={afterBlock.get(i) ?? []} />
      ))}
    </div>
  );
}

function BlockView({
  b,
  i,
  after,
  afterStep,
}: {
  b: Block;
  i: number;
  after: HelpImage[];
  afterStep: Map<string, HelpImage[]>;
}) {
  let el: React.ReactNode = null;
  if ("h" in b)
    el = (
      <h2 id={slugify(b.h)} className="!mt-12 scroll-mt-24 text-[24px] font-bold leading-tight tracking-tight text-fg">
        {b.h}
      </h2>
    );
  else if ("p" in b)
    el = (
      <p>
        <Rich text={b.p} />
      </p>
    );
  else if ("ul" in b)
    el = (
      <ul className="space-y-2 pl-5 [&>li]:list-disc [&>li]:pl-1 marker:text-fg-3">
        {b.ul.map((t, j) => (
          <li key={j}>
            <Rich text={t} />
          </li>
        ))}
      </ul>
    );
  else if ("ol" in b)
    el = (
      <ol className="space-y-2 pl-5 [&>li]:list-decimal [&>li]:pl-1 marker:font-semibold marker:text-fg-3">
        {b.ol.map((t, j) => (
          <li key={j}>
            <Rich text={t} />
          </li>
        ))}
      </ol>
    );
  else if ("steps" in b)
    el = (
      <ol className="!my-8 space-y-0">
        {b.steps.map((s, j) => (
          <li key={j} className="relative flex gap-5 pb-7 last:pb-0">
            {j < b.steps.length - 1 && <span aria-hidden className="absolute left-[15px] top-9 bottom-1 w-px bg-line" />}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-[14px] font-semibold text-on-ink">
              {j + 1}
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="font-semibold text-fg">{s.title}</p>
              {s.body && (
                <p className="mt-1">
                  <Rich text={s.body} />
                </p>
              )}
              <Figures images={afterStep.get(`${i}:${j}`) ?? []} />
            </div>
          </li>
        ))}
      </ol>
    );
  else if ("note" in b) {
    const warn = b.tone === "warning";
    el = (
      <div
        role="note"
        className="flex gap-3 rounded-[16px] p-4 text-[15.5px] leading-relaxed"
        style={{ background: `color-mix(in srgb, ${warn ? "var(--orange)" : "var(--sky)"} 11%, transparent)` }}
      >
        <span className="mt-0.5 shrink-0" style={{ color: warn ? "var(--orange)" : "var(--sky)" }}>
          <Icon name={warn ? "warning" : "info"} size={20} />
        </span>
        <p className="text-fg">
          <Rich text={b.note} />
        </p>
      </div>
    );
  } else if ("code" in b)
    el = (
      <pre className="overflow-x-auto rounded-[14px] bg-[#1d1d1f] p-4 text-[13.5px] leading-relaxed text-[#f5f5f7] ring-1 ring-line">
        <code className="font-mono">{b.code}</code>
      </pre>
    );

  return (
    <>
      {el}
      <Figures images={after} />
    </>
  );
}
