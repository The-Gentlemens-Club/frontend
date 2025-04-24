import React from 'react';
import Image from 'next/image';
import { Card } from '../Card/Card';
import { Progress } from '../Progress/Progress';
import styles from './AchievementCard.module.scss';

interface AchievementCardProps {
  title: string;
  description: string;
  image: string;
  progress: number;
  maxProgress: number;
  reward: string;
  isCompleted: boolean;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  image,
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
          <Image
            src={image}
            alt={title}
            width={64}
            height={64}
            className={styles.image}
          />
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
        <Progress
          value={progressPercentage}
          variant={isCompleted ? 'success' : 'primary'}
          size="sm"
        />
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