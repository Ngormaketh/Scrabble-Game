import { useState } from "react";

const LandingPage = ({ onStartGame }) => {
  const [gameMode, setGameMode] = useState("computer");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-blue-500 text-white p-6">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg w-96 border-4 border-yellow-400">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-blue-600">Scrabble Game</h1>

        <label className="block text-lg font-semibold mb-2 text-blue-700">Choose Game Mode:</label>
        <select
          className="w-full p-3 border border-blue-400 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={gameMode}
          onChange={(e) => setGameMode(e.target.value)}
        >
          <option value="computer">Play vs Computer</option>
          <option value="2">2 Players</option>
          <option value="3">3 Players</option>
          <option value="4">4 Players</option>
        </select>

        <button
          className="mt-6 w-full py-3 bg-blue-600 hover:bg-yellow-500 hover:text-gray-900 text-white text-lg font-semibold rounded-md transition-all duration-300 ease-in-out"
          onClick={() => onStartGame(gameMode)}
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
