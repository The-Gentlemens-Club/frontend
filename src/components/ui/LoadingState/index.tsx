import { LoadingSpinner } from '../LoadingSpinner';

interface LoadingStateProps {
  isLoading: boolean;
  children: React.ReactNode;
  message?: string;
  fullScreen?: boolean;
}

export const LoadingState = ({
  isLoading,
  children,
  message = 'Loading...',
  fullScreen = false,
}: LoadingStateProps) => {
  if (!isLoading) {
    return <>{children}</>;
  }

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50'
    : 'flex items-center justify-center';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center">
        <LoadingSpinner size="large" />
        <p className="mt-4 text-white text-lg">{message}</p>
      </div>
    </div>
  );
}; 