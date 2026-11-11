"use client";

import { useMemo, useState } from "react";
import type { ShowcaseCardData } from "@/lib/showcase";
import { ShowcaseCard } from "./ShowcaseCard";

const PAGE = 24;

export function ShowcaseGallery({ apps, categories }: { apps: ShowcaseCardData[]; categories: string[] }) {
  const [cat, setCat] = useState<string>("All");
  const [shown, setShown] = useState(PAGE);

  const filtered = useMemo(() => apps.filter((a) => cat === "All" || a.category === cat), [apps, cat]);

  const visible = filtered.slice(0, shown);

  function pick(c: string) {
    setCat(c);
    setShown(PAGE);
  }

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter by category"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => pick(c)}
              aria-pressed={cat === c}
              className={`h-9 shrink-0 whitespace-nowrap rounded-full px-4 text-[14px] font-medium transition ${
                cat === c ? "bg-ink text-on-ink" : "bg-bg-alt text-fg-2 ring-1 ring-line hover:text-fg"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <p role="status" className="sr-only">
        {filtered.length} {filtered.length === 1 ? "app" : "apps"}
        {cat !== "All" ? ` in ${cat}` : ""}
      </p>

      <h2 className="sr-only">Apps</h2>
      {visible.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((a, i) => (
            <ShowcaseCard key={a.img} app={a} priority={i < 3} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-[20px] bg-bg-alt p-8 text-center text-[16px] text-fg-2">
          No apps in this category yet. Choose All to see every app.
        </p>
      )}

      {filtered.length > shown && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShown((n) => n + PAGE)}
            className="h-11 rounded-full bg-ink px-6 text-[15px] font-medium text-on-ink transition hover:opacity-85"
          >
            Show more apps
          </button>
        </div>
      )}
    </div>
  );
}
