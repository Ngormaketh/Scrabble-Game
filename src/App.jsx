import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameMode, setGameMode] = useState(null);

  // Function to start the game
  const handleStartGame = (mode) => {
    setGameMode(mode);
    setGameStarted(true);
  };

  // Function to return to the Landing Page
  const handleGoHome = () => {
    setGameStarted(false);
    setGameMode(null);
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {gameStarted ? (
          <motion.div
            key="game"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <GamePage gameMode={gameMode} onGoHome={handleGoHome} />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onStartGame={handleStartGame} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
