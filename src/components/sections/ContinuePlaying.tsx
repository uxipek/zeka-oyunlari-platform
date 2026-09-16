import { Play } from "lucide-react";
import { Button, ProgressBar, TierBadge, DifficultyMeter } from "../../../design-system/components";
import { continuePlaying } from "../../data/mockData";
import { useNavigate } from "react-router-dom";

export function ContinuePlaying() {
  const game = continuePlaying;
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <h2 className="mb-5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
        Kaldığın Yerden Devam Et
      </h2>

      <div className="flex flex-col gap-6 rounded-clay-lg bg-surface p-6 shadow-clay sm:flex-row sm:items-center sm:gap-8">
        {/* Icon */}
        <div className="grid h-28 w-28 shrink-0 place-items-center rounded-clay bg-[linear-gradient(135deg,var(--color-secondary),var(--color-primary))] text-white shadow-clay-soft sm:h-32 sm:w-32">
          <ContinueIcon />
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col gap-3">
          <div>
            <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl">{game.title}</h3>
            <span className="font-body text-xs font-bold uppercase tracking-wide text-ink-mute">{game.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <TierBadge tier={game.tier} />
            <DifficultyMeter level={game.difficulty} />
            <span className="font-body text-xs font-bold text-ink-mute">~{game.playTime} dk</span>
          </div>

          <div className="pt-1">
            <ProgressBar value={game.progress!} label={`${game.title} ilerlemesi`} />
            <span className="mt-1.5 block font-body text-xs font-bold text-ink-mute">%{game.progress} tamamlandı</span>
          </div>
        </div>

        {/* CTA */}
        <div className="sm:pl-4">
          <Button variant="primary" icon={<Play size={20} aria-hidden="true" />} className="w-full sm:w-auto" onClick={() => navigate(`/games/${game.id}`)}>
            Devam Et
          </Button>
        </div>
      </div>
    </section>
  );
}

function ContinueIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
      <path d="M3 7h7M7 3v7M14 7h7M17 3v7M14 17h7M17 14v7M3 17h7M7 14v7" />
    </svg>
  );
}
