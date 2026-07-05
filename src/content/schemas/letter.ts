import type { Locale } from "@/lib/locale";

/**
 * One Daily Letter. `slug` is stable across edits to `title` (useful once
 * letters are linkable/shareable); `id` is the raw identity used for
 * selection logic. `published` lets a letter be drafted without going
 * live yet - unpublished letters are simply excluded from selection.
 */
export interface Letter {
  id: string;
  title: string;
  slug: string;
  category?: string;
  emotion?: string;
  readingTime?: number;
  body: string;
  author: string;
  language: Locale;
  published: boolean;
  featured?: boolean;
}
