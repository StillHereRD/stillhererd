import type { Metadata } from "next";
import PhilosophyExperience from "@/components/PhilosophyExperience";

export const metadata: Metadata = {
  title: "Philosophy — StillHereRD",
  description: "Why StillHereRD exists, and who it's for.",
};

export default function PhilosophyPage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <PhilosophyExperience />
    </main>
  );
}
