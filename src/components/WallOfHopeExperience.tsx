"use client";

import { useState, type FormEvent } from "react";
import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";
import { card, primaryButton } from "@/lib/styles";
import { EMAIL } from "@/lib/externalLinks";
import { getWallMessages } from "@/lib/wallOfHope";

const MAX_MESSAGE_LENGTH = 140;

// Best-effort client-side nudge only - the guidelines are ultimately
// enforced by a person reading every submission before it goes live,
// not by this regex.
const DISALLOWED_PATTERN = /https?:\/\/|www\.|\S+@\S+\.\S+|\+?\d[\d\s().-]{7,}\d/i;

export default function WallOfHopeExperience() {
  const t = useTranslations();
  const messages = getWallMessages();

  const [text, setText] = useState("");
  const [country, setCountry] = useState("");
  const [warning, setWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmedText = text.trim();
    const trimmedCountry = country.trim();
    if (trimmedText.length === 0) return;

    if (DISALLOWED_PATTERN.test(trimmedText) || DISALLOWED_PATTERN.test(trimmedCountry)) {
      setWarning(true);
      setSubmitted(false);
      return;
    }

    // No backend yet (this site is fully static) - submissions go to
    // email for a person to read, and once approved, get added by hand
    // to src/content/wallOfHope/messages.json, the same way every other
    // piece of content on this site is published. A future real API
    // only needs to replace this one call, nothing else here changes.
    const subject = encodeURIComponent("Wall of Hope submission");
    const body = encodeURIComponent(
      trimmedCountry ? `${trimmedText}\n\n(${trimmedCountry})` : trimmedText,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setWarning(false);
    setSubmitted(true);
    setText("");
    setCountry("");
  }

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

      <form onSubmit={handleSubmit} className={`flex w-full flex-col gap-4 p-6 ${card}`}>
        <h2 className="font-serif text-lg font-medium text-primary">
          {t.wallOfHope.formHeading}
        </h2>

        <textarea
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            setWarning(false);
          }}
          placeholder={t.wallOfHope.placeholder}
          aria-label={t.wallOfHope.formHeading}
          maxLength={MAX_MESSAGE_LENGTH}
          rows={3}
          className="w-full resize-none rounded-xl border border-muted bg-background p-4 leading-relaxed text-foreground placeholder:text-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />

        <input
          type="text"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
            setWarning(false);
          }}
          placeholder={t.wallOfHope.countryPlaceholder}
          aria-label={t.wallOfHope.countryLabel}
          className="w-full rounded-xl border border-muted bg-background p-4 text-foreground placeholder:text-foreground/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        />

        {warning && (
          <p role="alert" className="text-sm text-accent">
            {t.wallOfHope.guidelineWarning}
          </p>
        )}

        <button type="submit" disabled={text.trim().length === 0} className={primaryButton}>
          {t.wallOfHope.submit}
        </button>

        <p
          aria-live="polite"
          className={
            submitted
              ? "motion-safe:animate-fade-in text-center text-sm text-primary"
              : "sr-only"
          }
        >
          {submitted ? t.wallOfHope.submitted : ""}
        </p>
      </form>

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
