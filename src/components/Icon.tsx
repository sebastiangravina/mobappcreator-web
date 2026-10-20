import type { IconName } from "@/lib/content";

export type Name = IconName | "check" | "dash" | "arrow" | "chevron" | "plus" | "sun" | "moon" | "menu" | "close" | "phone" | "tablet" | "android" | "mail" | "pin" | "info" | "warning" | "search" | "book";

// Simple 24px line icons in the spirit of SF Symbols.
const paths: Record<Name, React.ReactNode> = {
  bell: <><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z" /><path d="M10 20a2 2 0 0 0 4 0" /></>,
  cart: <><path d="M3 4h2l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6" /><circle cx="9.5" cy="19.5" r="1.2" /><circle cx="17" cy="19.5" r="1.2" /></>,
  form: <><rect x="5" y="3.5" width="14" height="17" rx="2.5" /><path d="M8.5 8h7M8.5 12h7M8.5 16h4" /></>,
  radio: <><circle cx="12" cy="12" r="2" /><path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6M5.3 5.3a9.5 9.5 0 0 0 0 13.4M18.7 5.3a9.5 9.5 0 0 1 0 13.4" /></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2.5" /><path d="m16 10.5 5-3v9l-5-3" /></>,
  chart: <><path d="M4 20h16" /><path d="M7 16v-4M12 16V7M17 16v-7" /></>,
  user: <><circle cx="12" cy="8.5" r="3.5" /><path d="M5 20a7 7 0 0 1 14 0" /></>,
  tag: <><path d="M3.5 12.5V4.5a1 1 0 0 1 1-1h8l8 8-9 9-8-8Z" /><circle cx="8" cy="8" r="1.3" /></>,
  wand: <><path d="m4 20 11-11M13 7l4 4" /><path d="M18 3v3M16.5 4.5h3M20 9v2M19 10h2M9 3v2M8 4h2" /></>,
  rocket: <><path d="M12 15c-2-2-3-4-3-7 0-2.5 1.2-4.3 3-5.5 1.8 1.2 3 3 3 5.5 0 3-1 5-3 7Z" /><path d="M9 11.5 6 14l1 4 3-1.5M15 11.5l3 2.5-1 4-3-1.5M12 19v2.5" /><circle cx="12" cy="8" r="1.2" /></>,
  megaphone: <><path d="M4 10v4a1 1 0 0 0 1 1h3l8 4.5v-15L8 9H5a1 1 0 0 0-1 1Z" /><path d="M8 15l1.5 5M19 9.5a3.5 3.5 0 0 1 0 5" /></>,
  globe: <><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.3 3.5 8.5S14.5 18 12 20.5C9.5 18 8.5 15.2 8.5 12S9.5 6 12 3.5Z" /></>,
  bolt: <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />,
  layers: <><path d="m12 3.5 8.5 4.5L12 12.5 3.5 8 12 3.5Z" /><path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5" /></>,
  lock: <><rect x="5" y="10.5" width="14" height="10" rx="2.5" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /></>,
  store: <><path d="M4 9.5 5.5 4h13L20 9.5a2.7 2.7 0 0 1-5.3.6 2.7 2.7 0 0 1-5.4 0 2.7 2.7 0 0 1-5.3-.6Z" /><path d="M5.5 12v8h13v-8M10 20v-5h4v5" /></>,
  palette: <><path d="M12 3.5a8.5 8.5 0 0 0 0 17c1.2 0 1.8-.8 1.5-1.8-.4-1.3.3-2.2 1.6-2.2h1.6a3.8 3.8 0 0 0 3.8-3.8c0-5.2-3.8-9.2-8.5-9.2Z" /><circle cx="8" cy="11" r="1" /><circle cx="11" cy="7.5" r="1" /><circle cx="15.5" cy="8.5" r="1" /></>,
  code: <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  dash: <path d="M8 12h8" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  plus: <path d="M12 5v14M5 12h14" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" /></>,
  moon: <path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10Z" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  phone: <><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></>,
  tablet: <><rect x="4.5" y="3" width="15" height="18" rx="2.5" /><path d="M11 18h2" /></>,
  android: <><rect x="5" y="9" width="14" height="10" rx="2.5" /><path d="M7 9a5 5 0 0 1 10 0M8 5 6.5 3M16 5l1.5-2" /><circle cx="9.5" cy="12" r=".6" /><circle cx="14.5" cy="12" r=".6" /></>,
  mail: <><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" /><path d="m4 7 8 6 8-6" /></>,
  info: <><circle cx="12" cy="12" r="8.5" /><path d="M12 11v5M12 8h.01" /></>,
  warning: <><path d="M10.3 4.3 3 17a2 2 0 0 0 1.7 3h14.6A2 2 0 0 0 21 17L13.7 4.3a2 2 0 0 0-3.4 0Z" /><path d="M12 10v4M12 17h.01" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></>,
  book: <><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" /></>,
  pin: <><path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></>,
};

export function Icon({
  name,
  size = 24,
  className,
  strokeWidth = 1.7,
  label,
}: {
  name: Name;
  size?: number;
  className?: string;
  strokeWidth?: number;
  label?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {paths[name]}
    </svg>
  );
}
