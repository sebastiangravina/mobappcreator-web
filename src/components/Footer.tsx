import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { BrandBar, Container, Logo } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt text-[13px] text-fg-2">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo className="text-fg" />
            <p className="mt-4 max-w-xs leading-relaxed">
              No-code mobile apps for small businesses, entrepreneurs and agencies.
            </p>
            <BrandBar className="mt-6 max-w-[140px]" />
          </div>
          {footerNav.map((col) => (
            <div key={col.title}>
              <h2 className="mb-3 font-semibold text-fg">{col.title}</h2>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("http") ? (
                      <a href={l.href} className="transition hover:text-fg">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="transition hover:text-fg">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MobApp Labs LLC. All rights reserved.
          </p>
          <p>
            Apple, iPhone and iPad are trademarks of Apple Inc. Android and Google Play are trademarks of Google LLC.
          </p>
        </div>
        <p className="sr-only">{site.name}</p>
      </Container>
    </footer>
  );
}
