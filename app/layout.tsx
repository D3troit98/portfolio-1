import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from 'next-themes'; // Changed import

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Duruaku Ebuka Micheal | Portfolio',
  description: 'Personal portfolio for Duruaku Ebuka Micheal showcasing projects and skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      </head>
      <body className="bg-background text-foreground overflow-x-hidden min-h-screen antialiased">
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="ebuka-theme-preference"
        > */}
        {children}
        {/* </ThemeProvider> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
