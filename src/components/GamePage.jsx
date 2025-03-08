import Board from "./Board";
import Rack from "./Rack";
import GameControls from "./GameControls";

const GamePage = ({ gameMode, onGoHome }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 p-6">
      {/* Display Game Mode */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Game Mode: {gameMode === "computer" ? "Vs Computer" : `${gameMode} Players`}
      </h2>

      {/* Player Scores */}
      <div className="w-full max-w-4xl flex justify-between bg-yellow-400 p-4 rounded-lg shadow-md mb-4">
        <p className="text-lg font-bold">Player 1: 15</p>
        <p className="text-lg font-bold">Player 2: 20</p>
      </div>

      {/* Game Board */}
      <Board />

      {/* Player Rack */}
      <Rack />

      {/* Game Controls */}
      <GameControls />

      {/* Back to Home Button */}
      <button
        className="mt-6 px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-all"
        onClick={onGoHome}
      >
        Back to Home
      </button>
    </div>
  );
};

export default GamePage;
