import { useState } from "react";
import { Menu, Moon, Sun, Sparkles, Baby } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { XpPill } from "../../../design-system/components";
import { userProfile } from "../../data/mockData";
import { MobileNavigation } from "./MobileNavigation";
import { Link, NavLink } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";

const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Oyunlar", href: "/games" },
  { label: "Başarılarım", href: "/progress#achievements" },
  { label: "Gelişimim", href: "/progress" },
];

export function Header() {
  const { theme, ageBand, toggleTheme, toggleAgeBand } = useTheme();
  const { totalXp } = useProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-clay-sm bg-[linear-gradient(135deg,var(--color-secondary),var(--color-primary))] text-white shadow-clay-soft">
              <Sparkles size={20} aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">Zeka Oyunları</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Ana navigasyon">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  "rounded-clay-sm px-3 py-2 font-body text-sm font-bold transition-colors hover:bg-surface-sunken hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 " +
                  (isActive ? "bg-surface-sunken text-primary" : "text-ink-soft")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <XpPill amount={totalXp} gained={false} className="hidden sm:inline-flex" />

            {/* Age band toggle */}
            <button
              type="button"
              onClick={toggleAgeBand}
              aria-label={ageBand === "kid" ? "Çocuk modundan Genç moduna geç" : "Genç modundan Çocuk moduna geç"}
              className="grid h-11 w-11 place-items-center rounded-clay-sm bg-surface text-ink-soft shadow-clay-soft transition-[box-shadow,transform] duration-[160ms] ease-clay hover:shadow-clay active:shadow-clay-press active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
            >
              <Baby size={20} aria-hidden="true" />
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Koyu temaya geç" : "Açık temaya geç"}
              className="grid h-11 w-11 place-items-center rounded-clay-sm bg-surface text-ink-soft shadow-clay-soft transition-[box-shadow,transform] duration-[160ms] ease-clay hover:shadow-clay active:shadow-clay-press active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
            >
              {theme === "light" ? <Moon size={20} aria-hidden="true" /> : <Sun size={20} aria-hidden="true" />}
            </button>

            {/* Profile avatar */}
            <button
              type="button"
              aria-label={`${userProfile.name} profili`}
              className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-star))] font-display text-base font-extrabold text-white shadow-clay-soft transition-[box-shadow,transform] duration-[160ms] ease-clay hover:shadow-clay active:shadow-clay-press active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
            >
              {userProfile.name[0]}
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Menüyü aç"
              className="grid h-11 w-11 place-items-center rounded-clay-sm bg-surface text-ink-soft shadow-clay-soft transition-[box-shadow,transform] duration-[160ms] ease-clay hover:shadow-clay active:shadow-clay-press active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 md:hidden"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
