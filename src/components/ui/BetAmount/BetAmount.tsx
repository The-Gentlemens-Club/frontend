import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./BetAmount.module.scss";
import BigNumber from "bignumber.js";

interface BetAmountProps {
  value: string;
  onChange: (value: string) => void;
  minBet: BigNumber;
  maxBet: BigNumber;
  className?: string;
}

export const BetAmount: React.FC<BetAmountProps> = ({
  value,
  onChange,
  minBet,
  maxBet,
  className = "",
}) => {
  const handleQuickAmount = (multiplier: number) => {
    const newValue = BigNumber(minBet).multipliedBy(multiplier).toString();
    if (BigNumber(newValue).lte(maxBet)) {
      onChange(newValue);
    }
  };

  return (
    <div className={`bet-amount ${className}`}>
      <Input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        label="Bet Amount (GTLM)"
      />
      <div className="bet-amount-quick">
        <Button variant="secondary" onClick={() => handleQuickAmount(2)}>
          2x Min
        </Button>
        <Button variant="secondary" onClick={() => handleQuickAmount(5)}>
          5x Min
        </Button>
        <Button variant="secondary" onClick={() => handleQuickAmount(10)}>
          10x Min
        </Button>
      </div>
    </div>
  );
};
