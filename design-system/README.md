# Zeka Oyunları — Design System

Claymorphism component library for the cognitive-games platform. Playful
indigo + energetic orange, built for children first and grown-up enough for
teens. See the [design brief](https://claude.ai/code/artifact/0ec7c7df-5ecf-4fa9-87eb-6d4c9e49d7e9)
for the full direction.

## Setup

1. **Fonts** — load Fredoka (display) + Nunito (body). Both carry Turkish
   glyphs (ş ğ ı İ ç). In Next.js:

   ```ts
   import { Fredoka, Nunito } from "next/font/google";
   const fredoka = Fredoka({ subsets: ["latin-ext"], variable: "--font-display" });
   const nunito  = Nunito({ subsets: ["latin-ext"], variable: "--font-body" });
   ```

2. **Tokens** — import once, globally:

   ```ts
   import "@/design-system/tokens.css";
   ```

3. **Tailwind** — add the preset:

   ```js
   // tailwind.config.js
   const zeka = require("./design-system/tailwind.preset");
   module.exports = { presets: [zeka], content: ["./app/**/*.{ts,tsx}"] };
   ```

## Usage

```tsx
import { Button, GameCard, XpPill, ProgressBar } from "@/design-system/components";

<Button icon={<PlayIcon />}>Oyna</Button>
<XpPill amount={120} />
<ProgressBar value={64} />
<GameCard title="Desen Ustası" category="Örüntü" tier="free" difficulty="medium" />
```

## Theming

- **Light / dark** — automatic via `prefers-color-scheme`; override with
  `data-theme="light" | "dark"` on `<html>`.
- **Age band** — set `data-age="teen"` on `<html>` (or any subtree) for the
  matured variant: tighter radii, deeper colour, calmer feel. Default is the
  kid band.

Everything is driven by CSS variables in `tokens.css`, so both switches are a
runtime swap with no rebuild.

## Principles baked in

- Every interactive element meets a **44px** touch target and shows a focus ring.
- Difficulty and tier never rely on **colour alone** (bars + labels).
- All motion respects **`prefers-reduced-motion`**.
- No emoji as icons — SVG only.
