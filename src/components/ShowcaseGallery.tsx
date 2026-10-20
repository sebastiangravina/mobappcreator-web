"use client";

import { useMemo, useState } from "react";
import type { ShowcaseApp } from "@/lib/showcase";
import { Icon } from "./Icon";
import { ShowcaseCard } from "./ShowcaseCard";

const PAGE = 24;

export function ShowcaseGallery({ apps, categories }: { apps: ShowcaseApp[]; categories: string[] }) {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(PAGE);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return apps.filter(
      (a) =>
        (cat === "All" || a.category === cat) &&
        (!term || a.name.toLowerCase().includes(term) || a.category.toLowerCase().includes(term)),
    );
  }, [apps, cat, q]);

  const count = (c: string) => (c === "All" ? apps.length : apps.filter((a) => a.category === c).length);
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
              {c} <span className="font-normal tabular-nums">{count(c)}</span>
            </button>
          ))}
        </div>
        <label className="flex h-10 w-full items-center gap-2 rounded-full bg-bg-alt px-4 ring-1 ring-line focus-within:ring-2 focus-within:ring-sky lg:w-64">
          <Icon name="search" size={17} className="shrink-0 text-fg-3" />
          <span className="sr-only">Search apps</span>
          <input
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setShown(PAGE);
            }}
            placeholder="Search apps"
            className="h-full w-full bg-transparent text-[15px] text-fg outline-none placeholder:text-fg-3"
          />
        </label>
      </div>

      <p role="status" className="mt-6 text-[14px] text-fg-2">
        {filtered.length} {filtered.length === 1 ? "app" : "apps"}
        {cat !== "All" ? ` in ${cat}` : ""}
        {q.trim() ? ` matching “${q.trim()}”` : ""}
      </p>

      <h2 className="sr-only">Apps</h2>
      {visible.length ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((a, i) => (
            <ShowcaseCard key={a.slug} app={a} priority={i < 3} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-[20px] bg-bg-alt p-8 text-center text-[16px] text-fg-2">
          No apps match your search. Try another name or choose All.
        </p>
      )}

      {filtered.length > shown && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShown((n) => n + PAGE)}
            className="h-11 rounded-full bg-ink px-6 text-[15px] font-medium text-on-ink transition hover:opacity-85"
          >
            Show more apps ({filtered.length - shown} left)
          </button>
        </div>
      )}
    </div>
  );
}
