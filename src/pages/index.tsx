import React, { useState } from 'react';
import Head from 'next/head';
import ImageUploader from '../components/ImageUploader';
import ShareButtons from '../components/ShareButtons';
import FAQ from '../components/FAQ';

export default function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  const handleAnalysisComplete = (result: string, uploadedImageUrl?: string) => {
    if (uploadedImageUrl) {
      setImageUrl(uploadedImageUrl);
    }
    setAnalysisResult(result);
  };

  return (
    <>
      <Head>
        <title>Pet Mind Reader - Pet Thoughts Analyzer</title>
        <meta name="description" content="Discover what your pet is really thinking through AI-powered image analysis" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pet Mind Reader: Know What They're Thinking
          </h1>
          <p className="text-xl text-gray-600">
            Ready to reveal my secret thoughts? Just upload my photo to Pet Mind Reader! 🐶
          </p>
        </section>

        <div className="max-w-4xl mx-auto">
          <ImageUploader onAnalysisComplete={handleAnalysisComplete} />
          {analysisResult && (
            <div className="mt-8 p-6 bg-green-50 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Your Pet's Thoughts
              </h2>
              <p className="text-lg text-green-800 leading-relaxed">
                {analysisResult}
              </p>
            </div>
          )}
          <ShareButtons imageUrl={imageUrl} analysisResult={analysisResult} />
        </div>

        <FAQ />
      </main>
    </>
  );
}
