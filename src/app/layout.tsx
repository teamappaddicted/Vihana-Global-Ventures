import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vihana Global Ventures - International Import-Export Trading & Consulting',
  description:
    'Leading global import-export trading and consulting firm connecting markets with trust and excellence. We specialize in international trade solutions, logistics, and market intelligence.',
  keywords: 'import-export, trading, consulting, global commerce, logistics, supply chain',
  authors: [{ name: 'Vihana Global Ventures' }],
  creator: 'Vihana Global Ventures',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',             // classic favicon for browser tabs
    shortcut: '/favicon.ico',         // shortcut icon for Windows / Chrome
    apple: '/apple-touch-icon.png',   // iOS / iPhone / iPad
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vihanaglobalventures.com',
    title: 'Vihana Global Ventures - International Import-Export Trading & Consulting',
    description: 'Leading global import-export trading and consulting firm',
    siteName: 'Vihana Global Ventures',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vihana Global Ventures',
    description: 'International Import-Export Trading & Consulting',
    images: '/favicon.ico',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://vihanaglobalventures.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* SEO & Favicon */}
        <link rel="canonical" href="https://vihanaglobalventures.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#214156" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}