import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { polygon, optimism, avalanche, arbitrum } from 'wagmi/chains';
import { Header } from '../src/components/layout/Header';

const config = getDefaultConfig({
  appName: "Gentlemen's Club",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [polygon, optimism, avalanche, arbitrum],
  ssr: true,
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: '#4CAF50',
            borderRadius: 'medium',
          })}
        >
          <div className="min-h-screen bg-background-default">
            <Header />
            <main className="pt-16 container mx-auto px-4">
              <Component {...pageProps} />
            </main>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
