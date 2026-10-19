"use client";

import { Icon } from "./Icon";

/**
 * Flips between light and dark and remembers the choice.
 * The initial theme is applied before paint by the inline script in layout.tsx,
 * so the icon is driven purely by CSS to avoid a hydration mismatch.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const current =
      root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      className="theme-toggle grid h-9 w-9 place-items-center rounded-full text-fg-2 transition hover:bg-bg-alt hover:text-fg"
    >
      <Icon name="moon" size={18} className="icon-moon" />
      <Icon name="sun" size={18} className="icon-sun" />
    </button>
  );
}
