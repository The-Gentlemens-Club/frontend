import React from "react";
import { Card } from "../Card/Card";
import { Avatar } from "../Avatar/Avatar";
import { UserLevel } from "../UserLevel/UserLevel";
import { WalletBalance } from "../WalletBalance/WalletBalance";
import styles from "./PlayerProfile.module.scss";

interface PlayerProfileProps {
  username: string;
  avatarUrl: string;
  level: number;
  xp: number;
  totalWins: number;
  totalBets: number;
  joinedDate: Date;
  nextLevelExperience: number;
  rank: string;
  walletBalance: string;
  walletSymbol: string;
  walletIcon: string;
}

export const PlayerProfile: React.FC<PlayerProfileProps> = ({
  username,
  avatarUrl,
  level,
  xp,
  totalWins,
  totalBets,
  joinedDate,
  nextLevelExperience,
  rank,
  walletBalance,
  walletSymbol,
  walletIcon,
}) => {
  return (
    <Card className="player-profile">
      <div className="player-profile__header">
        <Avatar src={avatarUrl} size="large" alt={username} />
        <div className="player-profile__info">
          <h2 className="player-profile__username">{username}</h2>
          <UserLevel 
            level={level} 
            experience={xp} 
            nextLevelExperience={nextLevelExperience}
            rank={rank}
          />
        </div>
      </div>
      <div className="player-profile__stats">
        <div className="player-profile__stat">
          <span className="player-profile__stat-label">Total Wins</span>
          <span className="player-profile__stat-value">{totalWins}</span>
        </div>
        <div className="player-profile__stat">
          <span className="player-profile__stat-label">Total Bets</span>
          <span className="player-profile__stat-value">{totalBets}</span>
        </div>
        <div className="player-profile__stat">
          <span className="player-profile__stat-label">Win Rate</span>
          <span className="player-profile__stat-value">
            {((totalWins / totalBets) * 100).toFixed(1)}%
          </span>
        </div>
      </div>
      <WalletBalance 
        balance={walletBalance}
        symbol={walletSymbol}
        icon={walletIcon}
      />
      <div className="player-profile__footer">
        <span className="player-profile__joined">
          Joined {joinedDate.toLocaleDateString()}
        </span>
      </div>
    </Card>
  );
};
