'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCalmMotion } from './Motion';
import { motion } from 'framer-motion';
import { projects } from '@/constants/constants';

const featured = [
  { id: 12, category: 'Web', type: 'Consultancy website', description: 'A bold, focused web presence for a data and digital consultancy.', focus: 'React · TypeScript · Vite · Tailwind CSS', note: 'Built the website interface with React and TypeScript, including responsive layouts and video-based brand animation.', context: 'For Loop website', result: 'A live, multi-page consultancy website.' },
  { id: 13, category: 'Full stack', type: 'Monitoring application', description: 'From a monitoring interface to the Go workers checking websites behind it.', focus: 'React · TypeScript · Go / Gin · PostgreSQL', note: 'The React client uses TanStack Router and Query. A Go/Gin API handles authenticated, team-scoped routes; PostgreSQL and sqlx store monitoring records. Background Go workers schedule website checks, with response-time history and pause/resume controls implemented in the code. The linked site is the public frontend; backend availability is separate.', context: 'Personal full-stack project · private source', result: 'A public frontend demo, backed by a separate Go monitoring implementation.' },
  {
    id: 1,
    category: 'Web',
    type: 'Business website',
    description: 'A construction company’s presence on the web.',
    focus: 'React Router v7 · TypeScript · Tailwind CSS',
    note: 'A business website built with React, TypeScript, and Tailwind CSS. The source repository is private; the public website is linked below.',
    context: 'Company website',
    result: 'A public website for Bozeam Construction.',
  },
  {
    id: 11,
    category: 'Web',
    type: 'Learning platform',
    description: 'An education-focused platform, built with Next.js.',
    focus: 'Next.js · TypeScript · Shadcn UI',
    note: 'An education-focused web application built with Next.js, TypeScript, and Shadcn UI. The source repository is private.',
    context: 'Education platform',
    result: 'A public web platform for Solutions Platforms.',
  },
  {
    id: 4,
    category: 'Full stack',
    type: 'Community application',
    description: 'A place to post and share memories from anime conventions.',
    focus: 'React · Express · MongoDB',
    note: 'A React interface connected to a Node.js and Express backend with MongoDB. The public repository provides the implementation details.',
    context: 'Community project',
    result:
      'A full-stack application with a public demo and source repository.',
  },
];

const addedProjects = [
  { id: 12, title: 'For Loop', visit: 'https://for-loop-rust.vercel.app/', image: '/images/forloop-site.png', source: '' },
  { id: 13, title: 'Webpulse', visit: 'https://webpulse-livid.vercel.app/', image: '/images/webpulse-site.png', source: '' },
];
const findProject = (id: number) => [...projects, ...addedProjects].find(project => project.id === id)!;

type Featured = (typeof featured)[number];

function ProjectPreview({ item, index }: { item: Featured; index: number }) {
  const [mode, setMode] = useState<'desktop' | 'mobile'>('desktop');
  const project = findProject(item.id);
  const reduced = useCalmMotion();

  return (
    <div className="project-preview overflow-hidden rounded-lg border border-[#c9c9bf] bg-[#e9e9df]">
      <div className="flex min-h-12 items-center justify-between gap-2 border-b border-[#c9c9bf] px-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-[#a65332]" />
          <span className="size-1.5 rounded-full bg-[#999e91]" />
          <span className="size-1.5 rounded-full bg-[#b8bcaf]" />
        </span>
        <span className="font-mono text-[9px] text-[#62675f]">
          PROJECT / 0{index + 1}
        </span>
        <div
          className="flex gap-1"
          role="group"
          aria-label={`${project.title} preview format`}
        >
          {(['desktop', 'mobile'] as const).map((format) => (
            <button
              key={format}
              aria-pressed={mode === format}
              onClick={() => setMode(format)}
              aria-label={`${project.title} ${format} frame`}
              className={`min-h-9 rounded px-2 text-[9px] capitalize ${mode === format ? 'bg-[#242b26] text-[#f6f5ef]' : 'text-[#62675f] hover:bg-[#d7d9cb]'}`}
            >
              {format}
            </button>
          ))}
        </div>
      </div>
      <div className="preview-grid flex min-h-[260px] items-center justify-center overflow-hidden px-5 py-8 sm:min-h-[350px] sm:px-9 sm:py-10">
        <motion.a
          layout
          href={project.visit}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} (opens in a new tab)`}
          className={`project-window group relative block overflow-hidden border-[5px] border-[#f6f5ef] bg-[#f6f5ef] shadow-[0_14px_30px_-12px_rgba(36,43,38,.25)] ${mode === 'mobile' ? 'aspect-[9/16] w-[145px] rounded-[18px] sm:w-[165px]' : 'aspect-[16/10] w-full rounded-md'}`}
          transition={{
            type: 'spring',
            stiffness: 160,
            damping: 24,
            duration: reduced ? 0 : undefined,
          }}
        >
          <Image src={project.image} alt={`${project.title} screenshot in a ${mode} presentation frame`} fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover object-top transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.035] group-focus-visible:scale-[1.035]" />
          <span className="absolute inset-x-0 bottom-0 flex justify-between bg-[#242b26]/95 px-4 py-3 text-[10px] text-[#f6f5ef] opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Visit website<span aria-hidden="true">↗</span>
          </span>
        </motion.a>
      </div>
      <p className="border-t border-[#c9c9bf] px-4 py-3 font-mono text-[9px] text-[#62675f]">
        {mode === 'mobile'
          ? 'Screenshot crop in a narrow frame · Open website to test responsiveness'
          : 'Project screenshot · Select a frame to explore'}
      </p>
    </div>
  );
}

