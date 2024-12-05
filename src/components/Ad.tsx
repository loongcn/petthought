import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export default function Ad() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ADSENSE_CLIENT) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error('Ad initialization error', error);
      }
    }
  }, []);

  if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT) {
    return null;
  }

  return (
    <ins 
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
      data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
