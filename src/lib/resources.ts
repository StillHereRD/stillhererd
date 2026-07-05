import type { Locale } from "@/lib/locale";
import type { Resource, ResourceCategory } from "@/content/schemas/resource";
import voicesData from "@/content/voices/voices.json";
import videosData from "@/content/videos/videos.json";
import podcastsData from "@/content/podcasts/podcasts.json";
import musicData from "@/content/music/music.json";
import booksData from "@/content/books/books.json";
import articlesData from "@/content/articles/articles.json";

const resourcesByCategory: Record<ResourceCategory, Resource[]> = {
  voice: voicesData as Resource[],
  video: videosData as Resource[],
  podcast: podcastsData as Resource[],
  music: musicData as Resource[],
  book: booksData as Resource[],
  article: articlesData as Resource[],
};

/**
 * Sorted for display: featured first, then ascending priority (undefined
 * priority sorts last), then title as a stable, arbitrary-free tiebreak.
 */
export function getResources(category: ResourceCategory, locale: Locale): Resource[] {
  const inLanguage = resourcesByCategory[category].filter(
    (resource) => resource.language === locale,
  );

  return [...inLanguage].sort((a, b) => {
    if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
    const priorityA = a.priority ?? Number.POSITIVE_INFINITY;
    const priorityB = b.priority ?? Number.POSITIVE_INFINITY;
    if (priorityA !== priorityB) return priorityA - priorityB;
    return a.title.localeCompare(b.title);
  });
}
