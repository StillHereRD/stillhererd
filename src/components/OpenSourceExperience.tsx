"use client";

import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";
import { primaryButton } from "@/lib/styles";
import { GITHUB_REPO_URL } from "@/lib/externalLinks";

export default function OpenSourceExperience() {
  const t = useTranslations();

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      <h1 className="motion-safe:animate-fade-in text-center font-serif text-2xl font-medium text-primary">
        {t.openSource.heading}
      </h1>

      <p className="motion-safe:animate-fade-in text-center leading-relaxed text-foreground/80">
        {t.openSource.intro}
      </p>

      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noreferrer"
        className={primaryButton}
      >
        {t.openSource.githubButton}
      </a>
    </div>
  );
}
