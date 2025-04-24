import { Layout } from '../../src/components/layout/Layout';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import { Input } from '../../src/components/ui/Input';
import { Button } from '../../src/components/ui/Button';
import { Switch } from '../../src/components/ui/Switch';
import { LoadingSpinner } from '../../src/components/ui/LoadingSpinner';
import { Modal } from '../../src/components/ui/Modal';

interface Settings {
  username: string;
  email: string;
  notifications: {
    gameStart: boolean;
    tournamentStart: boolean;
    win: boolean;
    loss: boolean;
  };
  theme: 'light' | 'dark' | 'system';
  language: string;
}

export default function Settings() {
  const { address } = useAccount();
  const [settings, setSettings] = useState<Settings>({
    username: '',
    email: '',
    notifications: {
      gameStart: true,
      tournamentStart: true,
      win: true,
      loss: true,
    },
    theme: 'dark',
    language: 'en',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowConfirmModal(true);
    } catch (error) {
      console.error('Failed to save settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

        <div className="bg-gray-800 rounded-lg p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Account</h2>
            <div className="space-y-4">
              <Input
                label="Username"
                value={settings.username}
                onChange={(e) =>
                  setSettings({ ...settings, username: e.target.value })
                }
              />
              <Input
                label="Email"
                type="email"
                value={settings.email}
                onChange={(e) =>
                  setSettings({ ...settings, email: e.target.value })
                }
              />
              <div className="text-gray-300">
                <p>Wallet Address: {address}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Notifications</h2>
            <div className="space-y-4">
              <Switch
                label="Game Start"
                checked={settings.notifications.gameStart}
                onChange={(checked) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      gameStart: checked,
                    },
                  })
                }
              />
              <Switch
                label="Tournament Start"
                checked={settings.notifications.tournamentStart}
                onChange={(checked) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      tournamentStart: checked,
                    },
                  })
                }
              />
              <Switch
                label="Win Notifications"
                checked={settings.notifications.win}
                onChange={(checked) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      win: checked,
                    },
                  })
                }
              />
              <Switch
                label="Loss Notifications"
                checked={settings.notifications.loss}
                onChange={(checked) =>
                  setSettings({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      loss: checked,
                    },
                  })
                }
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Appearance</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Theme</label>
                <select
                  value={settings.theme}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      theme: e.target.value as 'light' | 'dark' | 'system',
                    })
                  }
                  className="w-full bg-gray-700 text-white rounded-lg p-2"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Language</label>
                <select
                  value={settings.language}
                  onChange={(e) =>
                    setSettings({ ...settings, language: e.target.value })
                  }
                  className="w-full bg-gray-700 text-white rounded-lg p-2"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSaveSettings}
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Settings'}
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Settings Saved"
      >
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Your settings have been saved successfully.
          </p>
          <Button onClick={() => setShowConfirmModal(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </Layout>
  );
} 