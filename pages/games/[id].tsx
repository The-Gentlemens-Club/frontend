
import React from 'react';
import { useRouter } from 'next/router';
import { GameSettings } from '../../src/components/ui/GameSettings/GameSettings';
import { GameChat } from '../../src/components/ui/GameChat/GameChat';
import { GameStats } from '../../src/components/ui/GameStats/GameStats';

const GamePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Game interface will be rendered here */}
          <div className="bg-background-paper rounded-lg p-4 min-h-[600px]">
            Game {id}
          </div>
        </div>
        <div className="space-y-6">
          <GameSettings />
          <GameStats />
          <GameChat />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
