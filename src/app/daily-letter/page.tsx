import type { Metadata } from "next";
import DailyLetterExperience from "@/components/DailyLetterExperience";

export const metadata: Metadata = {
  title: "Today's Letter — StillHereRD",
  description: "A quiet letter, waiting for you.",
};

export default function DailyLetterPage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <DailyLetterExperience />
    </main>
  );
}
