import { useMemo, useState } from "react";
import { GameCard } from "../../../design-system/components";
import { games, categories } from "../../data/mockData";
import { FilterBar, type FilterState } from "./FilterBar";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const ICON_MAP: Record<string, ReactNode> = {
  pattern: <PatternIcon />,
  math: <MathIcon />,
  word: <WordIcon />,
  strategy: <StrategyIcon />,
  focus: <FocusIcon />,
  logic: <LogicIcon />,
  color: <ColorIcon />,
  shape: <ShapeIcon />,
  memory: <MemoryIcon />,
};

export function GameDiscovery() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "Tümü",
    difficulty: "all",
    tier: "all",
  });

  const filtered = useMemo(() => {
    return games.filter((g) => {
      if (filters.search && !g.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.category !== "Tümü" && g.category !== filters.category) return false;
      if (filters.difficulty !== "all" && g.difficulty !== filters.difficulty) return false;
      if (filters.tier !== "all" && g.tier !== filters.tier) return false;
      return true;
    });
  }, [filters]);

  return (
    <section id="games" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <h2 className="mb-5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
        Oyunları Keşfet
      </h2>

      <FilterBar filters={filters} onChange={setFilters} categories={categories} />

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="grid place-items-center rounded-clay-lg bg-surface p-12 shadow-clay-soft">
            <p className="font-body text-base font-bold text-ink-mute">
              Filtrelere uygun oyun bulunamadı. Filtreleri değiştirmeyi dene.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                category={game.category}
                tier={game.tier}
                difficulty={game.difficulty}
                playTime={game.playTime}
                xpReward={game.xpReward}
                locked={game.locked}
                icon={ICON_MAP[game.icon]}
                actionLabel={game.progress ? "Devam Et" : "Oyna"}
                onPlay={() => navigate(`/games/${game.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function PatternIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><circle cx="17.5" cy="17.5" r="3.5" />
    </svg>
  );
}
function MathIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4l6 6M10 4L4 10M14 4h6M14 8h6M18 14l-6 6M12 14l6 6" />
    </svg>
  );
}
function WordIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h10" /><circle cx="19" cy="18" r="2" />
    </svg>
  );
}
function StrategyIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" /><circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}
function FocusIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}
function LogicIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3v6M15 3v6M9 15v6M15 15v6M3 9h6M3 15h6M15 9h6M15 15h6" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function ColorIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="9" r="5" /><circle cx="15" cy="9" r="5" /><circle cx="12" cy="15" r="5" />
    </svg>
  );
}
function ShapeIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l9 16H3z" /><path d="M8 13h8" />
    </svg>
  );
}
function MemoryIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" />
    </svg>
  );
}
