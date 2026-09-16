import { ArrowLeft, Check, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ProgressBar } from "../../design-system/components";
import { patternQuestions } from "../data/patternGame";

export function PatternGamePage() {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const question = patternQuestions[questionIndex];
  const isCorrect = selected === question.answer;
  const progress = ((questionIndex + 1) / patternQuestions.length) * 100;

  function selectAnswer(option: string) {
    if (selected) return;
    setSelected(option);
    if (option === question.answer) setScore((current) => current + 1);
  }

  function continueGame() {
    if (questionIndex === patternQuestions.length - 1) {
      const finalScore = score;
      sessionStorage.setItem(
        "desen-ustasi-result",
        JSON.stringify({ score: finalScore, total: patternQuestions.length }),
      );
      navigate("/results/desen-ustasi", { state: { score: finalScore } });
      return;
    }

    setQuestionIndex((current) => current + 1);
    setSelected(null);
  }

  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex min-h-16 max-w-5xl items-center gap-4 px-4 sm:px-6">
          <button
            type="button"
            onClick={() => navigate("/games/desen-ustasi")}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-clay-sm text-ink-soft hover:bg-surface-sunken focus-visible:ring-4 focus-visible:ring-primary/40"
            aria-label="Oyundan çık"
          >
            <ArrowLeft size={22} aria-hidden="true" />
          </button>
          <div className="flex-1">
            <div className="mb-1.5 flex items-center justify-between gap-4">
              <span className="font-display text-sm font-extrabold text-ink">Desen Ustası</span>
              <span className="font-body text-xs font-extrabold text-ink-mute">
                {questionIndex + 1} / {patternQuestions.length}
              </span>
            </div>
            <ProgressBar value={progress} label="Oyun ilerlemesi" />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <section aria-labelledby="question-title" className="rounded-clay-lg border border-border bg-surface p-5 shadow-clay sm:p-8">
          <span className="font-body text-sm font-extrabold uppercase tracking-[0.16em] text-primary">
            Soru {questionIndex + 1}
          </span>
          <h1 id="question-title" className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {question.prompt}
          </h1>

          <div className="mt-7 grid grid-cols-5 gap-2" aria-label={`Dizi: ${question.sequence.join(", ")}`}>
            {question.sequence.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="grid min-h-20 place-items-center rounded-clay bg-surface-sunken px-2 text-center font-display text-base font-extrabold text-ink shadow-clay-soft sm:min-h-24 sm:text-xl"
              >
                {item}
              </span>
            ))}
          </div>

          <fieldset className="mt-8" disabled={selected !== null}>
            <legend className="mb-3 font-body text-sm font-extrabold text-ink-soft">Cevabını seç</legend>
            <div className="grid gap-3 sm:grid-cols-3">
              {question.options.map((option) => {
                const optionCorrect = selected !== null && option === question.answer;
                const optionWrong = selected === option && option !== question.answer;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(option)}
                    aria-pressed={selected === option}
                    className={
                      "flex min-h-[56px] items-center justify-center gap-2 rounded-clay border px-4 font-display text-lg font-extrabold shadow-clay-soft transition-[transform,box-shadow] focus-visible:ring-4 focus-visible:ring-primary/40 " +
                      (optionCorrect
                        ? "border-free bg-free/15 text-ink"
                        : optionWrong
                          ? "border-accent bg-accent/10 text-ink"
                          : "border-border bg-surface text-ink hover:-translate-y-0.5 hover:shadow-clay")
                    }
                  >
                    {optionCorrect && <Check size={20} aria-hidden="true" className="text-free" />}
                    {optionWrong && <X size={20} aria-hidden="true" className="text-accent" />}
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {selected && (
            <div
              role="status"
              aria-live="polite"
              className={
                "mt-6 rounded-clay border p-4 " +
                (isCorrect ? "border-free bg-free/10" : "border-accent bg-accent/10")
              }
            >
              <p className="font-display text-lg font-extrabold text-ink">
                {isCorrect ? "Harika, doğru cevap!" : `Doğru cevap: ${question.answer}`}
              </p>
              <p className="mt-1 font-body text-sm font-bold text-ink-soft">{question.explanation}</p>
            </div>
          )}

          <div className="mt-7 flex justify-end">
            <Button disabled={!selected} onClick={continueGame} className="w-full sm:w-auto">
              {questionIndex === patternQuestions.length - 1 ? "Sonucu Gör" : "Sonraki Soru"}
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
