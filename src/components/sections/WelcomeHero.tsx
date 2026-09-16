import { Play, Compass } from "lucide-react";
import { Button } from "../../../design-system/components";
import { useNavigate } from "react-router-dom";

export function WelcomeHero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-[1fr_auto] items-center gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-12">
        {/* Text */}
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-surface-sunken px-4 py-2 font-body text-xs font-bold uppercase tracking-wide text-ink-soft shadow-clay-soft">
            <span className="h-2 w-2 rounded-full bg-free" aria-hidden="true" />
            Seviye 7 · 6 günlük seri
          </span>

          <h1 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Zihnini çalıştır,
            <br />
            <span className="text-primary">oynarken geliş!</span>
          </h1>

          <p className="max-w-lg font-body text-lg font-semibold text-ink-soft">
            Dikkat, hafıza, mantık ve daha fazlası. Yaşına uygun, eğlenceli oyunlarla
            bilişsel becerilerini geliştir, ilerlemeni takip et.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="primary" icon={<Play size={20} aria-hidden="true" />} onClick={() => navigate("/games/desen-ustasi")}>
              Oyuna Başla
            </Button>
            <Button variant="secondary" icon={<Compass size={20} aria-hidden="true" />} onClick={() => navigate("/games")}>
              Oyunları Keşfet
            </Button>
          </div>
        </div>

        {/* Mascot */}
        <div className="relative grid place-items-center">
          <div className="grid h-32 w-32 place-items-center rounded-clay-lg bg-surface shadow-clay sm:h-80 sm:w-80">
            <BrainMascot />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrainMascot() {
  return (
    <svg width="180" height="180" viewBox="0 0 200 200" fill="none" aria-hidden="true" className="motion-reduce:animate-none">
      {/* Brain body */}
      <ellipse cx="100" cy="100" rx="70" ry="65" fill="url(#brainGrad)" />
      {/* Left hemisphere folds */}
      <path d="M70 60c-12 8-18 22-14 38s2 30-6 40" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
      <path d="M55 80c-8 10-10 24-4 36" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
      {/* Right hemisphere folds */}
      <path d="M130 60c12 8 18 22 14 38s-2 30 6 40" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
      <path d="M145 80c8 10 10 24 4 36" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.3" />
      {/* Center fold */}
      <path d="M100 45v110" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
      {/* Eyes */}
      <circle cx="78" cy="95" r="8" fill="var(--color-ink)" />
      <circle cx="122" cy="95" r="8" fill="var(--color-ink)" />
      <circle cx="80" cy="92" r="3" fill="white" />
      <circle cx="124" cy="92" r="3" fill="white" />
      {/* Smile */}
      <path d="M82 115c10 10 26 10 36 0" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <circle cx="62" cy="110" r="6" fill="var(--color-accent)" opacity="0.3" />
      <circle cx="138" cy="110" r="6" fill="var(--color-accent)" opacity="0.3" />
      {/* Sparkles */}
      <g className="origin-center animate-pulse motion-reduce:animate-none">
        <path d="M40 40l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="var(--color-star)" />
      </g>
      <g className="origin-center animate-pulse motion-reduce:animate-none" style={{ animationDelay: "0.5s" }}>
        <path d="M160 50l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="var(--color-accent)" />
      </g>
      <defs>
        <linearGradient id="brainGrad" x1="40" y1="40" x2="160" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-secondary)" />
          <stop offset="1" stopColor="var(--color-primary)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
