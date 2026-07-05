# StillHereRD

A quiet digital place to breathe, feel less alone, and take one small step - built for someone opening a screen at two in the morning, on one of the hardest days of their life.

StillHereRD isn't a wellness dashboard. There are no streaks, no notifications, no accounts. Just a few small rooms, each built around a single feeling:

- **Daily Letter** - a short, honest letter, opened deliberately, never spoiled up front
- **A Reason for Tomorrow** - one small, concrete reason, different every visit
- **I need to breathe** - a slow, guided breathing exercise
- **I need to feel less alone** - comforting voices, videos, books, and more (growing over time)
- **I need one small step** - Tiny Wins, celebrating ordinary things without pressure
- **I need to let something out** - an Unsent Letter that is never saved anywhere

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How content works

Nothing is hardcoded into components. Letters, reasons, and resource-library entries live as typed JSON under `src/content/`, each with a matching schema in `src/content/schemas/`. Adding a new letter, reason, or recommended voice/video/podcast/book/article means adding an entry to the relevant JSON file - not editing any component.

## Tech

Next.js (App Router), React, TypeScript, Tailwind CSS v4. Bilingual (English/Spanish) throughout.

## Contributing

Every contribution should answer one question:

> Does this make someone feel a little less alone?

If the answer is yes, it belongs in StillHereRD.
If the answer is no, rethink it.

---

🇩🇴 From the Dominican Republic, with hope.
