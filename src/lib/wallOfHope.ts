import type { WallMessage } from "@/content/schemas/wallMessage";
import messagesData from "@/content/wallOfHope/messages.json";

const messages = messagesData as WallMessage[];

// Not filtered by site locale on purpose - the wall is one shared,
// global list, and a message written in someone else's language is
// still legible as encouragement. Newest first.
export function getWallMessages(): WallMessage[] {
  return [...messages].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}
