import React from "react";
import { Card } from "../Card/Card";
import { BetResult } from "../BetResult/BetResult";
import { ethers } from "ethers";
import styles from "./GameHistory.module.scss";

interface GameHistoryProps {
  history: {
    id: string;
    game: string;
    bet: bigint;
    multiplier: number;
    outcome: "win" | "lose" | "draw";
    timestamp: Date;
  }[];
  className?: string;
}

export const GameHistory: React.FC<GameHistoryProps> = ({
  history,
  className = "",
}) => {
  return (
    <Card className={`game-history ${className}`}>
      <h3 className="game-history-title">Game History</h3>
      <div className="game-history-list">
        {history.length === 0 ? (
          <p className="game-history-empty">No games played yet</p>
        ) : (
          history.map((game) => (
            <BetResult
              key={game.id}
              outcome={game.outcome}
              amount={game.bet}
              multiplier={game.multiplier}
              game={game.game}
              timestamp={game.timestamp}
              className="mb-4 last:mb-0"
            />
          ))
        )}
      </div>
    </Card>
  );
};
