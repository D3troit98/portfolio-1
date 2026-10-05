import Link from 'next/link';
import Image from 'next/image';
import { Section, SectionDivider, SectionTitle } from '@/styles/GlobalComponents';
import { projects } from '@/constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">Selected work</p>
        <SectionTitle main>Projects</SectionTitle>
      </div>
      <p className="max-w-sm text-sm leading-relaxed text-slate-400">A collection of websites and applications, built with care from interface to infrastructure.</p>
    </div>
    <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      {projects.map((project, index) => (
        <article key={project.id} className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#141e2e] transition-colors hover:border-[#78c8c1]/40">
          <Link href={project.visit} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`} className="relative block aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-800">
            <Image src={project.image} alt={`${project.title} website preview`} fill sizes="(max-width: 767px) 100vw, (max-width: 1280px) 50vw, 580px" className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
          </Link>
          <div className="flex flex-1 flex-col p-5 sm:p-7">
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.title}</h3>
              <span className="pt-1 font-mono text-xs text-slate-500">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-slate-400">{project.description}</p>
            <ul aria-label="Technologies used" className="mb-6 flex flex-wrap gap-2">
              {project.tags.map(tag => <li key={tag} className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300">{tag}</li>)}
            </ul>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm">
              <Link href={project.visit} target="_blank" rel="noopener noreferrer" className="font-medium text-[#78c8c1] transition-colors hover:text-white">Visit app <span aria-hidden="true">↗</span></Link>
              {project.source ? <Link href={project.source} target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-white">Source code <span aria-hidden="true">↗</span></Link> : <span className="text-xs text-slate-500">Private repository</span>}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export default Projects;
