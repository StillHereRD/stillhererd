export interface NeedOption {
  id: "breathe" | "alone" | "step" | "unsent";
  emoji: string;
  href: string;
}

// "I just want to read" is part of the long-term vision (Reading Room)
// but isn't built yet, so it's left out rather than linking somewhere
// half-done.
export const needOptions: NeedOption[] = [
  { id: "breathe", emoji: "🌬", href: "/breathe" },
  { id: "alone", emoji: "🤍", href: "/feel-less-alone" },
  { id: "step", emoji: "🌱", href: "/tiny-wins" },
  { id: "unsent", emoji: "✍", href: "/unsent-letter" },
];
