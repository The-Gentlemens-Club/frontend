import React, { useState } from "react";
import { Card } from "../Card/Card";
import { Switch } from "../Switch/Switch";
import { Slider } from "../Slider/Slider";
import { Button } from "../Button/Button";
import styles from "./GameSettings.module.scss";

interface GameSettingsProps {
  onSave: (settings: GameSettingsType) => void;
  defaultSettings?: GameSettingsType;
  className?: string;
}

export interface GameSettingsType {
  soundEnabled: boolean;
  musicEnabled: boolean;
  volume: number;
  autoAcceptGames: boolean;
  showBetAmounts: boolean;
  chatNotifications: boolean;
  darkMode: boolean;
}

export const GameSettings: React.FC<GameSettingsProps> = ({
  onSave,
  defaultSettings,
  className = "",
}) => {
  const [settings, setSettings] = useState<GameSettingsType>(
    defaultSettings || {
      soundEnabled: true,
      musicEnabled: true,
      volume: 75,
      autoAcceptGames: false,
      showBetAmounts: true,
      chatNotifications: true,
      darkMode: false,
    },
  );

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <Card className={`game-settings ${className}`}>
      <h3 className="game-settings__title">Game Settings</h3>

      <div className="game-settings__options">
        <div className="game-settings__option">
          <span>Sound Effects</span>
          <Switch
            checked={settings.soundEnabled}
            onChange={(checked) =>
              setSettings({ ...settings, soundEnabled: checked })
            }
          />
        </div>

        <div className="game-settings__option">
          <span>Background Music</span>
          <Switch
            checked={settings.musicEnabled}
            onChange={(checked) =>
              setSettings({ ...settings, musicEnabled: checked })
            }
          />
        </div>

        <div className="game-settings__option">
          <span>Volume</span>
          <Slider
            value={settings.volume}
            onChange={(value) => setSettings({ ...settings, volume: value })}
            min={0}
            max={100}
          />
        </div>

        <div className="game-settings__option">
          <span>Auto Accept Games</span>
          <Switch
            checked={settings.autoAcceptGames}
            onChange={(checked) =>
              setSettings({ ...settings, autoAcceptGames: checked })
            }
          />
        </div>

        <div className="game-settings__option">
          <span>Show Bet Amounts</span>
          <Switch
            checked={settings.showBetAmounts}
            onChange={(checked) =>
              setSettings({ ...settings, showBetAmounts: checked })
            }
          />
        </div>

        <div className="game-settings__option">
          <span>Chat Notifications</span>
          <Switch
            checked={settings.chatNotifications}
            onChange={(checked) =>
              setSettings({ ...settings, chatNotifications: checked })
            }
          />
        </div>

        <div className="game-settings__option">
          <span>Dark Mode</span>
          <Switch
            checked={settings.darkMode}
            onChange={(checked) =>
              setSettings({ ...settings, darkMode: checked })
            }
          />
        </div>
      </div>

      <Button
        onClick={handleSave}
        variant="primary"
        className="game-settings__save"
      >
        Save Settings
      </Button>
    </Card>
  );
};
