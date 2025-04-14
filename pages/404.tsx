import React from 'react';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-text-secondary mb-6">The page you're looking for doesn't exist.</p>
        <Link href="/" className="text-primary-main hover:text-primary-light">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
