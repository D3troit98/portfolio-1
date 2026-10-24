import { Reveal } from '@/components/Portfolio/Motion';
import SpringField from './SpringField';
import WaveStudy from './WaveStudy';
import SignalTrace from './SignalTrace';

const studies = [
  {
    id: 'spring-field',
    number: '01',
    name: 'Motion',
    title: 'A spring has a memory.',
    description:
      'Pull something out of place and watch it find its way home. Adjust the stiffness and damping to feel the difference between a soft return and a firm one.',
    principle: 'A small study in restraint, resistance, and return.',
    component: <SpringField />,
  },
  {
    id: 'wave-study',
    number: '02',
    name: 'Form',
    title: 'One rule. Many possibilities.',
    description:
      'Eleven lines, one wave function. Change the amplitude, frequency, or phase to turn a simple rule into a different composition. Save a drawing you like.',
    principle: 'Generative drawing / Exportable SVG',
    component: <WaveStudy />,
  },
  {
    id: 'signal-trace',
    number: '03',
    name: 'Systems',
    title: 'Follow the invisible part.',
    description:
      'Step through a request, from a client action to a response. Then interrupt it. A tiny model of the behaviour hiding behind an interface.',
    principle: 'State transitions / Success and failure',
    component: <SignalTrace />,
  },
];

export default function LabExperiments() {
  return (
    <>
      <nav
        aria-label="Jump to an experiment"
        className="grid grid-cols-3 border-y border-[#c9c9bf]"
      >
        {studies.map((study) => (
          <a
            key={study.id}
            href={`#${study.id}`}
            className="folio-text-link flex min-h-16 items-center gap-3 px-2 text-xs sm:px-5 sm:text-sm"
          >
            <span className="font-mono text-[10px] text-[#a65332]">
              {study.number}
            </span>
            {study.name}
            <span aria-hidden="true" className="ml-auto">
              ↘
            </span>
          </a>
        ))}
      </nav>
      {studies.map((study) => (
        <section
          key={study.id}
          id={study.id}
          className="scroll-mt-8 border-b border-[#c9c9bf] py-16 md:py-24"
        >
          <Reveal className="grid gap-9 md:grid-cols-[.7fr_1.3fr] md:gap-14 lg:gap-20">
            <div className="md:pt-5">
              <p className="folio-eyebrow">
                Experiment {study.number} / {study.name}
              </p>
              <h2 className="mt-5 text-3xl leading-[1.1] tracking-[-.04em] lg:text-4xl">
                {study.title}
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#62675f]">
                {study.description}
              </p>
              <p className="mt-7 max-w-xs border-l-2 border-[#a65332] pl-4 font-mono text-[10px] leading-6 text-[#62675f]">
                {study.principle}
              </p>
            </div>
            {study.component}
          </Reveal>
        </section>
      ))}
    </>
  );
}
