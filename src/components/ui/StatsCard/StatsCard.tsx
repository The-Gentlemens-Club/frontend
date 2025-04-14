import React from "react";
import { Card } from "../Card/Card";
import { ethers } from "ethers";
import styles from "./StatsCard.module.scss";

interface StatsCardProps {
  totalWager: string;
  totalWins: number;
  totalGames: number;
  profitLoss: string;
  winRate: number;
  highestWin: string;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  totalWager = "0",
  totalWins = 0,
  totalGames = 0,
  profitLoss = "0",
  winRate = 0,
  highestWin = "0",
  className = "",
}) => {
  const formatBigNumber = (value: string | null | undefined) => {
    try {
      return value ? ethers.formatEther(value) : "0";
    } catch (error) {
      return "0";
    }
  };

  return (
    <Card className={`${styles.statsCard} ${className}`}>
      <h3 className={styles.statsCard__title}>Player Statistics</h3>

      <div className={styles.statsCard__grid}>
        <div className={styles.statsCard__stat}>
          <span className={styles.statsCard__label}>Total Wager</span>
          <span className={styles.statsCard__value}>
            {formatBigNumber(totalWager)} GTLM
          </span>
        </div>

        <div className={styles.statsCard__stat}>
          <span className={styles.statsCard__label}>Win Rate</span>
          <span className={styles.statsCard__value}>{winRate.toFixed(2)}%</span>
        </div>

        <div className={styles.statsCard__stat}>
          <span className={styles.statsCard__label}>Total Games</span>
          <span className={styles.statsCard__value}>{totalGames}</span>
        </div>

        <div className={styles.statsCard__stat}>
          <span className={styles.statsCard__label}>Total Wins</span>
          <span className={styles.statsCard__value}>{totalWins}</span>
        </div>

        <div className={styles.statsCard__stat}>
          <span className={styles.statsCard__label}>Profit/Loss</span>
          <span
            className={`${styles.statsCard__value} ${parseFloat(formatBigNumber(profitLoss)) >= 0 ? styles["statsCard__value--positive"] : styles["statsCard__value--negative"]}`}
          >
            {formatBigNumber(profitLoss)} GTLM
          </span>
        </div>

        <div className={styles.statsCard__stat}>
          <span className={styles.statsCard__label}>Highest Win</span>
          <span
            className={`${styles.statsCard__value} ${styles["statsCard__value--positive"]}`}
          >
            {formatBigNumber(highestWin)} GTLM
          </span>
        </div>
      </div>
    </Card>
  );
};
