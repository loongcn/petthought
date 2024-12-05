'use client';

import React, { useState } from 'react';
import ImageUploader from '@/components/ImageUploader';

export default function AnalysisPage() {
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleAnalysisComplete = (result: string) => {
    setAnalysis(result);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Pet Thought Analysis</h1>
      <ImageUploader onAnalysisComplete={handleAnalysisComplete} />
      {analysis && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Analysis Result:</h2>
          <p>{analysis}</p>
        </div>
      )}
    </div>
  );
}