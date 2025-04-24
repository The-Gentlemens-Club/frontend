import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { LoadingSpinner } from '../LoadingSpinner';
import { Button } from '../Button/Button';
import { GameClock } from '../GameClock/GameClock';
import { GameStats } from '../GameStats/GameStats';
import { GameChat } from '../GameChat/GameChat';

interface GameLobbyProps {
  gameId: string;
  gameName: string;
  minPlayers: number;
  maxPlayers: number;
  entryFee: number;
  prizePool: number;
}

export const GameLobby = ({
  gameId,
  gameName,
  minPlayers,
  maxPlayers,
  entryFee,
  prizePool,
}: GameLobbyProps) => {
  const { address } = useAccount();
  const router = useRouter();
  const [players, setPlayers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isJoining, setIsJoining] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    // Simulate fetching players
    const fetchPlayers = async () => {
      setIsLoading(true);
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPlayers(['0x123...', '0x456...', '0x789...']);
      setIsLoading(false);
    };

    fetchPlayers();
  }, [gameId]);

  const handleJoinGame = async () => {
    if (!address) return;
    
    setIsJoining(true);
    try {
      // TODO: Replace with actual contract interaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      router.push(`/games/${gameId}/play`);
    } catch (error) {
      console.error('Failed to join game:', error);
    } finally {
      setIsJoining(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white mb-4">{gameName}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Game Info</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Entry Fee: {entryFee} ETH</p>
                <p className="text-gray-300">Prize Pool: {prizePool} ETH</p>
                <p className="text-gray-300">Players: {players.length}/{maxPlayers}</p>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Game Rules</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Min Players: {minPlayers}</p>
                <p className="text-gray-300">Max Players: {maxPlayers}</p>
                <p className="text-gray-300">Game Type: Tournament</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Players</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              {players.length > 0 ? (
                <ul className="space-y-2">
                  {players.map((player, index) => (
                    <li key={index} className="text-gray-300">
                      {player}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No players joined yet</p>
              )}
            </div>
          </div>

          <Button
            onClick={handleJoinGame}
            disabled={isJoining || players.length >= maxPlayers}
            className="w-full"
          >
            {isJoining ? 'Joining...' : 'Join Game'}
          </Button>
        </div>

        <div className="w-full md:w-80">
          <GameChat gameId={gameId} />
          <GameClock countdown={countdown} />
          <GameStats gameId={gameId} />
        </div>
      </div>
    </div>
  );
}; 