export default function SelectedWork() {
  const reduced = useCalmMotion();
  const visible = [featured.find(project => project.id === 1)!, featured.find(project => project.id === 13)!];
  const grid = [
    { ...findProject(12), label: 'Consultancy website' },
    { ...findProject(2), title: 'Ulta Clone', label: 'Beauty retail interface study' },
    { id: 14, title: 'Detroit Store', visit: 'https://ecommerce-store-pied-psi.vercel.app/', image: '/images/detroit store.png', label: 'Commerce interface' },
    { ...findProject(11), label: 'Education platform' },
    { ...findProject(4), label: 'Community application' },
    { ...findProject(7), label: 'GraphQL / HyGraph publishing project' },
  ];

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="mb-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="folio-eyebrow">Layer 01 / Interface</p>
          <h2 className="mt-5 text-4xl leading-[1.1] tracking-[-.045em] md:text-5xl">
            It starts with
            <br />
            <span className="font-serif font-normal italic text-[#a65332]">
              what you experience.
            </span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#62675f]">
            Two projects up close, followed by more of my work across the web.
            Explore an interface or look beneath the surface.
          </p>
        </div>
      </div>
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {visible.map((item, index) => {
            const project = findProject(item.id);
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -10 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
                className="min-w-0"
              >
                <ProjectPreview item={item} index={index} />
                <div className="pt-6 md:py-5">
                  <p className="folio-eyebrow">{item.type}</p>
                  <h3 className="mt-3 text-2xl tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#62675f]">
                    {item.description}
                  </p>
                  <p className="mt-5 font-mono text-[10px] leading-6 text-[#62675f]">
                    {item.focus}
                  </p>
                  <details className="folio-experience mt-6 border-t border-[#c9c9bf] pt-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                      Beneath the surface
                      <span aria-hidden="true" className="folio-expand text-xl">
                        +
                      </span>
                    </summary>
                    <div className="mt-4 text-sm leading-7 text-[#62675f]">
                      <p>{item.note}</p>
                      <dl className="mt-4 space-y-3">
                        <div>
                          <dt className="font-medium text-[#242b26]">
                            Context
                          </dt>
                          <dd>{item.context}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-[#242b26]">
                            Deliverable
                          </dt>
                          <dd>{item.result}</dd>
                        </div>
                      </dl>
                    </div>
                  </details>
                  <div className="mt-5 flex flex-wrap gap-6 text-sm font-medium">
                    <a
                      className="folio-text-link"
                      href={project.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website ↗
                    </a>
                    {project.source && (
                      <a
                        className="folio-text-link"
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source code ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
      </div>
      <div className="mt-12 border-t border-[#c9c9bf] pt-8">
        <h3 className="folio-eyebrow mb-6">More interfaces / selected work</h3>
        <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map(project => (
            <a key={project.id} href={project.visit} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`} className="group min-w-0">
              <div className={`relative aspect-[16/9] overflow-hidden rounded border border-[#c9c9bf] bg-[#e9e9df]`}>
                <Image src={project.image} alt={`${project.title} website screenshot`} fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw" className={`object-cover object-top transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.025] group-focus-visible:scale-[1.025]`} />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3"><h4 className="text-base font-medium group-hover:text-[#a65332]">{project.title}</h4><span aria-hidden="true">↗</span></div>
              <p className="mt-1 text-xs leading-6 text-[#62675f]">{project.label}</p>
            </a>
          ))}
        </div>
      </div>
      <a
        href="https://github.com/D3troit98?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="folio-text-link mt-12 inline-flex items-center gap-3 text-sm"
      >
        More experiments and projects on GitHub{' '}
        <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
