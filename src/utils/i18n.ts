import { useRouter } from 'next/router';
import { useEffect, useCallback } from 'react';
import { useTranslation } from 'next-i18next';

export const getSavedLang = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('language');
  }
  return null;
};

export const setLanguage = (lang: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
};

export const useLanguage = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = useCallback((newLang: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLang });
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  }, [router, i18n]);

  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && savedLang !== router.locale) {
      changeLanguage(savedLang);
    }
  }, [changeLanguage, router.locale]);

  return { changeLanguage };
};