import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacySections } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How MobApp Labs LLC handles personal information on MobAppCreator, the data processed for apps built by customers, and how to exercise your privacy rights.",
  path: "/legal/privacy/",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="How MobApp Labs LLC handles personal information for MobAppCreator, and the choices and rights you have."
      sections={privacySections}
    />
  );
}
