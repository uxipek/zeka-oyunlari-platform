import { Flame } from "lucide-react";
import { streakDays } from "../../data/mockData";

export function StreakCounter() {
  const completedCount = streakDays.filter((d) => d.completed).length;

  return (
    <div className="flex flex-col gap-3 rounded-clay bg-surface p-5 shadow-clay-soft">
      <div className="flex items-center gap-2">
        <span className="grid h-10 w-10 place-items-center rounded-clay-sm bg-[linear-gradient(135deg,var(--color-accent),var(--color-star))] text-white shadow-clay-soft">
          <Flame size={22} aria-hidden="true" />
        </span>
        <div>
          <span className="block font-display text-2xl font-extrabold text-ink">{completedCount} günlük seri</span>
          <span className="font-body text-xs font-bold text-ink-mute">Devam et, rekoru kır!</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-1 pt-1" role="group" aria-label="Haftalık seri takibi">
        {streakDays.map((d) => (
          <div key={d.day} className="flex flex-col items-center gap-1.5">
            <span
              className={
                "grid h-8 w-8 place-items-center rounded-clay-sm " +
                (d.completed
                  ? "bg-[linear-gradient(135deg,var(--color-accent),var(--color-star))] text-white shadow-clay-soft"
                  : "bg-surface-sunken text-ink-mute")
              }
              aria-label={d.completed ? `${d.day} tamamlandı` : `${d.day} henüz oynanmadı`}
            >
              {d.completed ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              ) : null}
            </span>
            <span className="font-body text-[0.65rem] font-bold text-ink-mute">{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
