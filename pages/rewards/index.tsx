import React from 'react';
import { RewardsList } from '../../src/components/ui/RewardsList/RewardsList';
import { UserLevel } from '../../src/components/ui/UserLevel/UserLevel';

const RewardsPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Rewards & Achievements</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RewardsList />
        </div>
        <div>
          <UserLevel />
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
