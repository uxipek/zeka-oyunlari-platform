import { PageLayout } from "../components/layout/PageLayout";
import { GameDiscovery } from "../components/sections/GameDiscovery";

export function GamesPage() {
  return (
    <PageLayout>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <span className="font-body text-sm font-extrabold uppercase tracking-[0.18em] text-primary">
          Oyun Kütüphanesi
        </span>
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold text-ink sm:text-5xl">
          Bugün hangi becerini geliştirmek istersin?
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg font-semibold text-ink-soft">
          Becerine, seviyene ve üyelik türüne göre oyunları keşfet.
        </p>
      </section>
      <GameDiscovery />
    </PageLayout>
  );
}
