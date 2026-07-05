"use client";

import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";

export default function PhilosophyExperience() {
  const t = useTranslations();

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      <h1 className="motion-safe:animate-fade-in text-center font-serif text-2xl font-medium text-primary">
        {t.philosophy.heading}
      </h1>

      <div className="flex flex-col gap-5">
        {t.philosophy.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="motion-safe:animate-fade-in text-left leading-loose text-foreground/80"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
