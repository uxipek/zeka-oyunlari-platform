import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";
type AgeBand = "kid" | "teen";

interface ThemeContextValue {
  theme: Theme;
  ageBand: AgeBand;
  toggleTheme: () => void;
  toggleAgeBand: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_KEY = "zeka-theme";
const AGE_KEY = "zeka-age";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getInitialAgeBand(): AgeBand {
  if (typeof window === "undefined") return "kid";
  const stored = localStorage.getItem(AGE_KEY);
  return stored === "teen" ? "teen" : "kid";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [ageBand, setAgeBand] = useState<AgeBand>(getInitialAgeBand);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.age = ageBand;
    localStorage.setItem(AGE_KEY, ageBand);
  }, [ageBand]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        ageBand,
        toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
        toggleAgeBand: () => setAgeBand((a) => (a === "kid" ? "teen" : "kid")),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
