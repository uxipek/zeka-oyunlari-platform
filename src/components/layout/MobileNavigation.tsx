import { useEffect, useRef } from "react";
import { X, Moon, Sun, Baby, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { XpPill } from "../../../design-system/components";
import { NavLink } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export function MobileNavigation({ open, onClose, navLinks }: MobileNavigationProps) {
  const { theme, ageBand, toggleTheme, toggleAgeBand } = useTheme();
  const { totalXp } = useProgress();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    closeBtnRef.current?.focus();

    const handleKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobil menü"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-surface shadow-clay">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
            <Sparkles size={20} aria-hidden="true" className="text-primary" />
            Menü
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Menüyü kapat"
            className="grid h-11 w-11 place-items-center rounded-clay-sm bg-surface-sunken text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobil navigasyon">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                "flex min-h-[44px] items-center rounded-clay-sm px-4 py-3 font-body text-base font-bold transition-colors hover:bg-surface-sunken hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 " +
                (isActive ? "bg-surface-sunken text-primary" : "text-ink-soft")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* XP */}
        <div className="px-4 py-2">
          <XpPill amount={totalXp} gained={false} />
        </div>

        {/* Toggles */}
        <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex min-h-[44px] items-center gap-3 rounded-clay-sm px-4 py-2.5 font-body text-sm font-bold text-ink-soft transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            {theme === "light" ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
            {theme === "light" ? "Koyu Tema" : "Açık Tema"}
          </button>
          <button
            type="button"
            onClick={toggleAgeBand}
            className="flex min-h-[44px] items-center gap-3 rounded-clay-sm px-4 py-2.5 font-body text-sm font-bold text-ink-soft transition-colors hover:bg-surface-sunken focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            <Baby size={20} aria-hidden="true" />
            {ageBand === "kid" ? "Genç Modu" : "Çocuk Modu"}
          </button>
        </div>
      </div>
    </div>
  );
}
