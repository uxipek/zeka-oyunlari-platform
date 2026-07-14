import type { ReactNode } from "react";

interface BadgeProps {
  /** Achievement name — used as the accessible label. */
  label: string;
  /** Glyph or short text inside the coin (e.g. "7", a star, an icon). */
  children?: ReactNode;
  locked?: boolean;
}

/**
 * A collectible achievement coin. Locked coins stay inviting (a padlock,
 * not a dead grey) so they read as "yet to earn", not "unavailable".
 */
export function Badge({ label, children, locked = false }: BadgeProps) {
  return (
    <span
      role="img"
      aria-label={locked ? `${label} — kilitli` : label}
      className={
        "grid h-[60px] w-[60px] place-items-center rounded-full " +
        "font-display font-extrabold text-2xl shadow-clay " +
        (locked
          ? "text-ink-mute bg-[radial-gradient(circle_at_32%_28%,var(--color-surface-sunken),var(--color-border))]"
          : "text-white bg-[radial-gradient(circle_at_32%_28%,var(--color-secondary),var(--color-primary))]")
      }
    >
      {locked ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      ) : (
        children
      )}
    </span>
  );
}
