import React from 'react';

const NoPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-112px)] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">404 - Page Not Found</h1>
      <p className="text-lg mb-4">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <a
        href="/"
        className="text-primary no-underline dark:text-primary-dark transition duration-300"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NoPage;
