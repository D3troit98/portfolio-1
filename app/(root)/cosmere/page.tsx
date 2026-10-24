import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/Worlds/PageShell';
import CosmereJourney from '@/components/Cosmere/CosmereJourney';

export const metadata: Metadata = {
  title: 'A Reader’s Atlas | Ebuka Duruaku',
  description:
    'An illustrated, spoiler-light journey through four worlds of Brandon Sanderson’s Cosmere, by Ebuka Duruaku.',
};

export default function CosmerePage() {
  return (
    <PageShell active="cosmere">
      <section className="grid gap-8 py-16 md:grid-cols-[1.2fr_.8fr] md:items-end md:gap-20 md:py-24">
        <div>
          <p className="folio-eyebrow">Beyond the code / A reader’s atlas</p>
          <h1 className="mt-6 text-5xl leading-[1.05] tracking-[-.05em] sm:text-6xl lg:text-7xl">
            Other worlds.
            <br />
            Same{' '}
            <span className="font-serif font-normal italic text-[#a65332]">
              curiosity.
            </span>
          </h1>
        </div>
        <div>
          <p className="max-w-sm text-base leading-8 text-[#62675f]">
            A small corner of my site for Brandon Sanderson’s Cosmere. Four
            worlds, different rules, and connections waiting to be noticed.
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-[#62675f]">
            Scroll to travel / Premises, not plot twists
          </p>
        </div>
      </section>
      <CosmereJourney />
      <div className="border-t border-[#c9c9bf] py-10">
        <p className="folio-eyebrow">The people inside the worlds</p>
        <Link
          href="/characters"
          className="folio-text-link mt-4 inline-block text-2xl tracking-tight"
        >
          Step into the character gallery ↗
        </Link>
      </div>
      <section className="grid gap-8 border-t border-[#c9c9bf] py-16 md:grid-cols-[.8fr_1.2fr] md:gap-20">
        <div>
          <p className="folio-eyebrow">From the bookshelf / To the desktop</p>
          <h2 className="mt-5 text-3xl tracking-tight md:text-4xl">
            A bookish idea.
            <br />
            Made into software.
          </h2>
        </div>
        <div>
          <p className="text-sm leading-8 text-[#62675f]">
            Roshar is also the name of one of my personal C++ and Qt projects: a
            desktop application for Stormlight Archive quotes, with timed
            updates, system tray integration, and display settings. A little
            overlap between the things I like to read and the things I like to
            build.
          </p>
          <a
            href="https://github.com/D3troit98/roshar"
            target="_blank"
            rel="noopener noreferrer"
            className="folio-text-link mt-6 inline-block text-sm"
          >
            Explore the Roshar project ↗
          </a>
        </div>
      </section>
      <p className="max-w-3xl pb-5 text-[11px] leading-6 text-[#62675f]">
        An unofficial fan-made exploration with original abstract artwork. This
        route is an artistic arrangement, not a canonical star map or a
        recommended reading order. World names and book premises are based on{' '}
        <a
          className="folio-text-link underline"
          href="https://faq.brandonsanderson.com/knowledge-base/what-are-the-names-of-the-cosmere-planets/"
          target="_blank"
          rel="noopener noreferrer"
        >
          the author’s world guide
        </a>{' '}
        and{' '}
        <a
          className="folio-text-link underline"
          href="https://faq.brandonsanderson.com/knowledge-base/what-books-have-you-written/"
          target="_blank"
          rel="noopener noreferrer"
        >
          book introductions
        </a>
        .
      </p>
    </PageShell>
  );
}
