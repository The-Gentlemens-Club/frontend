import { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary';
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hoverable = false,
}) => {
  const variantClasses = {
    default: 'bg-gray-800 border-gray-700',
    primary: 'bg-blue-900 border-blue-800',
    secondary: 'bg-purple-900 border-purple-800',
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hoverable
    ? 'transition-all duration-200 hover:scale-[1.02] hover:shadow-lg'
    : '';

  return (
    <div
      className={`
        rounded-lg border
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${hoverClasses}
        ${className}
      `}
    >
      {children}
    </div>
  );
}; 