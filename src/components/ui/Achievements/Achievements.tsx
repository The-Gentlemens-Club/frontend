import React from 'react';
import Image from 'next/image';
import styles from './Achievements.module.scss';
import { AchievementCard } from '../AchievementCard/AchievementCard';

interface Achievement {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
}

interface AchievementsProps {
  achievements: Achievement[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.grid}>
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            description={achievement.description}
            image={achievement.image}
            progress={achievement.progress}
            maxProgress={achievement.maxProgress}
            isUnlocked={achievement.isUnlocked}
          />
        ))}
      </div>
    </div>
  );
};