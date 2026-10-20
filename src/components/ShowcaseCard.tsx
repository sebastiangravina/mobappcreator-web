import type { ShowcaseApp } from "@/lib/showcase";
import { Icon } from "./Icon";

export function ShowcaseCard({ app, priority = false }: { app: ShowcaseApp; priority?: boolean }) {
  const platforms = [app.ios && "iPhone", app.android && "Android"].filter(Boolean) as string[];
  return (
    <article className="flex flex-col overflow-hidden rounded-[24px] bg-card ring-1 ring-line">
      {/* The card image already shows the app name, category, screenshots and description. */}
      <img
        src={`/showcase/${app.slug}.webp`}
        srcSet={`/showcase/640/${app.slug}.webp 640w, /showcase/${app.slug}.webp 1000w`}
        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        alt={`${app.name}: ${app.description}`}
        width={1000}
        height={786}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full bg-[#f5f7fb]"
      />
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div className="min-w-0">
          <h3 className="truncate text-[16px] font-semibold tracking-tight">{app.name}</h3>
          <p className="text-[13px] text-fg-2">{app.category}</p>
        </div>
        <p className="flex shrink-0 items-center gap-1.5 text-[13px] text-fg-2">
          {app.ios && <Icon name="phone" size={16} />}
          {app.android && <Icon name="android" size={16} />}
          <span>{platforms.join(" · ")}</span>
        </p>
      </div>
    </article>
  );
}
