
import BigNumber from 'bignumber.js';

export interface UserProfile {
  address: string;
  username?: string;
  balance: {
    gtlm: BigNumber;
    other: Record<string, BigNumber>;
  };
  avatar?: string;
  createdAt: Date;
}

export interface Game {
  id: string;
  name: string;
  type: 'slots' | 'poker' | 'blackjack' | 'roulette';
  minBet: BigNumber;
  maxBet: BigNumber;
  isLive: boolean;
  players: number;
  thumbnailUrl: string;
}

export interface Transaction {
  hash: string;
  type: 'deposit' | 'withdraw' | 'bet' | 'win';
  amount: BigNumber;
  token: string;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
}
