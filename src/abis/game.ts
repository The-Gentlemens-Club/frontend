export const gameABI = [
  {
    inputs: [{ name: 'player', type: 'address' }],
    name: 'getGameState',
    outputs: [
      { name: 'isActive', type: 'bool' },
      { name: 'currentBet', type: 'uint256' },
      { name: 'playerBalance', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'startGame',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ name: 'amount', type: 'uint256' }],
    name: 'placeBet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const; 