import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { CtaSection } from "@/components/sections";
import { Container, PageHero, SampleTag } from "@/components/ui";
import { showcase } from "@/lib/content";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Apps built with MobAppCreator by restaurants, gyms, radio stations, hotels, churches and more.",
};

export default function ShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="Showcase"
        title="Made with MobAppCreator."
        lede="Businesses of every kind use MobAppCreator to reach their customers on iPhone, iPad and Android."
      />
      <section className="pb-24">
        <Container>
          <p className="mb-6 text-center">
            <SampleTag />
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {showcase.map((app, i) => (
              <article
                key={app.name}
                className="reveal overflow-hidden rounded-[28px] bg-bg-alt"
                style={{ transitionDelay: `${(i % 4) * 70}ms` }}
              >
                <div
                  className="grid aspect-[4/3] place-items-center"
                  style={{ background: `linear-gradient(135deg, ${app.color}, color-mix(in srgb, ${app.color} 45%, #000))` }}
                >
                  <span className="grid h-20 w-20 place-items-center rounded-[22px] bg-white/95 shadow-xl" style={{ color: app.color }}>
                    <Icon name="store" size={38} strokeWidth={1.8} />
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-fg-3">{app.category}</p>
                  <h2 className="mt-1 text-[19px] font-semibold">{app.name}</h2>
                  <p className="mt-1.5 text-[15px] text-fg-2">{app.desc}</p>
                  <p className="mt-4 flex gap-2 text-fg-3">
                    <Icon name="phone" size={18} label="iPhone" />
                    <Icon name="android" size={18} label="Android" />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaSection title="Your app could be next." />
    </>
  );
}
