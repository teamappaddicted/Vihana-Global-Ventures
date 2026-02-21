import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler for optimal performance
  reactCompiler: true,

  // Image optimization for Vercel
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },

  // Optimized production builds
  compress: true,

  // WebGL and Three.js compatibility
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
    };
    
    // Handle Three.js and WebGL modules
    config.module.rules.push({
      test: /three[\\/]examples[\\/]jsm/,
      sideEffects: true,
    });
    
    return config;
  },

  // Output mode for Vercel
  output: 'standalone',

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: "Vihana Global Ventures",
  },

  // Vercel specific settings
  outputFileTracing: true,

  // Strict mode for better error detection
  reactStrictMode: true,

  // SWC minification (faster builds)
  swcMinify: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"],
    esmExternals: true,
  },

  // Ensure proper TypeScript configuration
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;
