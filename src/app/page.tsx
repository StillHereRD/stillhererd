import Hero from "@/components/Hero";
import NeedMenu, { NEED_MENU_TIMELINE_MS } from "@/components/NeedMenu";
import DailyLetterTeaser from "@/components/DailyLetterTeaser";
import ReasonForTomorrow from "@/components/ReasonForTomorrow";

// Hero reveals its title, then its tagline 500ms later, then holds for a
// breath before the need menu begins - this is that held breath.
const HERO_TIMELINE_MS = 1300;
const NEED_MENU_START_MS = HERO_TIMELINE_MS;
const LETTER_START_MS = NEED_MENU_START_MS + NEED_MENU_TIMELINE_MS + 400;
const REASON_START_MS = LETTER_START_MS + 900;

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex flex-1 flex-col items-center gap-16 px-6 py-20 sm:px-10"
    >
      <Hero />
      <NeedMenu startDelayMs={NEED_MENU_START_MS} />
      <DailyLetterTeaser delayMs={LETTER_START_MS} />
      <ReasonForTomorrow delayMs={REASON_START_MS} />
    </main>
  );
}
