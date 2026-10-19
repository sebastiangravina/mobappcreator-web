import Link from "next/link";
import Image from "next/image";
import { Icon } from "./Icon";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  alt = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${alt ? "bg-bg-alt" : ""} ${className}`}>
      {children}
    </section>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link";
  size?: "md" | "lg";
  className?: string;
};

const isExternal = (href: string) => href.startsWith("http");

export function Button({ href, children, variant = "primary", size = "md", className = "" }: ButtonProps) {
  const sizes = size === "lg" ? "h-12 px-7 text-[17px]" : "h-10 px-5 text-[15px]";
  const styles = {
    primary: `${sizes} rounded-full bg-ink text-on-ink font-medium hover:opacity-85 active:scale-[0.98]`,
    secondary: `${sizes} rounded-full border border-line text-fg font-medium hover:bg-bg-alt active:scale-[0.98]`,
    link: "text-link font-medium hover:underline underline-offset-4 text-[17px]",
  }[variant];
  const content = (
    <>
      {children}
      {variant === "link" && <Icon name="chevron" size={16} strokeWidth={2.2} className="-mr-1" />}
    </>
  );
  const cls = `inline-flex items-center justify-center gap-1.5 whitespace-nowrap transition ${styles} ${className}`;
  return isExternal(href) ? (
    <a href={href} className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/brand/mark.png" alt="" width={30} height={30} priority className="h-[30px] w-[30px]" />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-extrabold tracking-[0.04em]">MOBAPP</span>
        <span className="text-[10.5px] font-light tracking-[0.32em]">CREATOR</span>
      </span>
    </span>
  );
}

/** The four brand arcs as a thin decorative bar. */
export function BrandBar({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex h-1 gap-1 ${className}`}>
      <span className="flex-1 rounded-full bg-sky" />
      <span className="flex-1 rounded-full bg-magenta" />
      <span className="flex-1 rounded-full bg-orange" />
      <span className="flex-1 rounded-full bg-lime" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-32 pb-14 text-center sm:pt-40 sm:pb-20">
      <Container>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="display mx-auto max-w-4xl">{title}</h1>
        {lede && <p className="lede mx-auto mt-6 max-w-2xl">{lede}</p>}
        {children && <div className="mt-9 flex flex-wrap items-center justify-center gap-4">{children}</div>}
      </Container>
    </section>
  );
}

export function SampleTag() {
  return (
    <span className="ml-2 inline-block rounded-full border border-dashed border-line px-2 py-0.5 align-middle text-[11px] font-medium uppercase tracking-wider text-fg-3">
      Sample
    </span>
  );
}
