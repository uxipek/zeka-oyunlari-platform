import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { userProfile } from "../data/mockData";

interface ProgressState {
  totalXp: number;
  dailyDone: number;
  completedGameIds: string[];
}

interface ProgressContextValue extends ProgressState {
  awardCompletion: (gameId: string, xp: number) => void;
}

const STORAGE_KEY = "zeka-progress";
const ProgressContext = createContext<ProgressContextValue | null>(null);

function getInitialProgress(): ProgressState {
  const fallback: ProgressState = {
    totalXp: userProfile.totalXp,
    dailyDone: userProfile.dailyGoal.done,
    completedGameIds: [],
  };

  if (typeof window === "undefined") return fallback;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored) as Partial<ProgressState>;
    return {
      totalXp: typeof parsed.totalXp === "number" ? parsed.totalXp : fallback.totalXp,
      dailyDone: typeof parsed.dailyDone === "number" ? parsed.dailyDone : fallback.dailyDone,
      completedGameIds: Array.isArray(parsed.completedGameIds)
        ? parsed.completedGameIds.filter((id): id is string => typeof id === "string")
        : [],
    };
  } catch {
    return fallback;
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(getInitialProgress);

  const awardCompletion = useCallback((gameId: string, xp: number) => {
    setProgress((current) => {
      if (current.completedGameIds.includes(gameId)) return current;

      const next: ProgressState = {
        totalXp: current.totalXp + xp,
        dailyDone: Math.min(current.dailyDone + 1, userProfile.dailyGoal.target),
        completedGameIds: [...current.completedGameIds, gameId],
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ ...progress, awardCompletion }),
    [awardCompletion, progress],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used within ProgressProvider");
  return context;
}
