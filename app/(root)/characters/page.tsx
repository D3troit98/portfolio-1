import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/Worlds/PageShell';
import CharacterGallery from '@/components/Characters/CharacterGallery';

export const metadata: Metadata = {
  title: 'The Character Gallery | Ebuka Duruaku',
  description:
    'An illustrated fan journey through six of Brandon Sanderson’s Cosmere characters, with imagined portraits and spoiler-light introductions.',
};

export default function CharactersPage() {
  return (
    <PageShell active="characters">
      <section className="grid gap-8 py-16 md:grid-cols-[1.2fr_.8fr] md:items-end md:gap-20 md:py-24">
        <div>
          <p className="folio-eyebrow">
            Beyond the code / The character gallery
          </p>
          <h1 className="mt-6 text-5xl leading-[1.05] tracking-[-.05em] sm:text-6xl lg:text-7xl">
            People who
            <br />
            <span className="font-serif font-normal italic text-[#a65332]">
              stay with you.
            </span>
          </h1>
        </div>
        <div>
          <p className="max-w-sm text-base leading-8 text-[#62675f]">
            Six portraits from the Cosmere. A gallery of courage, curiosity,
            complicated choices, and the people who make these worlds feel
            alive.
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-[#62675f]">
            Scroll to explore / Select a portrait to look closer
          </p>
        </div>
      </section>
      <CharacterGallery />
      <section className="grid gap-6 border-t border-[#c9c9bf] py-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="folio-eyebrow">A reader’s interpretation</p>
          <p className="mt-4 text-xs leading-7 text-[#62675f]">
            Unofficial fan artwork generated with AI, rather than official
            character depictions. The short introductions stay close to each
            character’s starting premise; the reflections are interpretive, not
            quotations. Linked source pages may contain spoilers.
          </p>
        </div>
        <div className="md:self-center">
          <Link href="/cosmere" className="folio-text-link text-sm">
            Return to the world atlas ↗
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
