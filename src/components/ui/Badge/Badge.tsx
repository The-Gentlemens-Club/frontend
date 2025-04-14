import React from 'react';
import styles from './Badge.module.scss';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const variants = {
    default: 'bg-background-elevated text-text-primary',
    success: 'bg-game-win/10 text-game-win',
    warning: 'bg-game-draw/10 text-game-draw',
    error: 'bg-game-lose/10 text-game-lose',
  };

  return (
    <span className={`${styles.badge} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};