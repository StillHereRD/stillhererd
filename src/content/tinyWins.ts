export const tinyWinIds = [
  "water",
  "outOfBed",
  "shower",
  "ate",
  "walked",
  "message",
] as const;

export type TinyWinId = (typeof tinyWinIds)[number];
