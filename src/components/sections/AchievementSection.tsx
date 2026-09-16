import { Trophy } from "lucide-react";
import { Badge, ProgressBar } from "../../../design-system/components";
import { achievements } from "../../data/mockData";

export function AchievementSection() {
  const unlockedCount = achievements.filter((a) => !a.locked).length;

  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <div className="mb-5 flex items-center gap-2">
        <Trophy size={26} aria-hidden="true" className="text-star" />
        <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
          Başarılarım
        </h2>
        <span className="ml-2 rounded-full bg-surface-sunken px-3 py-1 font-body text-xs font-bold text-ink-soft">
          {unlockedCount} / {achievements.length}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {achievements.map((a) => (
          <div key={a.id} className="flex flex-col items-center gap-3 rounded-clay bg-surface p-5 text-center shadow-clay-soft">
            <Badge label={a.label} locked={a.locked}>
              <span className="text-2xl font-extrabold">{a.glyph}</span>
            </Badge>
            <span className="font-display text-sm font-extrabold text-ink">{a.label}</span>
            {typeof a.progress === "number" && (
              <div className="w-full">
                <ProgressBar value={a.progress} label={`${a.label} ilerlemesi`} />
                <span className="mt-1.5 block font-body text-xs font-bold text-ink-mute">%{a.progress}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
