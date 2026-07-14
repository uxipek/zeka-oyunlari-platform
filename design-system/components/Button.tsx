import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  /** Optional leading icon (SVG element). */
  icon?: ReactNode;
  /** Shows a spinner and disables the button during async work. */
  loading?: boolean;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-display font-extrabold " +
  "min-h-[44px] px-5 py-2.5 rounded-clay cursor-pointer select-none " +
  "transition-[box-shadow,transform] duration-[160ms] ease-clay " +
  "active:translate-y-px focus-visible:outline-none " +
  "focus-visible:ring-4 focus-visible:ring-primary/40 " +
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0";

const variants: Record<Variant, string> = {
  // Reward-energy orange. One primary per screen.
  primary:
    "bg-accent text-white shadow-[6px_6px_14px_rgba(229,88,12,.28),inset_1px_1px_1px_rgba(255,255,255,.35)] " +
    "hover:shadow-[8px_8px_18px_rgba(229,88,12,.34),inset_1px_1px_1px_rgba(255,255,255,.35)]",
  secondary:
    "bg-surface text-primary border border-border shadow-clay-soft hover:shadow-clay",
  ghost:
    "bg-transparent text-ink-soft hover:bg-surface-sunken",
};

/**
 * Primary call-to-action button in the clay language.
 * Presses inward, meets the 44px touch minimum, keeps a visible focus ring.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", icon, loading, children, disabled, className = "", ...rest }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {loading ? (
        <Spinner />
      ) : (
        icon && <span aria-hidden="true" className="shrink-0">{icon}</span>
      )}
      {children}
    </button>
  ),
);
Button.displayName = "Button";

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin motion-reduce:animate-none"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
