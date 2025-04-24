import { ErrorBoundary } from '../ui/ErrorBoundary';
import { LoadingState } from '../ui/LoadingState';
import { MobileNav } from './MobileNav';
import { WalletConnect } from '../ui/WalletConnect';
import { useRouter } from 'next/router';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Games', href: '/games' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Rewards', href: '/rewards' },
  { name: 'Profile', href: '/profile' },
];

export const Layout: React.FC<LayoutProps> = ({ children, isLoading = false }) => {
  const router = useRouter();

  return (
    <ErrorBoundary>
      <LoadingState isLoading={isLoading} fullScreen>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </LoadingState>
    </ErrorBoundary>
  );
}; 