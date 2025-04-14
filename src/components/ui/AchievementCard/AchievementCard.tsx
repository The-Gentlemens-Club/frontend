import React from 'react';
import { Card } from '../Card/Card';
import { Progress } from '../Progress/Progress';
import styles from './AchievementCard.module.scss';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  reward: string;
  isCompleted: boolean;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  icon,
  progress,
  maxProgress,
  reward,
  isCompleted,
}) => {
  const progressPercentage = (progress / maxProgress) * 100;

  return (
    <Card className={`achievement-card ${isCompleted ? 'achievement-card--completed' : ''}`}>
      <div className="achievement-card__header">
        <div className="achievement-card__icon">
          <img src={icon} alt={title} />
          {isCompleted && (
            <div className="achievement-card__completed-badge">
              <span>✓</span>
            </div>
          )}
        </div>
        <div className="achievement-card__info">
          <h3 className="achievement-card__title">{title}</h3>
          <p className="achievement-card__description">{description}</p>
        </div>
      </div>

      <div className="achievement-card__progress-container">
        <Progress value={progressPercentage} color={isCompleted ? 'success' : 'primary'} />
        <span className="achievement-card__progress-text">
          {progress}/{maxProgress}
        </span>
      </div>

      <div className="achievement-card__reward">
        <span className="achievement-card__reward-label">Reward:</span>
        <span className="achievement-card__reward-value">{reward}</span>
      </div>
    </Card>
  );
};