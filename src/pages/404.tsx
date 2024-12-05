import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Pet Mind Reader</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            404
          </h1>
          <h2 className="text-2xl text-gray-600 mb-6">
            Sorry, the page you are looking for does not exist.
          </h2>
          <Link 
            href="/" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
