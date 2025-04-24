import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../ui/Button';
import { WalletConnect } from '../ui/WalletConnect';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Games', href: '/games' },
  { name: 'Tournaments', href: '/tournaments' },
  { name: 'Rewards', href: '/rewards' },
  { name: 'Profile', href: '/profile' },
];

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="md:hidden">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50"
      >
        Menu
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-40">
          <div className="fixed inset-0 flex flex-col p-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Menu</h2>
              <Button
                onClick={() => setIsOpen(false)}
                variant="secondary"
              >
                Close
              </Button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Button
                      onClick={() => {
                        router.push(item.href);
                        setIsOpen(false);
                      }}
                      variant={
                        router.pathname === item.href
                          ? 'primary'
                          : 'secondary'
                      }
                      className="w-full"
                    >
                      {item.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-8">
              <WalletConnect />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 