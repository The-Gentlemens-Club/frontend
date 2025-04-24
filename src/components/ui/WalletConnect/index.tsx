import React from 'react';
import Image from 'next/image';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from './WalletConnect.module.scss';

export const WalletConnect: React.FC = () => {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div className={styles.container}>
      {isConnected ? (
        <button className={styles.disconnectButton} onClick={() => disconnect()}>
          Disconnect
        </button>
      ) : (
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            return (
              <div
                {...(!mounted && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!mounted || !account || !chain) {
                    return (
                      <button
                        onClick={openConnectModal}
                        className={styles.connectButton}
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        className={styles.wrongNetworkButton}
                      >
                        Wrong Network
                      </button>
                    );
                  }

                  return (
                    <div className={styles.connected}>
                      <button
                        onClick={openChainModal}
                        className={styles.chainButton}
                      >
                        {chain.hasIcon && (
                          <div className={styles.chainIcon}>
                            {chain.iconUrl && (
                              <Image
                                src={chain.iconUrl}
                                alt={chain.name ?? 'Chain icon'}
                                width={20}
                                height={20}
                                className={styles.image}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </button>

                      <button
                        onClick={openAccountModal}
                        className={styles.accountButton}
                      >
                        {account.displayName}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      )}
    </div>
  );
}; 