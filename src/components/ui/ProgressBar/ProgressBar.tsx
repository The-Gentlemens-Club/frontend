import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  variant?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  showLabel = false,
  variant = 'primary',
  size = 'md',
  animated = false,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`progress-bar progress-bar--${size} ${className}`}>
      <div 
        className={`progress-bar__fill progress-bar__fill--${variant} ${animated ? 'progress-bar__fill--animated' : ''}`}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
      {showLabel && (
        <span className="progress-bar__label">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};