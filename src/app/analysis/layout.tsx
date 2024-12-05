import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Mind - AI Pet Thought Analysis',
  description: 'Analyze your pet\'s thoughts with advanced AI technology'
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function AnalysisLayout({ children }: LayoutProps) {
  return (
    <div className="analysis-layout">
      {children}
    </div>
  );
}