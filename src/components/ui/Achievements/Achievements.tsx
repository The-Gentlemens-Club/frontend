import React from 'react';
import { Card } from '../Card/Card';
import { Badge } from '../Badge/Badge';
import { Progress } from '../Progress/Progress';
import styles from './Achievements.module.scss';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
  reward: string;
}

interface AchievementsProps {
  achievements: Achievement[];
  className?: string;
}

export const Achievements: React.FC<AchievementsProps> = ({
  achievements,
  className = '',
}) => {
  return (
    <Card className={`${styles.achievements} ${className}`}>
      <h3 className={styles.achievementsTitle}>Achievements</h3>
      <div className={styles.achievementsGrid}>
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`${styles.achievementItem} ${
              achievement.completed ? styles.completed : ''
            }`}
          >
            <div className={styles.achievementIcon}>
              <img src={achievement.icon} alt={achievement.title} />
              {achievement.completed && (
                <div className={styles.achievementCompletedBadge}>
                  <Badge variant="success">Complete</Badge>
                </div>
              )}
            </div>
            <div className={styles.achievementInfo}>
              <h4 className={styles.achievementTitle}>{achievement.title}</h4>
              <p className={styles.achievementDescription}>{achievement.description}</p>
              <Progress
                value={(achievement.progress / achievement.maxProgress) * 100}
                className={styles.achievementProgress}
                color={achievement.completed ? 'success' : 'primary'}
              />
              <div className={styles.achievementStats}>
                <span className={styles.achievementProgressText}>
                  {achievement.progress}/{achievement.maxProgress}
                </span>
                <span className={styles.achievementReward}>{achievement.reward}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};