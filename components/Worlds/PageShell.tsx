import Link from 'next/link';
import type { ReactNode } from 'react';
import { MotionRoot } from '@/components/Portfolio/Motion';

export default function PageShell({
  children,
  active,
}: {
  children: ReactNode;
  active: 'lab' | 'cosmere' | 'characters';
}) {
  return (
    <MotionRoot>
      <div className="folio min-h-[100dvh] bg-[#f6f5ef] text-[#242b26]">
        <a
          href="#page-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-[#242b26] focus:p-4 focus:text-white"
        >
          Skip to content
        </a>
        <div className="mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-16">
          <header className="flex flex-wrap items-center justify-between gap-5 border-b border-[#d7d6cf] py-6 md:py-8">
            <Link
              href="/"
              className="flex items-center gap-3 text-sm font-semibold tracking-tight"
              aria-label="Ebuka Duruaku portfolio"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-[#242b26] font-mono text-xs text-[#f6f5ef]">
                ed.
              </span>
              <span>Ebuka Duruaku</span>
            </Link>
            <nav
              aria-label="Site navigation"
              className="flex items-center gap-5 text-xs sm:gap-8 sm:text-sm"
            >
              <Link href="/" className="folio-text-link">
                Portfolio
              </Link>
              <Link
                href="/lab"
                aria-current={active === 'lab' ? 'page' : undefined}
                className={`folio-text-link ${active === 'lab' ? 'text-[#a65332] underline underline-offset-4' : ''}`}
              >
                Lab
              </Link>
              <Link
                href="/cosmere"
                aria-current={active === 'cosmere' ? 'page' : undefined}
                className={`folio-text-link ${active === 'cosmere' ? 'text-[#a65332] underline underline-offset-4' : ''}`}
              >
                Cosmere
              </Link>
              <Link
                href="/characters"
                aria-current={active === 'characters' ? 'page' : undefined}
                className={`folio-text-link ${active === 'characters' ? 'text-[#a65332] underline underline-offset-4' : ''}`}
              >
                Gallery
              </Link>
            </nav>
          </header>
          <main id="page-content">{children}</main>
          <footer className="mt-10 flex flex-col justify-between gap-6 border-t border-[#d7d6cf] pt-7 pb-24 text-xs text-[#62675f] sm:flex-row">
            <p>Ebuka Duruaku / A little beyond the day job.</p>
            <div className="flex gap-6">
              <Link
                href={active === 'lab' ? '/cosmere' : '/lab'}
                className="folio-text-link"
              >
                {active === 'lab'
                  ? 'Explore the Cosmere'
                  : 'Visit the creative lab'}{' '}
                ↗
              </Link>
              <Link href="/" className="folio-text-link">
                Back to portfolio ↗
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </MotionRoot>
  );
}
