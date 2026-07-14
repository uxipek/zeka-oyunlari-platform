export type Tier = "free" | "premium";

const CONFIG: Record<Tier, { label: string; text: string; bg: string; dot: string }> = {
  free:    { label: "Ücretsiz", text: "text-free",    bg: "bg-free-soft",    dot: "var(--color-free)" },
  premium: { label: "Premium",  text: "text-premium", bg: "bg-premium-soft", dot: "var(--color-premium)" },
};

/** Free / Premium tag with a colour dot + label (colour is never the only cue). */
export function TierBadge({ tier }: { tier: Tier }) {
  const { label, text, bg, dot } = CONFIG[tier];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-display text-[0.68rem] font-extrabold uppercase tracking-wide ${text} ${bg}`}
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full" style={{ background: dot }} />
      {label}
    </span>
  );
}
