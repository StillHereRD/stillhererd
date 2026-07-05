import type { Metadata } from "next";
import SupportExperience from "@/components/SupportExperience";

export const metadata: Metadata = {
  title: "Support — StillHereRD",
  description: "StillHereRD is a companion, not a replacement for professional care.",
};

export default function SupportPage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <SupportExperience />
    </main>
  );
}
