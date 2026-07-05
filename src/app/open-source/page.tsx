import type { Metadata } from "next";
import OpenSourceExperience from "@/components/OpenSourceExperience";

export const metadata: Metadata = {
  title: "Open Source — StillHereRD",
  description: "StillHereRD is open source - explore, learn, or contribute.",
};

export default function OpenSourcePage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <OpenSourceExperience />
    </main>
  );
}
