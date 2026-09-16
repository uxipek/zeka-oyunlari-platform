import { TrendingUp, Target, Award } from "lucide-react";
import { XpPill, ProgressBar } from "../../../design-system/components";
import { userProfile, weeklyProgress } from "../../data/mockData";
import { StreakCounter } from "./StreakCounter";
import { useProgress } from "../../context/ProgressContext";

export function ProgressSummary() {
  const { totalXp, dailyDone } = useProgress();
  const maxBarHeight = 80;
  const maxXp = Math.max(...weeklyProgress.map((d) => d.xp), 1);
  const dailyPct = (dailyDone / userProfile.dailyGoal.target) * 100;

  return (
    <section id="progress" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <h2 className="mb-5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
        Gelişimim
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Level card */}
        <div className="flex flex-col gap-3 rounded-clay bg-surface p-5 shadow-clay">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-clay-sm bg-[linear-gradient(135deg,var(--color-secondary),var(--color-primary))] text-white shadow-clay-soft">
              <Award size={26} aria-hidden="true" />
            </span>
            <div>
              <span className="block font-display text-3xl font-extrabold text-ink">Seviye {userProfile.level}</span>
              <span className="font-body text-xs font-bold text-ink-mute">Tebrikler, devam et!</span>
            </div>
          </div>
          <XpPill amount={totalXp} gained={false} className="mt-1" />
        </div>

        {/* Daily goal card */}
        <div className="flex flex-col gap-3 rounded-clay bg-surface p-5 shadow-clay">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-clay-sm bg-[linear-gradient(135deg,var(--color-free),var(--color-primary))] text-white shadow-clay-soft">
              <Target size={26} aria-hidden="true" />
            </span>
            <div>
              <span className="block font-display text-lg font-extrabold text-ink">Günlük Hedef</span>
              <span className="font-body text-xs font-bold text-ink-mute">
                {dailyDone} / {userProfile.dailyGoal.target} oyun tamamlandı
              </span>
            </div>
          </div>
          <ProgressBar value={dailyPct} label="Günlük hedef ilerlemesi" />
        </div>

        {/* Streak card */}
        <StreakCounter />
      </div>

      {/* Weekly chart */}
      <div className="mt-4 rounded-clay bg-surface p-5 shadow-clay md:col-span-2 lg:col-span-3">
        <div className="mb-4 flex items-center gap-2">
          <TrendingUp size={22} aria-hidden="true" className="text-primary" />
          <h3 className="font-display text-lg font-extrabold text-ink">Haftalık İlerleme</h3>
        </div>
        <div className="flex items-end justify-between gap-2 sm:gap-4" role="img" aria-label="Haftalık XP grafiği">
          {weeklyProgress.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex w-full items-end justify-center" style={{ height: maxBarHeight }}>
                <div
                  className={
                    "w-full max-w-[2.5rem] rounded-t-clay-sm transition-[height] duration-300 ease-clay motion-reduce:transition-none " +
                    (d.xp > 0
                      ? "bg-[linear-gradient(180deg,var(--color-secondary),var(--color-primary))]"
                      : "bg-surface-sunken")
                  }
                  style={{ height: d.xp > 0 ? `${(d.xp / maxXp) * maxBarHeight}px` : "4px" }}
                  aria-label={`${d.day}: ${d.xp} XP`}
                />
              </div>
              <span className="font-body text-xs font-bold text-ink-mute">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
