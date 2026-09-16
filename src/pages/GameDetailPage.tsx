import { ArrowLeft, Brain, Clock3, Play, Sparkles, Target } from "lucide-react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Button, DifficultyMeter, TierBadge, XpPill } from "../../design-system/components";
import { PageLayout } from "../components/layout/PageLayout";
import { continuePlaying, games } from "../data/mockData";

const SKILLS: Record<string, string[]> = {
  "desen-ustasi": ["Örüntü tanıma", "Akıl yürütme", "Odaklanma"],
  "hafiza-adalari": ["Kısa süreli hafıza", "Görsel eşleştirme", "Odaklanma"],
};

export function GameDetailPage() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = [...games, continuePlaying].find((item) => item.id === gameId);

  if (!game) return <Navigate to="/games" replace />;

  const playable = game.id === "desen-ustasi";
  const skills = SKILLS[game.id] ?? [game.category, "Problem çözme", "Odaklanma"];

  return (
    <PageLayout>
      <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          to="/games"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-clay-sm px-3 font-body text-sm font-extrabold text-ink-soft hover:bg-surface-sunken focus-visible:ring-4 focus-visible:ring-primary/40"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Oyunlara dön
        </Link>

        <div className="mt-5 grid gap-6 rounded-clay-lg border border-border bg-surface p-6 shadow-clay md:grid-cols-[0.8fr_1.2fr] md:p-8">
          <div className="grid min-h-64 place-items-center rounded-clay-lg bg-[linear-gradient(135deg,var(--color-secondary),var(--color-primary))] text-white shadow-clay-soft">
            <PatternArtwork />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-body text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
              {game.category}
            </span>
            <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">
              {game.title}
            </h1>
            <p className="mt-4 font-body text-base font-semibold text-ink-soft sm:text-lg">
              Değişen dizileri dikkatle incele, örüntünün kuralını bul ve doğru seçeneği işaretle.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <TierBadge tier={game.tier} />
              <DifficultyMeter level={game.difficulty} />
              <span className="inline-flex items-center gap-1.5 font-body text-sm font-bold text-ink-mute">
                <Clock3 size={17} aria-hidden="true" /> ~{game.playTime} dk
              </span>
              <XpPill amount={game.xpReward} />
            </div>

            <div className="mt-6 rounded-clay bg-surface-sunken p-4">
              <h2 className="font-display text-lg font-extrabold text-ink">Bu oyun neyi geliştirir?</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                {skills.map((skill, index) => (
                  <li key={skill} className="flex items-center gap-2 font-body text-sm font-bold text-ink-soft">
                    {[Brain, Target, Sparkles].map((Icon, iconIndex) =>
                      iconIndex === index ? <Icon key={skill} size={18} aria-hidden="true" className="text-primary" /> : null,
                    )}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              {playable ? (
                <Button
                  icon={<Play size={20} aria-hidden="true" />}
                  onClick={() => navigate("/play/desen-ustasi")}
                  className="w-full sm:w-auto"
                >
                  Oyuna Başla
                </Button>
              ) : (
                <div role="status" className="rounded-clay bg-surface-sunken px-4 py-3 font-body text-sm font-bold text-ink-soft">
                  Bu oyunun oynanabilir sürümü yakında eklenecek. Şimdilik Desen Ustası’nı deneyebilirsin.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function PatternArtwork() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <circle cx="60" cy="65" r="24" fill="white" fillOpacity=".95" />
      <rect x="104" y="41" width="48" height="48" rx="10" fill="var(--color-star)" />
      <path d="M45 155l24-42 24 42H45z" fill="var(--color-accent)" />
      <circle cx="139" cy="139" r="25" stroke="white" strokeWidth="9" />
      <path d="M180 54l5 11 11 5-11 5-5 11-5-11-11-5 11-5 5-11z" fill="white" />
    </svg>
  );
}
