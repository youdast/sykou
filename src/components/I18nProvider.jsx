'use client';
import { useEffect } from 'react';
import '../locales/i18n';

export default function I18nProvider({ children }) {
  useEffect(() => {
    // i18n is initialized when this module loads
  }, []);
  
  return children;
}
