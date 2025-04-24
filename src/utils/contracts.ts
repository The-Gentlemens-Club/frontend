import { ethers } from 'ethers';
import { useAccount, useContractRead, useContractWrite } from 'wagmi';
import { toast } from 'react-hot-toast';

// Contract ABIs
import { gameABI } from '../abis/game';
import { tokenABI } from '../abis/token';

// Contract addresses
const GAME_CONTRACT = process.env.NEXT_PUBLIC_GAME_CONTRACT || '';
const TOKEN_CONTRACT = process.env.NEXT_PUBLIC_TOKEN_CONTRACT || '';

export const useGameContract = () => {
  const { address } = useAccount();

  const { data: gameState, isLoading: isLoadingGameState } = useContractRead({
    address: GAME_CONTRACT as `0x${string}`,
    abi: gameABI,
    functionName: 'getGameState',
    args: [address],
    query: {
      enabled: !!address
    }
  });

  const { write: startGame, isLoading: isStartingGame } = useContractWrite({
    address: GAME_CONTRACT as `0x${string}`,
    abi: gameABI,
    functionName: 'startGame',
    onSuccess: () => {
      toast.success('Game started successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to start game: ${error.message}`);
    },
  });

  const { write: placeBet, isLoading: isPlacingBet } = useContractWrite({
    address: GAME_CONTRACT as `0x${string}`,
    abi: gameABI,
    functionName: 'placeBet',
    onSuccess: () => {
      toast.success('Bet placed successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to place bet: ${error.message}`);
    },
  });

  return {
    gameState,
    isLoadingGameState,
    startGame,
    isStartingGame,
    placeBet,
    isPlacingBet,
  };
};

export const useTokenContract = () => {
  const { address } = useAccount();

  const { data: balance, isLoading: isLoadingBalance } = useContractRead({
    address: TOKEN_CONTRACT as `0x${string}`,
    abi: tokenABI,
    functionName: 'balanceOf',
    args: [address],
    query: {
      enabled: !!address
    }
  });

  const { write: approve, isLoading: isApproving } = useContractWrite({
    address: TOKEN_CONTRACT as `0x${string}`,
    abi: tokenABI,
    functionName: 'approve',
    onSuccess: () => {
      toast.success('Token approval successful!');
    },
    onError: (error) => {
      toast.error(`Failed to approve tokens: ${error.message}`);
    },
  });

  return {
    balance,
    isLoadingBalance,
    approve,
    isApproving,
  };
}; 