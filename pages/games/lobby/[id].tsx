import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { Layout } from '../../../src/components/layout/Layout';
import { GameLobby } from '../../../src/components/ui/GameLobby';
import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../../../src/components/ui/LoadingSpinner';

interface Game {
  id: string;
  name: string;
  description: string;
  minPlayers: number;
  maxPlayers: number;
  entryFee: number;
  prizePool: number;
  status: 'waiting' | 'active' | 'completed';
  players: string[];
}

export default function GameLobbyPage() {
  const router = useRouter();
  const { id } = router.query;
  const { address } = useAccount();
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        setGame({
          id: id as string,
          name: 'Texas Hold&apos;em Poker',
          description: 'Classic Texas Hold&apos;em poker game with tournament rules',
          minPlayers: 2,
          maxPlayers: 10,
          entryFee: 0.1,
          prizePool: 1.0,
          status: 'waiting',
          players: ['0x123...', '0x456...', '0x789...'],
        });
      } catch (error) {
        console.error('Failed to fetch game:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  if (!game) {
    return (
      <Layout>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Game not found</h1>
          <p className="text-gray-400">The game you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">{game.name}</h1>
          <div className="text-gray-400">
            Status: <span className="text-white">{game.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Game Info</h2>
            <div className="space-y-2">
              <p className="text-gray-300">Entry Fee: {game.entryFee} ETH</p>
              <p className="text-gray-300">Prize Pool: {game.prizePool} ETH</p>
              <p className="text-gray-300">Players: {game.players.length}/{game.maxPlayers}</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Game Rules</h2>
            <div className="space-y-2">
              <p className="text-gray-300">• Texas Hold&apos;em rules apply</p>
              <p className="text-gray-300">• Blinds increase every 10 minutes</p>
              <p className="text-gray-300">• All-in protection enabled</p>
              <p className="text-gray-300">• Time bank available</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Description</h2>
            <p className="text-gray-300">{game.description}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Players</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            {game.players.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {game.players.map((player, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">{player}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No players joined yet</p>
            )}
          </div>
        </div>

        {game.status === 'waiting' && (
          <GameLobby
            gameId={game.id}
            gameName={game.name}
            minPlayers={game.minPlayers}
            maxPlayers={game.maxPlayers}
            entryFee={game.entryFee}
            prizePool={game.prizePool}
          />
        )}
      </div>
    </Layout>
  );
} 