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

  // Mock data for player profile
  const playerProfileData = {
    username: 'Player1',
    avatarUrl: '/avatars/default.png',
    level: 5,
    xp: 2500,
    totalWins: 42,
    totalBets: 100,
    joinedDate: new Date('2023-01-01'),
  };

  // Mock data for achievements
  const achievementsData = [
    {
      id: '1',
      title: 'First Win',
      description: 'Win your first game',
      image: '/achievements/first-win.png',
      progress: 1,
      maxProgress: 1,
      isCompleted: true,
      reward: '100 XP',
    },
    {
      id: '2',
      title: 'Poker Master',
      description: 'Win 10 poker games',
      image: '/achievements/poker-master.png',
      progress: 7,
      maxProgress: 10,
      isCompleted: false,
      reward: '500 XP',
    },
    {
      id: '3',
      title: 'High Roller',
      description: 'Place a bet of 1 ETH or more',
      image: '/achievements/high-roller.png',
      progress: 0,
      maxProgress: 1,
      isCompleted: false,
      reward: '1000 XP',
    },
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <PlayerProfile {...playerProfileData} />
        </div>
        <div className="lg:col-span-2">
          <GameHistory history={[]} />
          <div className="mt-6">
            <Achievements achievements={achievementsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
