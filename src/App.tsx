import { ThemeProvider } from "./context/ThemeContext";
import { ProgressProvider } from "./context/ProgressContext";
import { HomePage } from "./pages/HomePage";
import { GamesPage } from "./pages/GamesPage";
import { ProgressPage } from "./pages/ProgressPage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { PatternGamePage } from "./pages/PatternGamePage";
import { GameResultPage } from "./pages/GameResultPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RouteEffects() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash, location.pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <RouteEffects />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/:gameId" element={<GameDetailPage />} />
          <Route path="/play/desen-ustasi" element={<PatternGamePage />} />
          <Route path="/results/desen-ustasi" element={<GameResultPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
