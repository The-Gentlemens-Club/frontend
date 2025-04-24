import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { GameSettings } from '../../src/components/ui/GameSettings/GameSettings';
import { GameChat } from '../../src/components/ui/GameChat/GameChat';
import { GameStats } from '../../src/components/ui/GameStats/GameStats';

interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

const GamePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'Player 1',
      content: 'Good luck everyone!',
      timestamp: new Date(),
    },
  ]);

  const handleSettingsSave = (settings: any) => {
    // TODO: Implement settings save logic
    console.log('Saving settings:', settings);
  };

  const handleSendMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'You',
      content: text,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
  };

  // Mock stats data
  const gameStats = {
    totalGames: 150,
    winRate: 65.3,
    highestWin: '2.5 ETH',
    currentStreak: 3,
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Game interface will be rendered here */}
          <div className="bg-background-paper rounded-lg p-4 min-h-[600px]">
            Game {id}
          </div>
        </div>
        <div className="space-y-6">
          <GameSettings onSave={handleSettingsSave} />
          <GameStats
            totalGames={gameStats.totalGames}
            winRate={gameStats.winRate}
            highestWin={gameStats.highestWin}
            currentStreak={gameStats.currentStreak}
          />
          <GameChat
            messages={messages}
            onSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
