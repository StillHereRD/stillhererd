import type { Metadata } from "next";
import PrivacyExperience from "@/components/PrivacyExperience";

export const metadata: Metadata = {
  title: "Privacy & Transparency — StillHereRD",
  description: "You deserve a place that asks nothing from you.",
};

export default function PrivacyPage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <PrivacyExperience />
    </main>
  );
}
