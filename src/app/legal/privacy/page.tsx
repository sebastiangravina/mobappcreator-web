import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="October 19, 2026"
      sections={[
        { h: "1. Who we are", p: ["MobApp Labs LLC (Miami, Florida) and MobApp Labs S.A. (Buenos Aires, Argentina) operate MobAppCreator."] },
        { h: "2. Information we collect", p: ["Account details you give us, such as your name, email and company; billing information handled by our payment provider; and usage data from the platform."] },
        { h: "3. How we use it", p: ["To provide and improve the service, process payments, offer support and send service messages. We do not sell your personal information."] },
        { h: "4. Your app users", p: ["For data collected through apps you build, you are the controller and we process it on your behalf."] },
        { h: "5. Your rights", p: ["You can access, correct or delete your personal information by contacting us."] },
        { h: "6. Contact", p: ["Privacy questions can be sent through our contact page."] },
      ]}
    />
  );
}
