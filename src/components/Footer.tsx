import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-100 text-amber-900">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Pet Mind Reader. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-amber-700 transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
