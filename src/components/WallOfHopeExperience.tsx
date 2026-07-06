"use client";

import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";
import { card } from "@/lib/styles";
import { getWallMessages } from "@/lib/wallOfHope";

export default function WallOfHopeExperience() {
  const t = useTranslations();
  const messages = getWallMessages();

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-10">
      <BackHomeLink />

      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="motion-safe:animate-fade-in font-serif text-2xl font-medium text-primary">
          {t.wallOfHope.heading}
        </h1>
        <p className="motion-safe:animate-fade-in max-w-sm leading-relaxed text-foreground/80">
          {t.wallOfHope.intro}
        </p>
      </div>

      <ul className="flex w-full flex-wrap justify-center gap-3">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`motion-safe:animate-fade-in flex max-w-[220px] flex-col gap-2 px-5 py-4 text-center ${card}`}
          >
            <p className="font-serif leading-snug text-foreground">
              &ldquo;{message.text}&rdquo;
            </p>
            {message.country && (
              <p className="text-xs text-foreground/50">{message.country}</p>
            )}
          </li>
        ))}
      </ul>

      <div
        className={`motion-safe:animate-fade-in flex w-full flex-col items-center gap-2 p-8 text-center ${card}`}
      >
        <p className="font-serif text-lg font-medium text-primary">
          {t.wallOfHope.comingSoonThanks}
        </p>
        <p className="text-foreground/80">{t.wallOfHope.comingSoonNote}</p>
        <p className="text-sm text-foreground/60">{t.wallOfHope.comingSoonDetail}</p>
      </div>

      <div className="flex w-full flex-col gap-3">
        <h2 className="text-center font-serif text-lg font-medium text-primary">
          {t.wallOfHope.guidelinesHeading}
        </h2>
        <ul className={`flex flex-col divide-y divide-muted overflow-hidden ${card}`}>
          {t.wallOfHope.guidelines.map((guideline, index) => (
            <li key={index} className="px-5 py-3 text-center text-sm text-foreground/70">
              {guideline}
            </li>
          ))}
        </ul>
        <p className="text-center text-sm text-foreground/50">{t.wallOfHope.moderationNote}</p>
      </div>
    </div>
  );
}
