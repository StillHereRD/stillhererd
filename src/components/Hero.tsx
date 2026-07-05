"use client";

import { useTranslations } from "@/lib/useTranslations";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="flex max-w-2xl flex-col items-center gap-6 text-center">
      <h1 className="motion-safe:animate-fade-in font-serif text-4xl font-medium leading-tight text-primary sm:text-5xl">
        {t.hero.title}
      </h1>
      <p
        style={{ animationDelay: "500ms" }}
        className="motion-safe:animate-fade-in max-w-md text-lg leading-relaxed text-foreground/80 sm:text-xl"
      >
        {t.hero.tagline}
      </p>
    </section>
  );
}
