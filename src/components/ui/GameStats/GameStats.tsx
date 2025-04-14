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
        label="Total Games"
        value={totalGames}
        icon={<span>🎮</span>}
      />
      <StatsCard
        label="Win Rate"
        value={`${winRate}%`}
        trend={{
          value: 5.2,
          isPositive: true,
        }}
        icon={<span>📈</span>}
      />
      <StatsCard
        label="Highest Win"
        value={highestWin}
        icon={<span>🏆</span>}
      />
      <StatsCard
        label="Current Streak"
        value={currentStreak}
        icon={<span>🔥</span>}
      />
    </div>
  );
};
