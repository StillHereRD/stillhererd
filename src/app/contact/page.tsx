import type { Metadata } from "next";
import ContactExperience from "@/components/ContactExperience";

export const metadata: Metadata = {
  title: "Say Hello — StillHereRD",
  description: "Reach out, share feedback, or suggest a resource.",
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-10 px-6 py-20 sm:px-10"
    >
      <ContactExperience />
    </main>
  );
}
