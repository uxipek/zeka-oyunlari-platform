import { RotateCcw, Sparkles, Trophy } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, XpPill } from "../../design-system/components";
import { PageLayout } from "../components/layout/PageLayout";
import { patternQuestions } from "../data/patternGame";
import { useProgress } from "../context/ProgressContext";

interface ResultState {
  score?: number;
}

export function GameResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { completedGameIds, awardCompletion, totalXp } = useProgress();

  const score = useMemo(() => {
    const routeScore = (location.state as ResultState | null)?.score;
    if (typeof routeScore === "number") return routeScore;
    try {
      const stored = JSON.parse(sessionStorage.getItem("desen-ustasi-result") ?? "null") as { score?: number } | null;
      return typeof stored?.score === "number" ? stored.score : 0;
    } catch {
      return 0;
    }
  }, [location.state]);

  const total = patternQuestions.length;
  const percentage = Math.round((score / total) * 100);
  const earnedXp = Math.round(100 * (score / total));
  const alreadyCompletedOnEntry = useRef(completedGameIds.includes("desen-ustasi"));

  useEffect(() => {
    awardCompletion("desen-ustasi", earnedXp);
  }, [awardCompletion, earnedXp]);

  return (
    <PageLayout>
      <section className="mx-auto max-w-3xl px-4 pt-10 text-center sm:px-6 sm:pt-16">
        <div className="rounded-clay-lg border border-border bg-surface p-6 shadow-clay sm:p-10">
          <span className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-star),var(--color-accent))] text-white shadow-clay">
            <Trophy size={48} aria-hidden="true" />
          </span>
          <span className="mt-6 block font-body text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
            Oyun Tamamlandı
          </span>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">
            {percentage >= 80 ? "Örüntüleri yakaladın!" : "Güzel başlangıç!"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg font-semibold text-ink-soft">
            {total} sorudan {score} tanesini doğru yanıtladın. Her deneme örüntüleri daha hızlı fark etmene yardımcı olur.
          </p>

          <div className="mx-auto mt-8 grid max-w-lg gap-4 sm:grid-cols-3">
            <ResultMetric label="Doğru" value={`${score}/${total}`} />
            <ResultMetric label="Başarı" value={`%${percentage}`} />
            <div className="flex min-h-28 flex-col items-center justify-center rounded-clay bg-surface-sunken p-4">
              <span className="font-body text-xs font-extrabold uppercase tracking-wide text-ink-mute">Kazanılan</span>
              <XpPill amount={alreadyCompletedOnEntry.current ? 0 : earnedXp} className="mt-2" />
            </div>
          </div>

          {alreadyCompletedOnEntry.current && (
            <p className="mt-4 font-body text-sm font-bold text-ink-mute">
              Bu oyunun XP ödülünü daha önce kazandın. Tekrar oynamak pratiğine katkı sağlar.
            </p>
          )}

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              variant="secondary"
              icon={<RotateCcw size={19} aria-hidden="true" />}
              onClick={() => navigate("/play/desen-ustasi")}
            >
              Tekrar Oyna
            </Button>
            <Button
              icon={<Sparkles size={19} aria-hidden="true" />}
              onClick={() => navigate("/progress")}
            >
              Gelişimimi Gör
            </Button>
          </div>

          <p className="mt-8 font-body text-xs font-bold text-ink-mute" aria-live="polite">
            Güncel toplam: {totalXp.toLocaleString("tr-TR")} XP
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

function ResultMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-h-28 flex-col items-center justify-center rounded-clay bg-surface-sunken p-4">
      <span className="font-body text-xs font-extrabold uppercase tracking-wide text-ink-mute">{label}</span>
      <strong className="mt-1 font-display text-3xl font-extrabold text-ink">{value}</strong>
    </div>
  );
}
