import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-amber-100 text-amber-900 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.webp" 
                  alt="Logo" 
                  width={36}
                  height={36}
                  className="rounded-full shadow-sm"
                />
              </Link>
            </div>
            <div>
              <Link href="/" className="text-xl font-semibold hover:text-amber-700 transition-colors">
                Pet Thoughts
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-16" />
    </>
  );
}