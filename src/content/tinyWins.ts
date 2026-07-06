export const tinyWinIds = [
  "water",
  "outOfBed",
  "shower",
  "ate",
  "walked",
  "message",
  "brushedTeeth",
  "openedCurtains",
  "satOutside",
  "deepBreath",
  "changedClothes",
  "listenedToMusic",
  "restedNoGuilt",
  "reachedOut",
] as const;

export type TinyWinId = (typeof tinyWinIds)[number];
