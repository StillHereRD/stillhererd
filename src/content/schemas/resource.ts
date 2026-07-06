import type { Locale } from "@/lib/locale";

export type ResourceCategory =
  | "voice"
  | "video"
  | "podcast"
  | "music"
  | "book"
  | "article";

/**
 * One shared shape for every kind of recommendation in the resource
 * library (voices, videos, podcasts, music, books, articles). Keeping
 * one type instead of six near-identical ones means the rendering and
 * sorting logic only has to be written once.
 *
 * `instagram` is a bare handle (no "@", no URL) - the creator's Instagram,
 * when relevant. `description` doubles as "why this was chosen" for
 * videos specifically, per the guide's request for that field.
 * `recommendedFor` doubles as "who this may help".
 * `durationMinutes` is only meaningful for videos and podcasts.
 * `featured` + `priority` control display order: featured items first,
 * then ascending priority, then title as a stable tiebreaker.
 */
export interface Resource {
  id: string;
  title: string;
  creator?: string;
  description: string;
  category: ResourceCategory;
  tags?: string[];
  url: string;
  platform?: string;
  language: Locale;
  recommendedFor?: string;
  thumbnail?: string;
  featured?: boolean;
  priority?: number;
  instagram?: string;
  durationMinutes?: number;
  /** When true, clicking the card shows a short heads-up (naming the
   * platform) before leaving, instead of navigating immediately - for
   * links to somewhere less self-explanatory than a single video or
   * article, e.g. a whole streaming playlist. */
  confirmExternal?: boolean;
}
