import React from "react";
import { Card } from "../Card/Card";
import styles from "./GameRules.module.scss";

interface Rule {
  title: string;
  description: string;
}

interface GameRulesProps {
  gameTitle: string;
  rules: Rule[];
  payoutInfo?: string;
}

export const GameRules: React.FC<GameRulesProps> = ({
  gameTitle,
  rules,
  payoutInfo,
}) => {
  return (
    <Card className="game-rules">
      <h2 className="game-rules__title">{gameTitle} Rules</h2>
      <div className="game-rules__content">
        {rules.map((rule, index) => (
          <div key={index} className="game-rules__rule">
            <h3 className="game-rules__rule-title">{rule.title}</h3>
            <p className="game-rules__rule-description">{rule.description}</p>
          </div>
        ))}
      </div>
      {payoutInfo && (
        <div className="game-rules__payout">
          <h3 className="game-rules__payout-title">Payout Information</h3>
          <p className="game-rules__payout-info">{payoutInfo}</p>
        </div>
      )}
    </Card>
  );
};
