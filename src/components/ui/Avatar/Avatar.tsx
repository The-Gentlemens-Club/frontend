import React from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`${styles.avatar} ${sizes[size]} ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={styles.image}
        />
      ) : (
        <span className={styles.initials}>
          {getInitials(alt)}
        </span>
      )}
    </div>
  );
};