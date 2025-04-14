import React, { useState, useEffect } from "react";
import styles from "./GameClock.module.scss";

interface GameClockProps {
  startTime: number; // in seconds
  isRunning?: boolean;
  showMilliseconds?: boolean;
  variant?: "primary" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const GameClock: React.FC<GameClockProps> = ({
  startTime,
  isRunning = true,
  showMilliseconds = false,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const [time, setTime] = useState(startTime * 1000);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => Math.max(0, prev - 10));
    }, 10);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);

    return showMilliseconds
      ? `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`
      : `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`game-clock game-clock--${size} game-clock--${variant} ${className}`}
    >
      <div className="game-clock__display">{formatTime(time)}</div>
      <div
        className="game-clock__progress"
        style={{ width: `${(time / (startTime * 1000)) * 100}%` }}
      />
    </div>
  );
};
