"use client";

import { useState } from "react";
import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";
import { tinyWinIds } from "@/content/tinyWins";
import { card } from "@/lib/styles";

const MAX_DEPTH = 3;

export default function TinyWinsExperience() {
  const t = useTranslations();
  // Depth per card, not a done/not-done flag - clicking again deepens
  // the reflection instead of "completing" anything. Resets on reload
  // on purpose: there's nothing to track across visits here.
  const [depths, setDepths] = useState<Record<string, number>>({});

  function deepen(id: string) {
    setDepths((current) => {
      const next = Math.min((current[id] ?? 0) + 1, MAX_DEPTH);
      return { ...current, [id]: next };
    });
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      <p className="motion-safe:animate-fade-in text-center text-foreground/70">
        {t.tinyWins.intro}
      </p>

      <ul className="flex w-full flex-col gap-3">
        {tinyWinIds.map((id, index) => {
          const depth = depths[id] ?? 0;
          const chain = t.tinyWins.chains[index % t.tinyWins.chains.length];
          const message =
            depth === 1
              ? chain.level1
              : depth === 2
                ? chain.level2
                : depth >= 3
                  ? chain.level3
                  : null;

          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => deepen(id)}
                className={`flex w-full flex-col gap-2 px-5 py-4 text-left transition-all duration-(--duration-base) ease-(--ease-calm) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                  depth > 0 ? "bg-primary/10" : "bg-muted/40 hover:bg-muted/60"
                } ${card}`}
              >
                <span className="text-foreground">{t.tinyWins.items[id]}</span>
                {message && (
                  <p
                    aria-live="polite"
                    className="motion-safe:animate-fade-in whitespace-pre-line text-sm leading-relaxed text-primary/80"
                  >
                    {message}
                  </p>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
