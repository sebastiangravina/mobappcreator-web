"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/lib/site";
import { Icon } from "./Icon";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./ui";

export function Header() {
  const pathname = usePathname();
  // The menu is tied to the page it was opened on, so it closes on navigation.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => href.split("?")[0] !== "/" && pathname.startsWith(href.split("?")[0]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color] duration-300 ${
        scrolled || open ? "glass border-b border-line" : "border-b border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-on-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[14px] transition hover:text-fg ${
                  isActive(item.href) ? "text-fg" : "text-fg-2"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a href={site.loginUrl} className="hidden px-3 text-[14px] text-fg-2 transition hover:text-fg sm:inline">
            Log in
          </a>
          <a
            href={site.signupUrl}
            className="hidden h-8 items-center rounded-full bg-ink px-4 text-[13px] font-medium text-on-ink transition hover:opacity-85 sm:inline-flex"
          >
            Start free trial
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-3.5rem)] overflow-y-auto px-5 pb-10 lg:hidden">
          <ul className="mt-4 flex flex-col">
            {mainNav.map((item) => (
              <li key={item.label} className="border-b border-line">
                <Link href={item.href} className="block py-4 text-[22px] font-semibold tracking-tight">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-b border-line">
              <a href={site.loginUrl} className="block py-4 text-[22px] font-semibold tracking-tight">
                Log in
              </a>
            </li>
          </ul>
          <a
            href={site.signupUrl}
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-ink text-[17px] font-medium text-on-ink"
          >
            Start your {site.trialDays}-day free trial
          </a>
        </div>
      )}
    </header>
  );
}
