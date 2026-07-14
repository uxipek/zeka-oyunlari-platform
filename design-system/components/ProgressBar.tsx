interface ProgressBarProps {
  /** 0–100. */
  value: number;
  label?: string;
}

/** A sunken clay track with a filled indigo bar. Accessible progressbar role. */
export function ProgressBar({ value, label = "İlerleme" }: ProgressBarProps) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-3.5 rounded-full bg-surface-sunken shadow-clay-press overflow-hidden"
    >
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))] transition-[width] duration-300 ease-clay motion-reduce:transition-none"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
