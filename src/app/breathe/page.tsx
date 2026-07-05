import type { Metadata } from "next";
import BreathingExperience from "@/components/BreathingExperience";

export const metadata: Metadata = {
  title: "Breathe — StillHereRD",
  description: "A slow, guided breath. Nothing else to do right now.",
};

export default function BreathePage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <BreathingExperience />
    </main>
  );
}
