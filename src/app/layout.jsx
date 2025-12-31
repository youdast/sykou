import React from 'react';
import '../index.css';
import { ThemeProvider } from '../context/ThemeContext';
import I18nProvider from '../components/I18nProvider';

export const metadata = {
  title: 'SYKOU',
  description: 'Web & Mobile Application Development Services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
