import React from 'react';
import Image from 'next/image';
import styles from './WalletBalance.module.scss';

interface WalletBalanceProps {
  balance: string;
  symbol: string;
  icon: string;
}

export const WalletBalance: React.FC<WalletBalanceProps> = ({
  balance,
  symbol,
  icon,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image
          src={icon}
          alt={symbol}
          width={24}
          height={24}
          className={styles.image}
        />
      </div>
      <div className={styles.balance}>
        <span className={styles.amount}>{balance}</span>
        <span className={styles.symbol}>{symbol}</span>
      </div>
    </div>
  );
};
