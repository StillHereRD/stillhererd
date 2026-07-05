import type { Metadata } from "next";
import TinyWinsExperience from "@/components/TinyWinsExperience";

export const metadata: Metadata = {
  title: "Tiny Wins — StillHereRD",
  description: "Ordinary things are worth celebrating too.",
};

export default function TinyWinsPage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <TinyWinsExperience />
    </main>
  );
}
