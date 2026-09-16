import { PageLayout } from "../components/layout/PageLayout";
import { WelcomeHero } from "../components/sections/WelcomeHero";
import { ContinuePlaying } from "../components/sections/ContinuePlaying";
import { RecommendedGames } from "../components/sections/RecommendedGames";
import { TrustSection } from "../components/sections/TrustSection";

export function HomePage() {
  return (
    <PageLayout>
      <WelcomeHero />
      <ContinuePlaying />
      <RecommendedGames />
      <TrustSection />
    </PageLayout>
  );
}
