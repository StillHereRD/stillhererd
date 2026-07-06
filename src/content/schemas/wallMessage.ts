/**
 * One anonymous note on the Wall of Hope. No author, no username, no
 * account tied to it - just the words, and optionally a country. Kept
 * in a static JSON file today (see src/content/wallOfHope/messages.json)
 * and rendered the same way every other content type on this site is;
 * a future real backend only needs to produce this same shape.
 */
export interface WallMessage {
  id: string;
  text: string;
  country?: string;
  createdAt: string;
}
