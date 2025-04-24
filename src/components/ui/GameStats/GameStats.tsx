import React from "react";
import { Card } from "../Card/Card";
import { Progress } from "../Progress/Progress";
import { Badge } from "../Badge/Badge";
import styles from "./GameStats.module.scss";

interface GameStatsProps {
  totalGames: number;
  winRate: number;
  highestWin: string;
  currentStreak: number;
  level?: number;
  experience?: number;
  nextLevelExperience?: number;
  className?: string;
}

export const GameStats: React.FC<GameStatsProps> = ({
  totalGames,
  winRate,
  highestWin,
  currentStreak,
  level = 1,
  experience = 0,
  nextLevelExperience = 1000,
  className = "",
}) => {
  const progress = (experience / nextLevelExperience) * 100;

  return (
    <Card className={`${styles.gameStats} ${className}`}>
      <h3 className={styles.title}>Game Statistics</h3>
      
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Total Games</span>
          <span className={styles.statValue}>{totalGames}</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Win Rate</span>
          <span className={styles.statValue}>{winRate.toFixed(1)}%</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Highest Win</span>
          <span className={styles.statValue}>{highestWin}</span>
        </div>
        
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Current Streak</span>
          <Badge variant={currentStreak > 0 ? 'success' : 'error'}>
            {currentStreak}
          </Badge>
        </div>
      </div>

      <div className={styles.levelProgress}>
        <div className={styles.levelInfo}>
          <span className={styles.levelLabel}>Level {level}</span>
          <span className={styles.xpLabel}>
            {experience}/{nextLevelExperience} XP
          </span>
        </div>
        <Progress value={progress} className={styles.progressBar} />
      </div>
    </Card>
  );
};
