import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="October 19, 2026"
      sections={[
        { h: "1. Agreement", p: ["These terms govern your use of the MobAppCreator platform and website, operated by MobApp Labs LLC. By creating an account you agree to them."] },
        { h: "2. Your account", p: ["You are responsible for your account credentials and for all activity under your account."] },
        { h: "3. Subscriptions and billing", p: ["Plans are billed monthly or yearly in advance. You can cancel online at any time; your plan stays active until the end of the paid period."] },
        { h: "4. Free trial", p: ["New accounts include a 14-day free trial. No payment is taken until you choose a plan."] },
        { h: "5. App store publishing", p: ["Publishing requires your own Apple Developer and Google Play developer accounts. MobAppCreator cannot guarantee store approval."] },
        { h: "6. Your content", p: ["You keep all rights to the content you add to your apps and are responsible for having the rights to use it."] },
        { h: "7. Contact", p: ["Questions about these terms can be sent through our contact page."] },
      ]}
    />
  );
}
