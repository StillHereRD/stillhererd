"use client";

import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";
import { subtleLink } from "@/lib/styles";
import { GITHUB_REPO_URL } from "@/lib/externalLinks";
import type { PrivacySectionId } from "@/content/translations";

const SECTION_ORDER: PrivacySectionId[] = [
  "collect",
  "tracking",
  "cookies",
  "ads",
  "sellingData",
  "analytics",
  "openSource",
  "security",
];

export default function PrivacyExperience() {
  const t = useTranslations();

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="motion-safe:animate-fade-in font-serif text-2xl font-medium text-primary">
          {t.privacy.heading}
        </h1>
        <p className="motion-safe:animate-fade-in text-foreground/70">
          {t.privacy.subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-7">
        {SECTION_ORDER.map((id) => {
          const section = t.privacy.sections[id];
          return (
            <section key={id} className="motion-safe:animate-fade-in flex flex-col gap-2">
              <h2 className="font-serif text-lg font-medium text-primary">
                {section.heading}
              </h2>
              <p className="text-left leading-relaxed text-foreground/80">
                {section.body}
              </p>
              {id === "openSource" && (
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`self-start ${subtleLink}`}
                >
                  {t.privacy.viewSourceLabel}
                </a>
              )}
            </section>
          );
        })}
      </div>

      <div className="motion-safe:animate-fade-in flex flex-col items-center gap-3 pt-4 text-center">
        <h2 className="font-serif text-xl font-medium text-primary">
          {t.privacy.promiseHeading}
        </h2>
        {t.privacy.promiseBody.split("\n\n").map((paragraph, index) => (
          <p key={index} className="max-w-sm leading-relaxed text-foreground/80">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
