import React from "react";
import { Badge } from "../Badge/Badge";
import { Card } from "../Card/Card";
import { ethers } from "ethers";
import styles from "./BetResult.module.scss";

interface BetResultProps {
  outcome: "win" | "lose" | "draw";
  amount: bigint;
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
      ? amount * BigInt(Math.floor(multiplier * 100)) / BigInt(100)
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
        {outcome === "win" && (
          <div className="bet-result-multiplier">
            <span className="label">Multiplier</span>
            <span className="value">{multiplier}x</span>
          </div>
        )}
        <div className="bet-result-total">
          <span className="label">Total</span>
          <span className="value">{resultAmount} GTLM</span>
        </div>
      </div>
      <div className="bet-result-footer">
        <span className="bet-result-timestamp">
          {timestamp.toLocaleString()}
        </span>
      </div>
    </Card>
  );
};


