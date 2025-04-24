import { ethers } from 'ethers';
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { toast } from 'react-hot-toast';

// Contract ABIs
const TOURNAMENT_ABI = [
  'function createTournament(string name, uint256 entryFee, uint256 maxPlayers, uint256 startTime) external returns (uint256)',
  'function joinTournament(uint256 tournamentId) external payable',
  'function getTournament(uint256 tournamentId) external view returns (string, uint256, uint256, uint256, uint256, uint256, uint256)',
  'function getTournamentPlayers(uint256 tournamentId) external view returns (address[])',
  'function startTournament(uint256 tournamentId) external',
  'function endTournament(uint256 tournamentId) external',
  'function distributePrizes(uint256 tournamentId) external',
];

const GAME_ABI = [
  'function createGame(string name, uint256 entryFee, uint256 maxPlayers) external returns (uint256)',
  'function joinGame(uint256 gameId) external payable',
  'function getGame(uint256 gameId) external view returns (string, uint256, uint256, uint256, uint256, uint256)',
  'function getGamePlayers(uint256 gameId) external view returns (address[])',
  'function startGame(uint256 gameId) external',
  'function endGame(uint256 gameId) external',
  'function placeBet(uint256 gameId, uint256 amount) external',
  'function claimWinnings(uint256 gameId) external',
];

// Contract addresses (replace with actual addresses)
const TOURNAMENT_CONTRACT = '0x...';
const GAME_CONTRACT = '0x...';

export const useTournamentContract = () => {
  const { address } = useAccount();

  const createTournament = useContractWrite({
    address: TOURNAMENT_CONTRACT,
    abi: TOURNAMENT_ABI,
    functionName: 'createTournament',
    onSuccess: () => {
      toast.success('Tournament created successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to create tournament: ${error.message}`);
    },
  });

  const joinTournament = useContractWrite({
    address: TOURNAMENT_CONTRACT,
    abi: TOURNAMENT_ABI,
    functionName: 'joinTournament',
    onSuccess: () => {
      toast.success('Joined tournament successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to join tournament: ${error.message}`);
    },
  });

  const getTournament = useContractRead({
    address: TOURNAMENT_CONTRACT,
    abi: TOURNAMENT_ABI,
    functionName: 'getTournament',
  });

  const getTournamentPlayers = useContractRead({
    address: TOURNAMENT_CONTRACT,
    abi: TOURNAMENT_ABI,
    functionName: 'getTournamentPlayers',
  });

  return {
    createTournament,
    joinTournament,
    getTournament,
    getTournamentPlayers,
  };
};

export const useGameContract = () => {
  const { address } = useAccount();

  const createGame = useContractWrite({
    address: GAME_CONTRACT,
    abi: GAME_ABI,
    functionName: 'createGame',
    onSuccess: () => {
      toast.success('Game created successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to create game: ${error.message}`);
    },
  });

  const joinGame = useContractWrite({
    address: GAME_CONTRACT,
    abi: GAME_ABI,
    functionName: 'joinGame',
    onSuccess: () => {
      toast.success('Joined game successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to join game: ${error.message}`);
    },
  });

  const placeBet = useContractWrite({
    address: GAME_CONTRACT,
    abi: GAME_ABI,
    functionName: 'placeBet',
    onSuccess: () => {
      toast.success('Bet placed successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to place bet: ${error.message}`);
    },
  });

  const claimWinnings = useContractWrite({
    address: GAME_CONTRACT,
    abi: GAME_ABI,
    functionName: 'claimWinnings',
    onSuccess: () => {
      toast.success('Winnings claimed successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to claim winnings: ${error.message}`);
    },
  });

  const getGame = useContractRead({
    address: GAME_CONTRACT,
    abi: GAME_ABI,
    functionName: 'getGame',
  });

  const getGamePlayers = useContractRead({
    address: GAME_CONTRACT,
    abi: GAME_ABI,
    functionName: 'getGamePlayers',
  });

  return {
    createGame,
    joinGame,
    placeBet,
    claimWinnings,
    getGame,
    getGamePlayers,
  };
}; 