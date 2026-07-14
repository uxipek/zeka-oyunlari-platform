import type { HTMLAttributes } from "react";

interface XpPillProps extends HTMLAttributes<HTMLSpanElement> {
  amount: number;
  /** Prefix with "+" for a freshly-earned reward. Default true. */
  gained?: boolean;
}

/** A star-marked XP token. Use `gained` for reward moments, off for totals. */
export function XpPill({ amount, gained = true, className = "", ...rest }: XpPillProps) {
  const formatted = amount.toLocaleString("tr-TR");
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 font-display font-extrabold text-sm text-white " +
        "px-3.5 py-1.5 rounded-full tabular-nums " +
        "bg-[linear-gradient(135deg,var(--color-xp),#F5A524)] " +
        "shadow-[4px_4px_10px_rgba(229,88,12,.28),inset_1px_1px_1px_rgba(255,255,255,.4)] " +
        className
      }
      {...rest}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
      </svg>
      {gained ? "+" : ""}
      {formatted} XP
    </span>
  );
}
