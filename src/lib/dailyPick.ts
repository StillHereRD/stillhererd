function daysSinceEpoch(date: Date): number {
  return Math.floor(date.getTime() / 86_400_000);
}

function stableHash(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/**
 * Picks one item per calendar day, deterministically. No history or
 * storage needed: because the index advances by exactly 1 each day
 * (mod list length), it walks the whole list before ever repeating -
 * a stronger "no repeats" guarantee than picking randomly each day,
 * and it's the same for every visitor without a database.
 *
 * `salt` differentiates unrelated selections (e.g. "letters" vs
 * "reasons") so they don't happen to land on the same relative index
 * on the same day.
 */
export function pickDailyItem<T>(
  items: readonly T[],
  salt: string,
  date: Date = new Date(),
): T | null {
  if (items.length === 0) return null;
  const index = (daysSinceEpoch(date) + stableHash(salt)) % items.length;
  return items[index];
}
