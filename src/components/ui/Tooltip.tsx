import { FC, ReactNode, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`
            absolute z-50
            ${positionClasses[position]}
            px-3 py-2
            bg-gray-900 text-white text-sm
            rounded-md shadow-lg
            whitespace-nowrap
            ${className}
          `}
        >
          {content}
          <div
            className={`
              absolute w-2 h-2 bg-gray-900
              ${
                position === 'top'
                  ? 'bottom-[-4px] left-1/2 -translate-x-1/2 rotate-45'
                  : position === 'right'
                  ? 'left-[-4px] top-1/2 -translate-y-1/2 rotate-45'
                  : position === 'bottom'
                  ? 'top-[-4px] left-1/2 -translate-x-1/2 rotate-45'
                  : 'right-[-4px] top-1/2 -translate-y-1/2 rotate-45'
              }
            `}
          />
        </div>
      )}
    </div>
  );
}; 