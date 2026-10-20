import type { Metadata } from "next";
import { Button, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="pb-32">
      <PageHero eyebrow="404" title="This page took a day off." lede="The page you’re looking for doesn’t exist or has moved.">
        <Button href="/" size="lg">
          Back to home
        </Button>
      </PageHero>
    </div>
  );
}
