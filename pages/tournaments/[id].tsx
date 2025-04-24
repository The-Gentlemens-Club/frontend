import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { Layout } from '../../src/components/layout/Layout';
import { GameLobby } from '../../src/components/ui/GameLobby';
import { TournamentManager } from '../../src/components/ui/TournamentManager';
import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../../src/components/ui/LoadingSpinner';

interface Tournament {
  id: string;
  name: string;
  gameId: string;
  entryFee: number;
  prizePool: number;
  startTime: Date;
  maxPlayers: number;
  status: 'pending' | 'active' | 'completed';
  players: string[];
}

export default function TournamentDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { address } = useAccount();
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTournament = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        setTournament({
          id: id as string,
          name: 'Weekly Poker Tournament',
          gameId: 'poker-1',
          entryFee: 0.1,
          prizePool: 1.0,
          startTime: new Date(Date.now() + 3600000), // 1 hour from now
          maxPlayers: 10,
          status: 'pending',
          players: ['0x123...', '0x456...', '0x789...'],
        });
      } catch (error) {
        console.error('Failed to fetch tournament:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTournament();
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

  if (!tournament) {
    return (
      <Layout>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Tournament not found</h1>
          <p className="text-gray-400">The tournament you&apos;re looking for doesn&apos;t exist or has been removed.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">{tournament.name}</h1>
          <div className="text-gray-400">
            Status: <span className="text-white">{tournament.status}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Tournament Info</h2>
            <div className="space-y-2">
              <p className="text-gray-300">Entry Fee: {tournament.entryFee} ETH</p>
              <p className="text-gray-300">Prize Pool: {tournament.prizePool} ETH</p>
              <p className="text-gray-300">Start Time: {tournament.startTime.toLocaleString()}</p>
              <p className="text-gray-300">Players: {tournament.players.length}/{tournament.maxPlayers}</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Prize Distribution</h2>
            <div className="space-y-2">
              <p className="text-gray-300">1st Place: 50% of prize pool</p>
              <p className="text-gray-300">2nd Place: 30% of prize pool</p>
              <p className="text-gray-300">3rd Place: 20% of prize pool</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Rules</h2>
            <div className="space-y-2">
              <p className="text-gray-300">• No cheating or collusion</p>
              <p className="text-gray-300">• Players must be present at start time</p>
              <p className="text-gray-300">• Disconnections may result in elimination</p>
              <p className="text-gray-300">• Tournament admin decisions are final</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Registered Players</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            {tournament.players.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tournament.players.map((player, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">{player}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No players registered yet</p>
            )}
          </div>
        </div>

        {tournament.status === 'pending' && (
          <GameLobby
            gameId={tournament.gameId}
            gameName={tournament.name}
            minPlayers={2}
            maxPlayers={tournament.maxPlayers}
            entryFee={tournament.entryFee}
            prizePool={tournament.prizePool}
          />
        )}
      </div>
    </Layout>
  );
} 