import { Layout } from '../../src/components/layout/Layout';
import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../../src/components/ui/LoadingSpinner';
import { Table } from '../../src/components/ui/Table';
import { Tabs } from '../../src/components/ui/Tabs';
import { Pagination } from '../../src/components/ui/Pagination';

interface Player {
  rank: number;
  address: string;
  totalWins: number;
  totalLosses: number;
  winRate: number;
  totalWinnings: number;
  gamesPlayed: number;
}

export default function Leaderboard() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchPlayers = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockPlayers: Player[] = Array.from({ length: 50 }, (_, i) => ({
          rank: i + 1,
          address: `0x${Math.random().toString(16).substr(2, 8)}...`,
          totalWins: Math.floor(Math.random() * 100),
          totalLosses: Math.floor(Math.random() * 50),
          winRate: Math.random() * 100,
          totalWinnings: Math.random() * 10,
          gamesPlayed: Math.floor(Math.random() * 150),
        }));

        setPlayers(mockPlayers);
      } catch (error) {
        console.error('Failed to fetch players:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const filteredPlayers = players.filter(player => {
    if (activeTab === 'all') return true;
    if (activeTab === 'winners') return player.winRate > 50;
    if (activeTab === 'active') return player.gamesPlayed > 50;
    return true;
  });

  const paginatedPlayers = filteredPlayers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = [
    { header: 'Rank', accessor: 'rank' as keyof Player },
    { header: 'Player', accessor: 'address' as keyof Player },
    { header: 'Wins', accessor: 'totalWins' as keyof Player },
    { header: 'Losses', accessor: 'totalLosses' as keyof Player },
    { 
      header: 'Win Rate', 
      accessor: 'winRate' as keyof Player,
      render: (value: number) => `${value.toFixed(2)}%`
    },
    { 
      header: 'Total Winnings', 
      accessor: 'totalWinnings' as keyof Player,
      render: (value: number) => `${value.toFixed(2)} ETH`
    },
    { header: 'Games Played', accessor: 'gamesPlayed' as keyof Player },
  ];

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Leaderboard</h1>

        <div className="mb-8">
          <Tabs
            tabs={[
              { id: 'all', label: 'All Players' },
              { id: 'winners', label: 'Top Winners' },
              { id: 'active', label: 'Most Active' },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <Table
            columns={columns}
            data={paginatedPlayers}
            className="w-full"
          />
        </div>

        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredPlayers.length / itemsPerPage)}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </Layout>
  );
} 