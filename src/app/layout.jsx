import React from 'react';
import '../index.css';
import { ThemeProvider } from '../context/ThemeContext';
import I18nProvider from '../components/I18nProvider';

export const metadata = {
  metadataBase: new URL('https://sykou.site'),
  title: {
    default: 'SYKOU Corporation | Premium Web & Mobile Development',
    template: '%s | SYKOU Corporation',
  },
  description: 'SYKOU Corporation delivers premium web and mobile solutions tailored to your business needs. Expert development in React, Next.js, and Three.js.',
  keywords: ['Web Development', 'Mobile App Development', 'Software Development', 'Application Development', 'SYKOU', 'Satria Yuda', 'React Developer', 'Next.js Expert'],
  authors: [{ name: 'Satria Yuda', url: 'https://sykou.site' }],
  creator: 'Satria Yuda',
  publisher: 'SYKOU Corporation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SYKOU Corporation | Premium Web & Mobile Development',
    description: 'Elevate your digital presence with SYKOU Corporation. We build high-performance web and mobile applications.',
    url: 'https://sykou.site',
    siteName: 'SYKOU Corporation',
    images: [
      {
        url: 'https://public-assets.sykou.site/public-bucket/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SYKOU Corporation - Digital Excellence',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SYKOU Corporation | Premium Web & Mobile Development',
    description: 'Elevate your digital presence with SYKOU Corporation.',
    images: ['https://public-assets.sykou.site/public-bucket/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://public-assets.sykou.site/public-bucket/favicon.png',
    shortcut: 'https://public-assets.sykou.site/public-bucket/favicon.png',
    apple: 'https://public-assets.sykou.site/public-bucket/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SYKOU Corporation',
    url: 'https://sykou.site',
    logo: 'https://public-assets.sykou.site/public-bucket/favicon.png',
    sameAs: [
      'https://github.com/youdast',
      // Add other social links here
    ],
    description: 'Premium web and mobile application development services.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Aggressive Dev Overlay Hiding */
              #vercel-live-feedback,
              .vercel-toolbar,
              [data-vercel-toolbar],
              vercel-live-feedback,
              #next-devtools-container,
              #next-devtools-trigger,
              [data-nextjs-toast-wrapper],
              .nextjs-static-indicator,
              [data-nextjs-static-indicator] {
                display: none !important;
                visibility: hidden !important;
                pointer-events: none !important;
                opacity: 0 !important;
                z-index: -9999 !important;
              }
            `,
          }}
        />
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof window !== 'undefined') {
                  if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
                    for (const key in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                      if (key === 'renderers') {
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = new Map();
                      } else if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] === 'function') {
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = function () {};
                      }
                    }
                  }
                }
              `,
            }}
          />
        )}
      </head>
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
