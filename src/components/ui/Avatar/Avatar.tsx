import React from 'react';
import Image from 'next/image';
import styles from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'medium',
  className = '',
}) => {
  const sizeMap = {
    small: 32,
    medium: 48,
    large: 64,
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
    <div className={`${styles.avatar} ${styles[size]} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={sizeMap[size]}
          height={sizeMap[size]}
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