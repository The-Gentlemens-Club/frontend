import React from 'react';
import { RewardsList } from '../../src/components/ui/RewardsList/RewardsList';
import { UserLevel } from '../../src/components/ui/UserLevel/UserLevel';
import styles from './rewards.module.scss';

const RewardsPage: React.FC = () => {
  // Mock data for rewards
  const rewardsData = [
    {
      id: '1',
      title: 'Welcome Bonus',
      description: 'Get 100 points for joining',
      points: 100,
      image: '/images/rewards/welcome.png',
      progress: 1,
      maxProgress: 1,
      isAvailable: true,
    },
    {
      id: '2',
      title: 'First Win',
      description: 'Earn 50 points for your first win',
      points: 50,
      image: '/images/rewards/first-win.png',
      progress: 0,
      maxProgress: 1,
      isAvailable: false,
    },
    {
      id: '3',
      title: 'Loyal Player',
      description: 'Play 10 games to earn 200 points',
      points: 200,
      image: '/images/rewards/loyal.png',
      progress: 3,
      maxProgress: 10,
      isAvailable: false,
    },
  ];

  const userLevelData = {
    level: 5,
    experience: 1250,
    nextLevelExperience: 2000,
    rank: 'Silver',
  };

  const handleClaimReward = (rewardId: string) => {
    // TODO: Implement reward claiming logic
    console.log('Claiming reward:', rewardId);
  };

  return (
    <div className={styles.rewardsPage}>
      <h1>Rewards</h1>
      <div className={styles.rewardsGrid}>
        <div>
          <RewardsList
            rewards={rewardsData}
            onClaimReward={handleClaimReward}
          />
        </div>
        <div>
          <UserLevel {...userLevelData} />
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
