"use client";

import { useState } from "react";
import BackHomeLink from "@/components/BackHomeLink";
import { useTranslations } from "@/lib/useTranslations";
import { tinyWinIds } from "@/content/tinyWins";

export default function TinyWinsExperience() {
  const t = useTranslations();
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setCompleted((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-8">
      <BackHomeLink />

      <p className="motion-safe:animate-fade-in text-center text-foreground/70">
        {t.tinyWins.intro}
      </p>

      <ul className="flex w-full flex-col gap-3">
        {tinyWinIds.map((id) => {
          const isDone = completed.has(id);
          return (
            <li key={id}>
              <label
                className={`flex cursor-pointer items-center gap-3 rounded-2xl border border-muted px-5 py-4 shadow-sm transition-all duration-(--duration-base) ease-(--ease-calm) hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                  isDone ? "bg-primary/10" : "bg-muted/40 hover:bg-muted/60"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => toggle(id)}
                  className="h-5 w-5 accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
                <span
                  className={
                    isDone ? "text-primary/70 line-through" : "text-foreground"
                  }
                >
                  {t.tinyWins.items[id]}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {completed.size > 0 && (
        <p className="motion-safe:animate-fade-in text-center font-serif text-lg text-primary">
          {t.tinyWins.encouragement}
        </p>
      )}
    </div>
  );
}
