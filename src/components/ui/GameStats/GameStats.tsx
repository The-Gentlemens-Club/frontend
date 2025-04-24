import React from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./GameStats.module.scss";

interface GameStatsProps {
  totalGames: number;
  winRate: number;
  highestWin: string;
  currentStreak: number;
  className?: string;
}

export const GameStats: React.FC<GameStatsProps> = ({
  totalGames,
  winRate,
  highestWin,
  currentStreak,
  className = "",
}) => {
  return (
    <div className={`game-stats ${className}`}>
      <StatsCard
        totalWager="0"
        totalWins={currentStreak}
        totalGames={totalGames}
        profitLoss="0"
        winRate={winRate}
        highestWin={highestWin}
      />
    </div>
  );
};
