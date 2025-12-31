/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable React DevTools in production
  reactStrictMode: true,
  
  // Production optimizations
  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'],
      },
    },
  }),

  // Allowed dev origins for CORS
  allowedDevOrigins: [
    'http://localhost:3002',
    'http://sykou.site',
    'https://sykou.site',
  ],
};

export default nextConfig;
