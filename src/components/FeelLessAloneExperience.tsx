"use client";

import BackHomeLink from "@/components/BackHomeLink";
import ResourceCard from "@/components/ResourceCard";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/lib/useTranslations";
import { getResources } from "@/lib/resources";
import type { ResourceCategory } from "@/content/schemas/resource";
import { card } from "@/lib/styles";

const CATEGORY_ORDER: ResourceCategory[] = [
  "voice",
  "video",
  "podcast",
  "music",
  "book",
  "article",
];

const CATEGORY_EMOJI: Record<ResourceCategory, string> = {
  voice: "🎙️",
  video: "🎬",
  podcast: "🎧",
  music: "🎵",
  book: "📚",
  article: "📰",
};

export default function FeelLessAloneExperience() {
  const { locale } = useLanguage();
  const t = useTranslations();

  const withResources: { category: ResourceCategory; resources: ReturnType<typeof getResources> }[] = [];
  const empty: ResourceCategory[] = [];

  for (const category of CATEGORY_ORDER) {
    const resources = getResources(category, locale);
    if (resources.length > 0) {
      withResources.push({ category, resources });
    } else {
      empty.push(category);
    }
  }

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-10">
      <BackHomeLink />

      <p className="motion-safe:animate-fade-in text-center text-foreground/70">
        {t.feelLessAlone.intro}
      </p>

      {withResources.length > 0 && (
        <div className="flex w-full flex-col gap-8">
          {withResources.map(({ category, resources }) => (
            <section
              key={category}
              aria-labelledby={`category-${category}`}
              className="flex flex-col gap-3"
            >
              <h2
                id={`category-${category}`}
                className="flex items-center gap-2 font-serif text-lg font-medium text-primary"
              >
                <span aria-hidden="true">{CATEGORY_EMOJI[category]}</span>
                {t.feelLessAlone.categories[category]}
              </h2>
              <div className="flex flex-col gap-3">
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* Categories with nothing curated yet - kept visible as a single
          compact list (not one "coming soon" card per category) so the
          growable shape of the room is honest without feeling hollow. */}
      {empty.length > 0 && (
        <ul
          className={`flex w-full flex-col divide-y divide-muted overflow-hidden ${card}`}
        >
          {empty.map((category) => (
            <li key={category} className="flex items-center gap-3 px-5 py-4">
              <span aria-hidden="true" className="text-xl">
                {CATEGORY_EMOJI[category]}
              </span>
              <span className="text-foreground">
                {t.feelLessAlone.categories[category]}
              </span>
            </li>
          ))}
        </ul>
      )}

      <p className="motion-safe:animate-fade-in max-w-sm text-center text-sm text-foreground/50">
        {t.feelLessAlone.note}
      </p>
    </div>
  );
}
