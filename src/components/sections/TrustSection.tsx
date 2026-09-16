import { ShieldCheck, Lock, Brain, LineChart } from "lucide-react";
import { trustPillars } from "../../data/mockData";

const ICONS: Record<string, React.ReactNode> = {
  shield: <ShieldCheck size={28} aria-hidden="true" />,
  lock: <Lock size={28} aria-hidden="true" />,
  brain: <Brain size={28} aria-hidden="true" />,
  chart: <LineChart size={28} aria-hidden="true" />,
};

export function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <h2 className="mb-5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
        Neden Zeka Oyunları?
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustPillars.map((p) => (
          <div key={p.title} className="flex flex-col gap-3 rounded-clay bg-surface p-5 shadow-clay-soft">
            <span className="grid h-12 w-12 place-items-center rounded-clay-sm bg-surface-sunken text-primary">
              {ICONS[p.icon]}
            </span>
            <h3 className="font-display text-base font-extrabold text-ink">{p.title}</h3>
            <p className="font-body text-sm font-semibold text-ink-mute">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
