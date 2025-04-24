import React from 'react';
import { GameCard } from '../../src/components/ui/GameCard/GameCard';
import type { Game } from '../../src/types/global';
import BigNumber from 'bignumber.js';
import { useRouter } from 'next/router';

const GamesPage: React.FC = () => {
  const router = useRouter();
  const games: Game[] = [
    {
      id: '1',
      name: 'Poker',
      type: 'poker',
      minBet: new BigNumber(100),
      maxBet: new BigNumber(10000),
      isLive: true,
      players: 6,
      thumbnailUrl: '/games/poker.jpg'
    },
    // Add more games here
  ];

  const handlePlayGame = (gameId: string) => {
    router.push(`/games/${gameId}`);
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Available Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <GameCard 
            key={game.id} 
            game={game} 
            onPlay={handlePlayGame}
          />
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
