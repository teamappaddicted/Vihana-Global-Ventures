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

  // Turbopack configuration for Next.js 16
  turbopack: {},

  // Environment variables
  env: {
    NEXT_PUBLIC_APP_NAME: "Vihana Global Ventures",
  },

  // Strict mode for better error detection
  reactStrictMode: true,

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
