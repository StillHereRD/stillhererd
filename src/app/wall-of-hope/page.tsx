import type { Metadata } from "next";
import WallOfHopeExperience from "@/components/WallOfHopeExperience";

export const metadata: Metadata = {
  title: "Wall of Hope — StillHereRD",
  description: "A quiet wall of anonymous encouragement. No likes, no followers, no profiles.",
};

export default function WallOfHopePage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <WallOfHopeExperience />
    </main>
  );
}
