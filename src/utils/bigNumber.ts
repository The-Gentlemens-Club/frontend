
import BigNumber from 'bignumber.js';

export const formatBigNumber = (value: string | number, decimals = 18): string => {
  return new BigNumber(value).dividedBy(new BigNumber(10).pow(decimals)).toString();
};

export const parseBigNumber = (value: string | number, decimals = 18): string => {
  return new BigNumber(value).multipliedBy(new BigNumber(10).pow(decimals)).toString();
};
