import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from 'next-themes'; // Changed import
import { Toaster } from '@/components/ui/sonner';


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL('https://www.d3troit.dev/'),
  title: 'Ebuka Duruaku | Software Engineer',
  description: 'Ebuka Duruaku is a software engineer in Lagos building web, backend, and desktop applications, with a focus on Rust and systems engineering.',
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Ebuka Duruaku',
    title: 'Ebuka Duruaku | Software Engineer',
    description: 'Building web, backend, and desktop applications, with a focus on Rust and systems engineering.',
    images: [{ url: '/images/social-preview.png', width: 1200, height: 630, alt: 'Ebuka Duruaku — From the interface to the internals.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ebuka Duruaku | Software Engineer',
    description: 'Building web, backend, and desktop applications, with a focus on Rust and systems engineering.',
    images: [{ url: '/images/social-preview.png', alt: 'Ebuka Duruaku — From the interface to the internals.' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
      </head>
      <body className="bg-foreground text-background overflow-x-hidden min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="ebuka-theme-preference"
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
