export type Difficulty = "easy" | "medium" | "hard";

const CONFIG: Record<Difficulty, { label: string; color: string; bars: number }> = {
  easy:   { label: "Kolay", color: "var(--color-free)",    bars: 1 },
  medium: { label: "Orta",  color: "var(--color-premium)", bars: 2 },
  hard:   { label: "Zor",   color: "var(--color-hard)",    bars: 3 },
};

/**
 * Difficulty shown by colour AND bar count AND label — never colour alone,
 * so it works for colour-blind users and pre-readers.
 */
export function DifficultyMeter({ level }: { level: Difficulty }) {
  const { label, color, bars } = CONFIG[level];
  return (
    <span className="inline-flex items-center gap-1.5 font-body font-extrabold text-xs text-ink-soft">
      <span aria-hidden="true" className="flex items-end gap-0.5">
        {[0, 1, 2].map((i) => (
          <i
            key={i}
            className="block w-1 rounded-full"
            style={{
              height: `${6 + i * 4}px`,
              background: i < bars ? color : "var(--color-border)",
            }}
          />
        ))}
      </span>
      {label}
    </span>
  );
}
