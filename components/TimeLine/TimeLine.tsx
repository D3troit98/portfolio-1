import AnimatedTimeline from './AnimatedTimeline';
import { Section, SectionDivider, SectionTitle } from '@/styles/GlobalComponents';

const Timeline = () => (
  <Section id="about">
    <SectionDivider />
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">The story so far</p>
        <SectionTitle main>About Me</SectionTitle>
        <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
          I’m Ebuka Micheal Duruaku, a software engineer based in Lagos, Nigeria,
          with over four years of experience building web, backend, and desktop
          applications. My work spans JavaScript and TypeScript, Go, C++, and Rust.
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          I enjoy working on the systems behind an application as much as its
          interface: APIs, databases, multithreaded software, and cloud integrations.
          I’m currently focused on backend and systems programming with Rust,
          building on production experience with Rust applications and performance-critical software.
        </p>
        <div className="mt-8 rounded-xl border border-[#78c8c1]/20 bg-[#78c8c1]/5 p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-[#78c8c1]">Education</p>
          <h3 className="mt-3 text-base font-medium text-white">BSc. Computer Science</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">Federal University of Technology Owerri</p>
        </div>
      </div>
      <AnimatedTimeline />
    </div>
  </Section>
);

export default Timeline;
