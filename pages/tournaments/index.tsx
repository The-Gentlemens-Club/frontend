import React from 'react';
import { TournamentCard } from '../../src/components/ui/TournamentCard/TournamentCard';

const TournamentsPage: React.FC = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">Active Tournaments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tournament cards will be populated here */}
      </div>
    </div>
  );
};

export default TournamentsPage;
