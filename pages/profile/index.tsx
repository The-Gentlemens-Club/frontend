import React from 'react';
import { useAccount } from 'wagmi';
import { PlayerProfile } from '../../src/components/ui/PlayerProfile/PlayerProfile';
import { GameHistory } from '../../src/components/ui/GameHistory/GameHistory';
import { Achievements } from '../../src/components/ui/Achievements/Achievements';

const ProfilePage: React.FC = () => {
  const { address } = useAccount();

  if (!address) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-2xl">Please connect your wallet to view your profile</h2>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <PlayerProfile />
        </div>
        <div className="lg:col-span-2">
          <GameHistory history={[]} />
          <div className="mt-6">
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
