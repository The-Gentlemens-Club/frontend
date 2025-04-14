import React from 'react';
import styles from './Chip.module.scss';

interface ChipProps {
  label: string;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md';
  onDelete?: () => void;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  color = 'default',
  variant = 'filled',
  size = 'md',
  onDelete,
  className = '',
}) => {
  return (
    <div
      className={`
        chip
        chip--${variant}
        chip--${color}
        chip--${size}
        ${className}
      `}
    >
      <span className="chip__label">{label}</span>
      {onDelete && (
        <button
          className="chip__delete"
          onClick={onDelete}
          aria-label="Delete"
        >
          ×
        </button>
      )}
    </div>
  );
};