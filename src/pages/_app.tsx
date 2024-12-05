import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';
import GA from '../components/GA';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ClientOnly = dynamic(() => import('../components/ClientOnly'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [title, setTitle] = useState('Pet Mind Reader - Pet Thoughts Analyzer');
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    setTitle('Pet Mind Reader - Pet Thoughts Analyzer');
  }, []);

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/logo.ico" />
        </Head>
        <div className="flex flex-col min-h-screen">
          {gaId && <ClientOnly><GA gaId={gaId} /></ClientOnly>}
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

export default MyApp;
