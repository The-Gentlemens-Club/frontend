import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';
import styles from './LeaderboardRow.module.scss';
import { ethers } from 'ethers';

interface LeaderboardRowProps {
  rank: number;
  address: string;
  username?: string;
  winnings: string;
  gamesPlayed: number;
  className?: string;
}

export const LeaderboardRow: React.FC<LeaderboardRowProps> = ({
  rank,
  address,
  username,
  winnings,
  gamesPlayed,
  className = '',
}) => {
  return (
    <div className={`leaderboard-row ${className}`}>
      <div className="leaderboard-rank">#{rank}</div>
      <div className="leaderboard-user">
        <Avatar 
          src={`https://api.dicebear.com/7.x/identicon/svg?seed=${address}`}
          alt={username || address}
          size="small" 
        />
        <span className="leaderboard-username">{username || address.slice(0, 6) + '...' + address.slice(-4)}</span>
      </div>
      <div className="leaderboard-stats">
        <Badge variant="success">{ethers.formatEther(winnings)} GTLM</Badge>
        <span className="leaderboard-games">{gamesPlayed} games</span>
      </div>
    </div>
  );
};
