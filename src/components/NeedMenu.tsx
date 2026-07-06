"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/useTranslations";
import { needOptions } from "@/content/needs";
import { interactiveCard } from "@/lib/styles";
import {
  NEED_MENU_HEADING_DELAY_MS as HEADING_DELAY_MS,
  NEED_MENU_FIRST_OPTION_DELAY_MS as FIRST_OPTION_DELAY_MS,
  NEED_MENU_OPTION_STEP_MS as OPTION_STEP_MS,
} from "@/lib/needMenuTiming";

interface NeedMenuProps {
  /** When this section's own reveal sequence should start, relative to
   * page load - lets the homepage place it after the Hero has settled. */
  startDelayMs?: number;
}

export default function NeedMenu({ startDelayMs = 0 }: NeedMenuProps) {
  const t = useTranslations();

  return (
    <section
      aria-labelledby="need-menu-heading"
      className="flex w-full max-w-md flex-col items-center gap-6"
    >
      <p
        style={{ animationDelay: `${startDelayMs}ms` }}
        className="motion-safe:animate-fade-in text-sm text-foreground/60"
      >
        {t.needMenu.intro}
      </p>
      <h2
        id="need-menu-heading"
        style={{ animationDelay: `${startDelayMs + HEADING_DELAY_MS}ms` }}
        className="motion-safe:animate-fade-in text-center font-serif text-xl font-medium text-primary"
      >
        {t.needMenu.heading}
      </h2>
      <div className="flex w-full flex-col gap-3">
        {needOptions.map((option, index) => (
          <Link
            key={option.id}
            href={option.href}
            style={{
              animationDelay: `${startDelayMs + FIRST_OPTION_DELAY_MS + index * OPTION_STEP_MS}ms`,
            }}
            className={`motion-safe:animate-fade-in flex items-center gap-3 px-5 py-4 text-foreground ${interactiveCard}`}
          >
            <span aria-hidden="true" className="text-xl">
              {option.emoji}
            </span>
            <span>{t.needMenu[option.id]}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
