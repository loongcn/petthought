import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Share your pet stories" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <meta property="og:title" content="Pet Thoughts" />
          <meta property="og:description" content="Share your pet stories" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/og-image.png" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Pet Thoughts" />
          <meta name="twitter:description" content="Share your pet stories" />
          <meta name="twitter:image" content="/og-image.png" />
          
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
