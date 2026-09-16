import { Search, SlidersHorizontal } from "lucide-react";
import type { Difficulty, Tier } from "../../../design-system/components";

export interface FilterState {
  search: string;
  category: string;
  difficulty: Difficulty | "all";
  tier: Tier | "all";
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  categories: string[];
}

export function FilterBar({ filters, onChange, categories }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Search */}
      <div className="relative">
        <Search
          size={20}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-mute"
        />
        <input
          type="search"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          placeholder="Oyun ara..."
          aria-label="Oyun ara"
          className="h-12 w-full rounded-clay border border-border bg-surface pl-12 pr-4 font-body text-sm font-semibold text-ink shadow-clay-soft transition-[box-shadow] duration-[160ms] ease-clay placeholder:text-ink-mute focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Kategori filtresi">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onChange({ ...filters, category: cat })}
            aria-pressed={filters.category === cat}
            className={
              "min-h-[44px] rounded-full px-4 py-2 font-display text-sm font-extrabold transition-[box-shadow,transform] duration-[160ms] ease-clay active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 " +
              (filters.category === cat
                ? "bg-primary text-white shadow-clay-soft"
                : "bg-surface text-ink-soft shadow-clay-soft hover:shadow-clay")
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Difficulty + Tier */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} aria-hidden="true" className="text-ink-mute" />
          <label htmlFor="difficulty-filter" className="sr-only">Zorluk seviyesi</label>
          <select
            id="difficulty-filter"
            value={filters.difficulty}
            onChange={(e) => onChange({ ...filters, difficulty: e.target.value as Difficulty | "all" })}
            className="h-11 rounded-clay border border-border bg-surface px-4 font-body text-sm font-bold text-ink shadow-clay-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
          >
            <option value="all">Tüm Zorluklar</option>
            <option value="easy">Kolay</option>
            <option value="medium">Orta</option>
            <option value="hard">Zor</option>
          </select>
        </div>

        <div className="flex items-center gap-2" role="group" aria-label="Üyelik filtresi">
          {(["all", "free", "premium"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onChange({ ...filters, tier: t })}
              aria-pressed={filters.tier === t}
              className={
                "min-h-[44px] rounded-clay-sm px-4 py-2 font-display text-sm font-extrabold transition-[box-shadow,transform] duration-[160ms] ease-clay active:translate-y-px focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 " +
                (filters.tier === t
                  ? "bg-primary text-white shadow-clay-soft"
                  : "bg-surface text-ink-soft shadow-clay-soft hover:shadow-clay")
              }
            >
              {t === "all" ? "Tümü" : t === "free" ? "Ücretsiz" : "Premium"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
