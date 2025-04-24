import React from 'react';
import { GameCard } from '../src/components/ui/GameCard/GameCard';
import { SimpleStatsCard } from '../src/components/ui/SimpleStatsCard/SimpleStatsCard';
import type { Game } from '../src/types/global';

const HomePage: React.FC = () => {
  return (
    <div className="py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome to Gentlemen&apos;s Club</h1>
        <p className="text-text-secondary text-lg">Your premium blockchain gaming destination</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <SimpleStatsCard title="Total Players" value="10,000+" />
        <SimpleStatsCard title="Total Games" value="1M+" />
        <SimpleStatsCard title="Prize Pool" value="$500,000" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured games will be populated here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;