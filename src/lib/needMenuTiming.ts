import { needOptions } from "@/content/needs";

// Reveal pacing for the need menu - how long after the intro line the
// heading appears, then how long after that the first option, then the
// gap between each following option. Shared (non-client) module so the
// homepage's Server Component can read the total timeline length
// without crossing the client boundary.
export const NEED_MENU_HEADING_DELAY_MS = 400;
export const NEED_MENU_FIRST_OPTION_DELAY_MS = 900;
export const NEED_MENU_OPTION_STEP_MS = 220;

export const NEED_MENU_TIMELINE_MS =
  NEED_MENU_FIRST_OPTION_DELAY_MS + needOptions.length * NEED_MENU_OPTION_STEP_MS;
