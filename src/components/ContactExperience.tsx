"use client";

import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";
import { card } from "@/lib/styles";
import { INSTAGRAM_HANDLE, EMAIL, GITHUB_REPO_URL } from "@/lib/externalLinks";

export default function ContactExperience() {
  const t = useTranslations();

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      <h1 className="motion-safe:animate-fade-in text-center font-serif text-2xl font-medium text-primary">
        {t.contact.heading}
      </h1>

      <p className="motion-safe:animate-fade-in text-center text-foreground/80">
        {t.contact.intro}
      </p>

      <div
        className={`flex w-full flex-col divide-y divide-muted overflow-hidden ${card}`}
      >
        <a
          href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-5 py-4 text-foreground transition-colors duration-(--duration-micro) hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          <span>{t.contact.instagramLabel}</span>
          <span className="text-primary/70">@{INSTAGRAM_HANDLE}</span>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center justify-between px-5 py-4 text-foreground transition-colors duration-(--duration-micro) hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          <span>{t.contact.emailLabel}</span>
          <span className="text-primary/70">{EMAIL}</span>
        </a>
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between px-5 py-4 text-foreground transition-colors duration-(--duration-micro) hover:bg-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
        >
          <span>{t.contact.githubLabel}</span>
          <span className="text-primary/70">StillHereRD</span>
        </a>
      </div>

      <p className="motion-safe:animate-fade-in max-w-sm text-center text-xs text-foreground/50">
        {t.contact.safetyNote}
      </p>
    </div>
  );
}
