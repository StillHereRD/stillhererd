import type { Metadata } from "next";
import UnsentLetterExperience from "@/components/UnsentLetterExperience";

export const metadata: Metadata = {
  title: "Unsent Letter — StillHereRD",
  description: "A private place to write what you need to let out.",
};

export default function UnsentLetterPage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <UnsentLetterExperience />
    </main>
  );
}
