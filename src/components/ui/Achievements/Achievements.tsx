import React from 'react';
import { Card } from '../Card/Card';
import { AchievementCard } from '../AchievementCard/AchievementCard';
import styles from './Achievements.module.scss';

interface Achievement {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  maxProgress: number;
  isCompleted: boolean;
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
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
            image={achievement.image}
            progress={achievement.progress}
            maxProgress={achievement.maxProgress}
            isCompleted={achievement.isCompleted}
            reward={achievement.reward}
          />
        ))}
      </div>
    </Card>
  );
};