import React from "react";

const GameControls = ({ onShuffle, onSkip, onSubmit }) => {
  return (
    <div className="game-controls">
      <button onClick={onShuffle} className="control-button">Shuffle Tiles</button>
      <button onClick={onSkip} className="control-button">Skip Turn</button>
      <button onClick={onSubmit} className="control-button">Submit Move</button>
    </div>
  );
};

export default GameControls;
