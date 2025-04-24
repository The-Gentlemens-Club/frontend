import React from 'react';
import { GameCard } from '../../src/components/ui/GameCard/GameCard';
import { Game } from '../../src/types/global';
import styles from './games.module.scss';
import { useRouter } from 'next/router';

const mockGames: Game[] = [
  {
    id: '1',
    name: 'Poker',
    type: 'poker',
    minBet: BigInt(100),
    maxBet: BigInt(10000),
    isLive: true,
    players: 6,
    thumbnailUrl: '/games/poker.jpg',
  },
  {
    id: '2',
    name: 'Slots',
    type: 'slots',
    minBet: BigInt(10),
    maxBet: BigInt(1000),
    isLive: true,
    players: 12,
    thumbnailUrl: '/games/slots.jpg',
  },
  {
    id: '3',
    name: 'Blackjack',
    type: 'blackjack',
    minBet: BigInt(50),
    maxBet: BigInt(5000),
    isLive: true,
    players: 4,
    thumbnailUrl: '/games/blackjack.jpg',
  },
  {
    id: '4',
    name: 'Roulette',
    type: 'roulette',
    minBet: BigInt(25),
    maxBet: BigInt(2500),
    isLive: true,
    players: 8,
    thumbnailUrl: '/games/roulette.jpg',
  },
];

const GamesPage: React.FC = () => {
  const router = useRouter();

  const handlePlayGame = (gameId: string) => {
    router.push(`/games/${gameId}`);
  };

  return (
    <div className={styles.gamesPage}>
      <h1>Games</h1>
      <div className={styles.gamesGrid}>
        {mockGames.map((game) => (
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
