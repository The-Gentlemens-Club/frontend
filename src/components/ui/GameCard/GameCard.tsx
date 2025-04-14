import React from "react";
import { Badge } from "../Badge/Badge";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import type { Game } from "../../../types/global";
import { ethers } from "ethers";
import styles from "./GameCard.module.scss";

interface GameCardProps {
  game: Game;
  onPlay: (gameId: string) => void;
  className?: string;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onPlay,
  className = "",
}) => {
  return (
    <Card className={`game-card ${className}`} hoverable>
      <div className="game-card-image-container">
        <img
          src={game.thumbnailUrl}
          alt={game.name}
          className="game-card-image"
        />
        <div className="game-card-badges">
          <Badge variant={game.isLive ? "success" : "error"}>
            {game.isLive ? "Live" : "Offline"}
          </Badge>
          <Badge variant="default">{game.players} Players</Badge>
        </div>
      </div>

      <div className="game-card-content">
        <h3 className="game-card-title">{game.name}</h3>

        <div className="game-card-info">
          <div className="game-card-bet-info">
            <span>Min Bet: {ethers.formatEther(game.minBet)} GTLM</span>
            <span>Max Bet: {ethers.formatEther(game.maxBet)} GTLM</span>
          </div>
          <Badge variant="warning" className="capitalize">
            {game.type}
          </Badge>
        </div>

        <Button
          onClick={() => onPlay(game.id)}
          variant="primary"
          className="game-card-button"
          disabled={!game.isLive}
        >
          {game.isLive ? "Play Now" : "Coming Soon"}
        </Button>
      </div>
    </Card>
  );
};
