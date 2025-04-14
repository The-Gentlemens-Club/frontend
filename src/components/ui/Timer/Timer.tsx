import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

interface TimerProps {
  initialTime: number; // in seconds
  onComplete?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'warning' | 'danger';
  className?: string;
}

export const Timer: React.FC<TimerProps> = ({
  initialTime,
  onComplete,
  size = 'md',
  variant = 'primary',
  className = '',
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`timer timer--${size} timer--${variant} ${className}`}>
      <div className="timer__display">{formatTime(timeLeft)}</div>
      <div 
        className="timer__progress" 
        style={{ 
          '--progress': `${(timeLeft / initialTime) * 100}%` 
        } as React.CSSProperties} 
      />
    </div>
  );
};