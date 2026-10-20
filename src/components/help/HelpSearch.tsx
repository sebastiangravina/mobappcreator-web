"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { Icon } from "../Icon";

export type SearchEntry = {
  href: string;
  title: string;
  description: string;
  category: string;
  text: string;
};

function score(entry: SearchEntry, terms: string[]) {
  const title = entry.title.toLowerCase();
  const desc = entry.description.toLowerCase();
  const text = entry.text.toLowerCase();
  let total = 0;
  for (const t of terms) {
    if (title.includes(t)) total += 10;
    else if (desc.includes(t)) total += 4;
    else if (text.includes(t)) total += 1;
    else return 0; // every term must match somewhere
  }
  return total;
}

export function HelpSearch({ entries, autoFocus = false }: { entries: SearchEntry[]; autoFocus?: boolean }) {
  const [q, setQ] = useState("");
  const listId = useId();

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter((t) => t.length > 1);
    if (!terms.length) return [];
    return entries
      .map((e) => ({ e, s: score(e, terms) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map((r) => r.e);
  }, [q, entries]);

  const searching = q.trim().length > 1;

  return (
    <div className="relative mx-auto w-full max-w-[640px] text-left">
      <label htmlFor="help-search" className="sr-only">
        Search help articles
      </label>
      <div className="flex h-14 items-center gap-3 rounded-full bg-card px-5 shadow-[var(--shadow)] ring-1 ring-line focus-within:ring-2 focus-within:ring-sky">
        <Icon name="search" size={20} className="shrink-0 text-fg-3" />
        <input
          id="help-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search help articles"
          autoComplete="off"
          autoFocus={autoFocus}
          aria-controls={listId}
          className="h-full w-full bg-transparent text-[17px] text-fg outline-none placeholder:text-fg-3 [&::-webkit-search-cancel-button]:hidden"
        />
        {q && (
          <button type="button" onClick={() => setQ("")} aria-label="Clear search" className="text-fg-3 hover:text-fg">
            <Icon name="close" size={18} />
          </button>
        )}
      </div>

      {searching && (
        <div
          id={listId}
          role="region"
          aria-live="polite"
          className="absolute inset-x-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-[22px] bg-card shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] ring-1 ring-line"
        >
          {results.length ? (
            <ul className="max-h-[60vh] divide-y divide-line overflow-y-auto">
              {results.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="block px-5 py-4 transition hover:bg-bg-alt">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-fg-3">{r.category}</span>
                    <span className="mt-0.5 block text-[16px] font-semibold text-fg">{r.title}</span>
                    <span className="mt-0.5 block text-[14px] text-fg-2">{r.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-5 py-6 text-[15px] text-fg-2">
              No articles match “{q.trim()}”. Try a different word, or{" "}
              <Link href="/contact/" className="text-link hover:underline">
                contact us
              </Link>
              .
            </p>
          )}
        </div>
      )}
    </div>
  );
}
