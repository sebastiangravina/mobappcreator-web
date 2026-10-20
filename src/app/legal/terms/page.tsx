import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsSections } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms and Conditions",
  description:
    "The MobAppCreator Terms and Conditions: accounts, subscriptions and billing, cancellation and refunds, app store publishing, your content and acceptable use.",
  path: "/legal/terms/",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      summary="The agreement for using MobAppCreator’s website, app builder, hosting, publishing tools and support."
      sections={termsSections}
    />
  );
}
