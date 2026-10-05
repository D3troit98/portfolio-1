import React, { ReactNode } from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="portfolio-shell w-full mx-auto">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:rounded focus:bg-[#78c8c1] focus:p-3 focus:text-[#0f1624]">Skip to content</a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};
