import type { ReactNode } from "react";
import { TierBadge, type Tier } from "./TierBadge";
import { DifficultyMeter, type Difficulty } from "./DifficultyMeter";

interface GameCardProps {
  title: string;
  category: string;
  tier: Tier;
  difficulty: Difficulty;
  /** Thumbnail icon (SVG). Falls back to a puzzle glyph. */
  icon?: ReactNode;
  onPlay?: () => void;
}

/**
 * A single game in the catalog. The whole card is one clay button — big,
 * forgiving target — that presses inward on tap.
 */
export function GameCard({ title, category, tier, difficulty, icon, onPlay }: GameCardProps) {
  return (
    <button
      type="button"
      onClick={onPlay}
      aria-label={`${title} — ${category}, ${tier === "free" ? "ücretsiz" : "premium"}`}
      className="group text-left w-full overflow-hidden rounded-clay-lg bg-surface border border-border shadow-clay
                 transition-[box-shadow,transform] duration-[160ms] ease-clay
                 hover:-translate-y-0.5 active:translate-y-0 active:shadow-clay-press
                 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
    >
      <div className="grid h-24 place-items-center bg-[linear-gradient(135deg,var(--color-secondary),var(--color-primary))] text-white">
        <span aria-hidden="true" className="opacity-95 transition-transform duration-300 ease-clay group-hover:scale-110 motion-reduce:transition-none">
          {icon ?? <PuzzleIcon />}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-4 pb-4 pt-3">
        <span className="font-display text-lg font-extrabold text-ink">{title}</span>
        <span className="font-body text-xs font-bold uppercase tracking-wide text-ink-mute">{category}</span>
        <div className="flex flex-wrap items-center gap-2 pt-0.5">
          <TierBadge tier={tier} />
          <DifficultyMeter level={difficulty} />
        </div>
      </div>
    </button>
  );
}

function PuzzleIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 7h-9M14 17H5M17 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0M1 7a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </svg>
  );
}
