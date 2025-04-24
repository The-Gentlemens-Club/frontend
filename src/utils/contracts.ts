import { ethers } from 'ethers';
import { toast } from 'react-hot-toast';
import { gameABI } from '../abis/game';
import { tokenABI } from '../abis/token';

// Contract addresses
const GAME_CONTRACT = process.env.NEXT_PUBLIC_GAME_CONTRACT || '';
const TOKEN_CONTRACT = process.env.NEXT_PUBLIC_TOKEN_CONTRACT || '';

export const useGameContract = () => {
  const getProvider = () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      return new ethers.BrowserProvider(window.ethereum);
    }
    return null;
  };

  const getSigner = async () => {
    const provider = getProvider();
    if (!provider) return null;
    return await provider.getSigner();
  };

  const getGameContract = async () => {
    const signer = await getSigner();
    if (!signer) return null;
    return new ethers.Contract(GAME_CONTRACT, gameABI, signer);
  };

  const getTokenContract = async () => {
    const signer = await getSigner();
    if (!signer) return null;
    return new ethers.Contract(TOKEN_CONTRACT, tokenABI, signer);
  };

  const startGame = async () => {
    try {
      const contract = await getGameContract();
      if (!contract) throw new Error('No contract instance');
      const tx = await contract.startGame();
      await tx.wait();
      toast.success('Game started successfully!');
    } catch (error) {
      toast.error(`Failed to start game: ${error.message}`);
    }
  };

  const placeBet = async (amount: bigint) => {
    try {
      const contract = await getGameContract();
      if (!contract) throw new Error('No contract instance');
      const tx = await contract.placeBet(amount);
      await tx.wait();
      toast.success('Bet placed successfully!');
    } catch (error) {
      toast.error(`Failed to place bet: ${error.message}`);
    }
  };

  const getGameState = async (address: string) => {
    try {
      const contract = await getGameContract();
      if (!contract) throw new Error('No contract instance');
      return await contract.getGameState(address);
    } catch (error) {
      toast.error(`Failed to get game state: ${error.message}`);
      return null;
    }
  };

  return {
    startGame,
    placeBet,
    getGameState,
  };
};

export const useTokenContract = () => {
  const getProvider = () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      return new ethers.BrowserProvider(window.ethereum);
    }
    return null;
  };

  const getSigner = async () => {
    const provider = getProvider();
    if (!provider) return null;
    return await provider.getSigner();
  };

  const getTokenContract = async () => {
    const signer = await getSigner();
    if (!signer) return null;
    return new ethers.Contract(TOKEN_CONTRACT, tokenABI, signer);
  };

  const getBalance = async (address: string) => {
    try {
      const contract = await getTokenContract();
      if (!contract) throw new Error('No contract instance');
      return await contract.balanceOf(address);
    } catch (error) {
      toast.error(`Failed to get balance: ${error.message}`);
      return null;
    }
  };

  const approve = async (spender: string, amount: bigint) => {
    try {
      const contract = await getTokenContract();
      if (!contract) throw new Error('No contract instance');
      const tx = await contract.approve(spender, amount);
      await tx.wait();
      toast.success('Token approval successful!');
    } catch (error) {
      toast.error(`Failed to approve tokens: ${error.message}`);
    }
  };

  return {
    getBalance,
    approve,
  };
}; 