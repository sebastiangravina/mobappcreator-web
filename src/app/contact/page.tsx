import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { Container, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact Us",
  description:
    "Questions about MobAppCreator plans, agency white label or your app? Contact our team in Miami and Buenos Aires, or visit the Help Center for guides.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="How can we help?"
        lede="Questions about plans, agencies or your app? Send us a message and our team will get back to you."
      />
      <section className="pb-28">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[28px] bg-bg-alt p-6 sm:p-10">
            <ContactForm />
          </div>
          <aside className="space-y-5">
            <a href={site.helpUrl} className="flex items-start gap-4 rounded-[24px] p-6 ring-1 ring-line transition hover:bg-bg-alt">
              <span className="text-sky">
                <Icon name="globe" size={26} />
              </span>
              <span>
                <span className="block text-[17px] font-semibold">Help center</span>
                <span className="mt-1 block text-[15px] text-fg-2">Guides and answers for building and publishing your app.</span>
              </span>
            </a>
            {site.offices.map((o) => (
              <div key={o.country} className="flex items-start gap-4 rounded-[24px] p-6 ring-1 ring-line">
                <span className="text-magenta">
                  <Icon name="pin" size={26} />
                </span>
                <span>
                  <span className="block text-[17px] font-semibold">{o.company}</span>
                  <span className="text-[13px] text-fg-3">{o.country}</span>
                  {o.lines.map((l) => (
                    <span key={l} className="block text-[15px] text-fg-2">
                      {l}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </aside>
        </Container>
      </section>
    </>
  );
}
