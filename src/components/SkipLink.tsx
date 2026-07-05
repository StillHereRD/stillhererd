"use client";

import { useTranslations } from "@/lib/useTranslations";

export default function SkipLink() {
  const t = useTranslations();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {t.skipLink}
    </a>
  );
}
