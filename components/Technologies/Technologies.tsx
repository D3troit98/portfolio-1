'use client';

import { useState } from 'react';
import { SiCplusplus, SiDjango, SiExpress, SiFirebase, SiGit, SiMongodb, SiMysql, SiNuxt, SiQt, SiTailwindcss, SiVuedotjs, SiWebpack, SiDigitalocean } from 'react-icons/si';
import { techStackIcons } from './TechStackIcons';

const technologies = [
  { name: 'React', color: '#61dafb', icon: techStackIcons.React },
  { name: 'Next.js', color: '#e8edf4', icon: techStackIcons['Next.js'] },
  { name: 'TypeScript', color: '#3178c6', icon: techStackIcons.TypeScript },
  { name: 'Vue', color: '#41b883', icon: <SiVuedotjs /> },
  { name: 'Nuxt', color: '#00dc82', icon: <SiNuxt /> },
  { name: 'Tailwind CSS', color: '#38bdf8', icon: <SiTailwindcss /> },
  { name: 'Rust', color: '#de684f', icon: techStackIcons.Rust },
  { name: 'Go', color: '#00add8', icon: techStackIcons.Go },
  { name: 'C++', color: '#659ad2', icon: <SiCplusplus /> },
  { name: 'Qt / QML', color: '#7abd41', icon: <SiQt /> },
  { name: 'Node.js', color: '#68a063', icon: techStackIcons['Node.js'] },
  { name: 'Express', color: '#e8edf4', icon: <SiExpress /> },
  { name: 'PostgreSQL', color: '#659ac4', icon: techStackIcons.PostgreSQL },
  { name: 'MongoDB', color: '#57ad49', icon: <SiMongodb /> },
  { name: 'MySQL', color: '#62a5c3', icon: <SiMysql /> },
  { name: 'Firebase', color: '#ffca28', icon: <SiFirebase /> },
  { name: 'Python', color: '#4586b5', icon: techStackIcons.Python },
  { name: 'Django', color: '#70b69c', icon: <SiDjango /> },
  { name: 'AWS', color: '#ff9900', icon: techStackIcons.AWS },
  { name: 'Azure', color: '#0078d4', icon: techStackIcons.Azure },
  { name: 'Google Cloud', color: '#4285f4', icon: techStackIcons['Google Cloud'] },
  { name: 'DigitalOcean', color: '#0080ff', icon: <SiDigitalocean /> },
  { name: 'Git', color: '#f06b50', icon: <SiGit /> },
  { name: 'Webpack', color: '#8dd6f9', icon: <SiWebpack /> },
];

const rows = Array.from({ length: 4 }, (_, index) => technologies.slice(index * 6, index * 6 + 6));
const groups = [
  { title: 'Web & mobile', skills: 'JavaScript, TypeScript, React, React Native, Next.js, Vue, Nuxt, Tailwind CSS, Shadcn UI' },
  { title: 'Backend & systems', skills: 'Rust, Go, C++11 / C++17, Qt / QML, Node.js, Express, Python, Django' },
  { title: 'Databases', skills: 'PostgreSQL, MySQL, MongoDB, Firebase' },
  { title: 'Cloud & tools', skills: 'AWS, Azure, Google Cloud, DigitalOcean, Git, GitHub, Bitbucket, Webpack, ESLint' },
];

const Technologies = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section id="tech" aria-labelledby="tech-heading" className="container scroll-mt-8 px-6 py-16 sm:px-8 md:py-24">
      <div className="text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#78c8c1]">My toolkit</p>
        <h2 id="tech-heading" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Technologies I build with</h2>
        <p className="mt-4 text-base text-slate-400">Web interfaces. Backend systems. Desktop applications.</p>
      </div>

      <div className="tech-wall mx-auto my-10 max-w-4xl sm:my-14" data-paused={paused}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="tech-row" style={{ '--row-duration': `${42 + rowIndex * 6}s` } as React.CSSProperties}>
            {[0, 1].map(copy => (
              <ul key={copy} className="tech-track" aria-hidden={copy === 1 ? true : undefined} aria-label={copy === 0 ? groups[rowIndex].title : undefined}>
                {row.map(tech => (
                  <li key={tech.name} className="tech-tile" style={{ color: tech.color }}>
                    <span className="tech-logo" aria-hidden="true">{tech.icon}</span>
                    <span className="tech-name">{tech.name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-xl text-center">
        <p className="text-base leading-relaxed text-slate-300">From the first interface to the systems behind it, these are the tools I use to build reliable software. My current focus is Rust and backend development.</p>
        <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} className="tech-motion-control mt-5 rounded-md px-3 py-2 text-xs text-slate-400 hover:text-white">{paused ? 'Resume animation' : 'Pause animation'}</button>
      </div>
      <details className="tech-details mx-auto mt-4 max-w-4xl">
        <summary className="mx-auto w-fit cursor-pointer rounded-lg border border-white/15 px-5 py-3 text-sm text-slate-200 transition-colors hover:border-[#78c8c1]/50 hover:bg-white/5">View full stack</summary>
        <dl className="mt-8 grid gap-x-10 gap-y-6 rounded-xl border border-white/10 bg-[#141e2e] p-6 text-left sm:grid-cols-2 sm:p-8">
          {groups.map(group => (
            <div key={group.title}>
              <dt className="text-sm font-medium text-[#78c8c1]">{group.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">{group.skills}</dd>
            </div>
          ))}
        </dl>
      </details>
    </section>
  );
};

export default Technologies;
