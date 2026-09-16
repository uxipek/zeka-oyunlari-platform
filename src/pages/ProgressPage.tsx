import { PageLayout } from "../components/layout/PageLayout";
import { AchievementSection } from "../components/sections/AchievementSection";
import { ProgressSummary } from "../components/sections/ProgressSummary";

export function ProgressPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <span className="font-body text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
          Kişisel Gelişim
        </span>
        <h1 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl">
          İlerlemeni tek yerde gör
        </h1>
      </section>
      <ProgressSummary />
      <AchievementSection />
    </PageLayout>
  );
}
