import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section, SectionText } from '@/styles/GlobalComponents';
import ContactDialog from './ContactDialog';

const Hero = () => (
  <Section row nopadding>
    <div className="relative z-10 w-full max-w-3xl py-6 md:py-12">
      <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#78c8c1]">
        <span className="h-px w-8 bg-current" /> Software engineer · Lagos, Nigeria
      </p>
      <h1 className="mb-6 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl">
        Ebuka Duruaku<span className="text-[#78c8c1]">.</span>
        <span className="mt-3 block text-3xl font-normal leading-tight text-slate-400 sm:text-4xl md:text-5xl">Building ideas into<br className="hidden sm:block" /> thoughtful applications.</span>
      </h1>
      <SectionText>
        I’m a software engineer with over four years of experience building
        web, backend, and desktop applications. From React interfaces to
        Rust, Go, and C++ systems, I care about software that works well —
        and the details that make it reliable.
      </SectionText>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <ContactDialog />
        <Button asChild variant="outline" className="h-12 rounded-lg border-white/15 bg-transparent px-5 text-slate-200 hover:bg-white/5 hover:text-white">
          <Link target="_blank" rel="noopener noreferrer" href="/documents/Ebuka_Micheal_Duruaku_Resume.pdf">View my CV <span aria-hidden="true">↗</span></Link>
        </Button>
      </div>
      <Link href="#projects" className="mt-12 inline-flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-[#78c8c1]">Explore my work <span aria-hidden="true">↓</span></Link>
    </div>
  </Section>
);

export default Hero;
