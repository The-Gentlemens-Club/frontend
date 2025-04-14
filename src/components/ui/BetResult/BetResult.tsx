import React from "react";
import { Badge } from "../Badge/Badge";
import { Card } from "../Card/Card";
import { ethers } from "ethers";
import styles from "./BetResult.module.scss";

interface BetResultProps {
  outcome: "win" | "lose" | "draw";
  amount: BigNumber;
  multiplier: number;
  game: string;
  timestamp: Date;
  className?: string;
}

export const BetResult: React.FC<BetResultProps> = ({
  outcome,
  amount,
  multiplier,
  game,
  timestamp,
  className = "",
}) => {
  const resultAmount = ethers.formatEther(
    outcome === "win"
      ? amount.mul(Math.floor(multiplier * 100)).div(100)
      : amount,
  );

  return (
    <Card className={`bet-result ${className}`}>
      <div className="bet-result-header">
        <Badge
          variant={
            outcome === "win"
              ? "success"
              : outcome === "lose"
                ? "error"
                : "warning"
          }
        >
          {outcome.toUpperCase()}
        </Badge>
        <span className="bet-result-game">{game}</span>
      </div>
      <div className="bet-result-details">
        <div className="bet-result-amount">
          <span className="label">Amount</span>
          <span className="value">{ethers.formatEther(amount)} GTLM</span>
        </div>
        <div className="bet-result-multiplier">
          <span className="label">Multiplier</span>
          <span className="value">{multiplier}x</span>
        </div>
        <div className="bet-result-final">
          <span className="label">Final</span>
          <span className={`value ${outcome}`}>{resultAmount} GTLM</span>
        </div>
      </div>
      <div className="bet-result-time">{timestamp.toLocaleString()}</div>
    </Card>
  );
};
