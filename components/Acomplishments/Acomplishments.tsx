import Link from 'next/link';
import AccomplishmentsCanvas from './AccomplishmentsCanvas';

const accomplishments = [
  { number: '30+', text: 'Open Source Projects' },
  { number: '1,000+', text: 'LinkedIn Followers' },
  { number: '11+', text: 'GitHub Followers' },
  { number: '7+', text: 'GitHub Stars' },
];

const Accomplishments = () => (
  <section id="accomplishments" aria-labelledby="accomplishments-heading" className="container scroll-mt-8 px-6 py-12 sm:px-8 md:py-20">
    <div className="relative isolate overflow-hidden rounded-2xl border border-white/8 bg-[#111a29] px-5 py-12 sm:px-10 md:py-16">
      <AccomplishmentsCanvas />
      <div className="relative flex flex-col items-center text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#78c8c1]">Beyond the code</p>
        <h2 id="accomplishments-heading" className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">Personal<br className="hidden sm:block" /> Accomplishments</h2>
        <p className="mt-4 max-w-md rounded-xl bg-[#111a29]/90 px-4 py-3 text-sm leading-relaxed text-slate-300 sm:text-base">Building in the open, sharing what I learn, and connecting with the developer community.</p>
        <dl className="my-10 grid w-full max-w-3xl grid-cols-2 gap-x-5 gap-y-8 md:my-12 md:grid-cols-4 md:gap-6">
          {accomplishments.map(item => (
            <div key={item.text} className="rounded-lg bg-[#111a29]/95 px-2 py-4">
              <dt className="text-xs leading-relaxed text-slate-300 sm:text-sm">{item.text}</dt>
              <dd className="mb-2 mt-3 font-mono text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl">{item.number}</dd>
            </div>
          ))}
        </dl>
        <Link href="https://github.com/D3troit98" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-[#111a29]/90 px-5 py-3 text-sm text-slate-200 transition-colors hover:border-[#78c8c1]/60 hover:text-[#78c8c1]">Explore my GitHub <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  </section>
);

export default Accomplishments;
