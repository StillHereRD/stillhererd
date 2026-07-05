import type { Metadata } from "next";
import FeelLessAloneExperience from "@/components/FeelLessAloneExperience";

export const metadata: Metadata = {
  title: "Feel Less Alone — StillHereRD",
  description: "Comforting voices, gentle videos, and words worth spending time with.",
};

export default function FeelLessAlonePage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <FeelLessAloneExperience />
    </main>
  );
}
