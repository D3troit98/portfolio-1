import type { Metadata } from 'next';
import PageShell from '@/components/Worlds/PageShell';
import LabExperiments from '@/components/Lab/LabExperiments';

export const metadata: Metadata = {
  title: 'The Creative Lab | Ebuka Duruaku',
  description:
    'An interactive notebook of springs, generative drawing, and system behaviour. Experiments by Ebuka Duruaku.',
};

export default function LabPage() {
  return (
    <PageShell active="lab">
      <section className="grid gap-8 py-16 md:grid-cols-[1.2fr_.8fr] md:items-end md:gap-20 md:py-24">
        <div>
          <p className="folio-eyebrow">Field notes / Creative coding</p>
          <h1 className="mt-6 text-5xl leading-[1.05] tracking-[-.05em] sm:text-6xl lg:text-7xl">
            A little room
            <br />
            for{' '}
            <span className="font-serif font-normal italic text-[#a65332]">
              experiments.
            </span>
          </h1>
        </div>
        <div>
          <p className="max-w-sm text-base leading-8 text-[#62675f]">
            What happens when you pull a spring, change a rule, or interrupt a
            signal? A small collection of things to play with, break, and
            understand.
          </p>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-[#62675f]">
            Three experiments / Made for curious hands
          </p>
        </div>
      </section>
      <LabExperiments />
    </PageShell>
  );
}
