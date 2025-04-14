
import React from 'react';
import { useAccount, useBalance } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Header: React.FC = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address,
    token: process.env.NEXT_PUBLIC_GTLM_TOKEN_ADDRESS,
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-paper/90 backdrop-blur-sm border-b border-background-elevated">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-text-primary">Gentlemen's Club</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="/games" className="text-text-secondary hover:text-text-primary transition-colors">Games</a>
            <a href="/tournaments" className="text-text-secondary hover:text-text-primary transition-colors">Tournaments</a>
            <a href="/rewards" className="text-text-secondary hover:text-text-primary transition-colors">Rewards</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {balance && (
            <div className="text-text-primary">
              <span className="text-sm text-text-secondary">GTLM:</span>
              <span className="ml-2">{balance.formatted}</span>
            </div>
          )}
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};
