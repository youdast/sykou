/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'],
      },
    },
  }),

  // Allowed dev origins for CORS (Top level in recent Next.js versions)
  allowedDevOrigins: [
    'localhost:3002',
    'sykou.site',
    '*.sykou.site'
  ],

  // Disable dev indicators
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },

  // Experimental features
  experimental: {
    // Add other experimental flags here if needed
  },
};

export default nextConfig;
