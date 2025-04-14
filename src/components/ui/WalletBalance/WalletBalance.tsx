
import React from 'react';
import { Card } from '../Card/Card';
import { ethers } from 'ethers';
import styles from './WalletBalance.modules.scss';

interface TokenBalance {
  symbol: string;
  balance: string | BigNumber;
  icon?: string;
  usdValue?: number;
}

interface WalletBalanceProps {
  balances: TokenBalance[];
  className?: string;
}

export const WalletBalance: React.FC<WalletBalanceProps> = ({
  balances,
  className = '',
}) => {
  return (
    <Card className={`wallet-balance ${className}`}>
      <h3 className="wallet-balance-title">Wallet Balance</h3>
      <div className="wallet-balance-list">
        {balances.map((token, index) => (
          <div key={index} className="wallet-balance-item">
            <div className="token-info">
              {token.icon && <img src={token.icon} alt={token.symbol} className="token-icon" />}
              <span className="token-symbol">{token.symbol}</span>
            </div>
            <div className="token-values">
              <span className="token-balance">{token.balance}</span>
              {token.usdValue && (
                <span className="token-usd">${token.usdValue.toFixed(2)}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
