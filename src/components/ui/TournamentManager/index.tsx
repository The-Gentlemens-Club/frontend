import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { LoadingSpinner } from '../LoadingSpinner';
import { useRouter } from 'next/router';

interface Tournament {
  id: string;
  name: string;
  gameId: string;
  entryFee: number;
  prizePool: number;
  startTime: Date;
  maxPlayers: number;
  status: 'pending' | 'active' | 'completed';
}

export const TournamentManager = () => {
  const { address } = useAccount();
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [newTournament, setNewTournament] = useState({
    name: '',
    gameId: '',
    entryFee: 0,
    maxPlayers: 0,
    startTime: '',
  });

  const handleCreateTournament = async () => {
    if (!address) return;

    setIsCreating(true);
    try {
      // TODO: Replace with actual contract interaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const tournament: Tournament = {
        id: Math.random().toString(36).substr(2, 9),
        name: newTournament.name,
        gameId: newTournament.gameId,
        entryFee: newTournament.entryFee,
        prizePool: newTournament.entryFee * newTournament.maxPlayers,
        startTime: new Date(newTournament.startTime),
        maxPlayers: newTournament.maxPlayers,
        status: 'pending',
      };

      setTournaments([...tournaments, tournament]);
      setShowCreateModal(false);
      setNewTournament({
        name: '',
        gameId: '',
        entryFee: 0,
        maxPlayers: 0,
        startTime: '',
      });
    } catch (error) {
      console.error('Failed to create tournament:', error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleJoinTournament = async (tournamentId: string) => {
    if (!address) return;

    try {
      // TODO: Replace with actual contract interaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      router.push(`/tournaments/${tournamentId}`);
    } catch (error) {
      console.error('Failed to join tournament:', error);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Tournaments</h2>
        <Button onClick={() => setShowCreateModal(true)}>
          Create Tournament
        </Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-gray-800 p-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {tournament.name}
              </h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-300">
                  Entry Fee: {tournament.entryFee} ETH
                </p>
                <p className="text-gray-300">
                  Prize Pool: {tournament.prizePool} ETH
                </p>
                <p className="text-gray-300">
                  Start Time: {tournament.startTime.toLocaleString()}
                </p>
                <p className="text-gray-300">
                  Status: {tournament.status}
                </p>
              </div>
              <Button
                onClick={() => handleJoinTournament(tournament.id)}
                disabled={tournament.status !== 'pending'}
                className="w-full"
              >
                {tournament.status === 'pending' ? 'Join' : 'View'}
              </Button>
            </div>
          ))}
        </div>
      )}

      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create Tournament"
      >
        <div className="space-y-4">
          <Input
            label="Tournament Name"
            value={newTournament.name}
            onChange={(e) =>
              setNewTournament({ ...newTournament, name: e.target.value })
            }
          />
          <Input
            label="Game ID"
            value={newTournament.gameId}
            onChange={(e) =>
              setNewTournament({ ...newTournament, gameId: e.target.value })
            }
          />
          <Input
            label="Entry Fee (ETH)"
            type="number"
            value={newTournament.entryFee}
            onChange={(e) =>
              setNewTournament({
                ...newTournament,
                entryFee: parseFloat(e.target.value),
              })
            }
          />
          <Input
            label="Max Players"
            type="number"
            value={newTournament.maxPlayers}
            onChange={(e) =>
              setNewTournament({
                ...newTournament,
                maxPlayers: parseInt(e.target.value),
              })
            }
          />
          <Input
            label="Start Time"
            type="datetime-local"
            value={newTournament.startTime}
            onChange={(e) =>
              setNewTournament({
                ...newTournament,
                startTime: e.target.value,
              })
            }
          />
          <Button
            onClick={handleCreateTournament}
            disabled={isCreating}
            className="w-full"
          >
            {isCreating ? 'Creating...' : 'Create Tournament'}
          </Button>
        </div>
      </Modal>
    </div>
  );
}; 