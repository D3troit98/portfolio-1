import { workExperience } from '@/constants/constants';
import { Section, SectionDivider, SectionTitle } from '@/styles/GlobalComponents';

const Experience = () => (
  <Section id="experience">
    <SectionDivider />
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">Teams & contributions</p>
        <SectionTitle main>Work Experience</SectionTitle>
      </div>
      <p className="max-w-sm text-sm leading-relaxed text-slate-400">From web platforms to desktop systems, a few of the teams I’ve helped build with.</p>
    </div>
    <div className="mt-4 divide-y divide-white/10 border-y border-white/10">
      {workExperience.map(job => (
        <article key={job.company} className="grid gap-5 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-semibold text-white">{job.company}</h3>
              {job.current && <span className="rounded-full border border-[#78c8c1]/20 bg-[#78c8c1]/5 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#78c8c1]">Current</span>}
            </div>
            <p className="mt-2 text-sm text-slate-300">{job.role}</p>
            <p className="mt-2 font-mono text-xs text-slate-500">{job.period}</p>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-slate-400">{job.summary}</p>
            <ul aria-label={`${job.company} technologies`} className="mt-4 flex flex-wrap gap-2">
              {job.technologies.map(tech => <li key={tech} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">{tech}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Experience;
