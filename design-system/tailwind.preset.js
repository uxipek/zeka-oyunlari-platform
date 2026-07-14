/**
 * Zeka Oyunları — Tailwind preset
 *
 * Import tokens.css once (globally), then add this preset to your
 * tailwind.config.js:
 *
 *   const zeka = require("./design-system/tailwind.preset");
 *   module.exports = { presets: [zeka], content: [...] };
 *
 * Every value maps to a CSS variable, so light/dark and the
 * kid/teen age band swap at runtime with no rebuild.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        bg:              "var(--color-bg)",
        surface:         "var(--color-surface)",
        "surface-sunken":"var(--color-surface-sunken)",
        ink:             "var(--color-ink)",
        "ink-soft":      "var(--color-ink-soft)",
        "ink-mute":      "var(--color-ink-mute)",
        border:          "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        primary:         "var(--color-primary)",
        "primary-press": "var(--color-primary-press)",
        secondary:       "var(--color-secondary)",
        accent:          "var(--color-accent)",
        "accent-press":  "var(--color-accent-press)",
        free:            "var(--color-free)",
        "free-soft":     "var(--color-free-soft)",
        premium:         "var(--color-premium)",
        "premium-soft":  "var(--color-premium-soft)",
        hard:            "var(--color-hard)",
        xp:              "var(--color-xp)",
        star:            "var(--color-star)",
      },
      borderRadius: {
        clay:    "var(--radius-md)",
        "clay-sm":"var(--radius-sm)",
        "clay-lg":"var(--radius-lg)",
      },
      boxShadow: {
        clay:        "var(--shadow-clay)",
        "clay-press":"var(--shadow-clay-press)",
        "clay-soft": "var(--shadow-clay-soft)",
      },
      fontFamily: {
        display: "var(--font-display)",
        body:    "var(--font-body)",
      },
      transitionTimingFunction: {
        clay: "cubic-bezier(.22, 1, .36, 1)",
      },
    },
  },
};
