import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vihana Global Ventures - International Import-Export Trading & Consulting',
  description: 'Leading global import-export trading and consulting firm connecting markets with trust and excellence. We specialize in international trade solutions, logistics, and market intelligence.',
  keywords: 'import-export, trading, consulting, global commerce, logistics, supply chain',
  authors: [{ name: 'Vihana Global Ventures' }],
  creator: 'Vihana Global Ventures',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vihanaglobal.com',
    title: 'Vihana Global Ventures - International Import-Export Trading & Consulting',
    description: 'Leading global import-export trading and consulting firm',
    siteName: 'Vihana Global Ventures',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vihana Global Ventures',
    description: 'International Import-Export Trading & Consulting',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://vihanaglobal.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://vihanaglobal.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#214156" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
