import React from "react";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { ethers } from "ethers";
import styles from "./TournamentCard.module.scss";

interface TournamentCardProps {
  id: string;
  title: string;
  game: string;
  startTime: Date;
  entryFee: string;
  prizePool: string;
  playersJoined: number;
  maxPlayers: number;
  status: "upcoming" | "live" | "completed";
  onJoin: (id: string) => void;
}

export const TournamentCard: React.FC<TournamentCardProps> = ({
  id,
  title,
  game,
  startTime,
  entryFee,
  prizePool,
  playersJoined,
  maxPlayers,
  status,
  onJoin,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case "live":
        return "success";
      case "upcoming":
        return "warning";
      case "completed":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Card className="tournament-card">
      <div className="tournament-card__header">
        <h3 className="tournament-card__title">{title}</h3>
        <Badge variant={getStatusColor()} className="tournament-card__status">
          {status}
        </Badge>
      </div>

      <div className="tournament-card__info">
        <div className="tournament-card__detail">
          <span className="tournament-card__label">Game:</span>
          <span className="tournament-card__value">{game}</span>
        </div>
        <div className="tournament-card__detail">
          <span className="tournament-card__label">Start Time:</span>
          <span className="tournament-card__value">
            {startTime.toLocaleString()}
          </span>
        </div>
        <div className="tournament-card__detail">
          <span className="tournament-card__label">Entry Fee:</span>
          <span className="tournament-card__value">
            {ethers.formatEther(entryFee)} GTLM
          </span>
        </div>
        <div className="tournament-card__detail">
          <span className="tournament-card__label">Prize Pool:</span>
          <span className="tournament-card__value tournament-card__prize">
            {ethers.formatEther(prizePool)} GTLM
          </span>
        </div>
      </div>

      <div className="tournament-card__footer">
        <div className="tournament-card__players">
          <span className="tournament-card__players-count">
            {playersJoined}/{maxPlayers}
          </span>
          <span className="tournament-card__players-label">Players Joined</span>
        </div>
        <Button
          onClick={() => onJoin(id)}
          variant="primary"
          disabled={status !== "upcoming" || playersJoined >= maxPlayers}
        >
          {status === "upcoming" ? "Join Tournament" : "View Details"}
        </Button>
      </div>
    </Card>
  );
};
