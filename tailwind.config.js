import zekaPreset from "./design-system/tailwind.preset.js";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [zekaPreset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './design-system/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
