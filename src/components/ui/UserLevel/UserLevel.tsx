import React from 'react';
import { Card } from '../Card/Card';
import { Progress } from '../Progress/Progress';
import { Badge } from '../Badge/Badge';
import styles from './UserLevel.module.scss';

interface UserLevelProps {
  level: number;
  experience: number;
  nextLevelExperience: number;
  rank: string;
  className?: string;
}

export const UserLevel: React.FC<UserLevelProps> = ({
  level,
  experience,
  nextLevelExperience,
  rank,
  className = '',
}) => {
  const progress = (experience / nextLevelExperience) * 100;

  return (
    <Card className={`user-level ${className}`}>
      <div className="user-level-header">
        <div className="user-level-info">
          <h3 className="user-level-title">Level {level}</h3>
          <Badge variant="success">{rank}</Badge>
        </div>
        <span className="user-level-exp">{experience}/{nextLevelExperience} XP</span>
      </div>
      <Progress
        value={progress}
        className="user-level-progress"
        color="success"
      />
      <div className="user-level-benefits">
        <h4>Level Benefits:</h4>
        <ul>
          <li>✨ Increased max bet limit</li>
          <li>💎 Special game access</li>
          <li>🎁 Better rewards</li>
        </ul>
      </div>
    </Card>
  );
};