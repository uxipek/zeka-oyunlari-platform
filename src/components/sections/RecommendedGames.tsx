import { Sparkles } from "lucide-react";
import { GameCard } from "../../../design-system/components";
import { recommendedGames } from "../../data/mockData";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const ICON_MAP: Record<string, ReactNode> = {
  pattern: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><circle cx="17.5" cy="17.5" r="3.5" />
    </svg>
  ),
  strategy: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" /><circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
  ),
  focus: (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
};

export function RecommendedGames() {
  const navigate = useNavigate();
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <div className="mb-5 flex items-center gap-2">
        <Sparkles size={26} aria-hidden="true" className="text-accent" />
        <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Senin İçin Seçildiler
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommendedGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            category={game.category}
            tier={game.tier}
            difficulty={game.difficulty}
            playTime={game.playTime}
            xpReward={game.xpReward}
            recommendationReason={game.recommendationReason}
            icon={ICON_MAP[game.icon]}
            onPlay={() => navigate(`/games/${game.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
