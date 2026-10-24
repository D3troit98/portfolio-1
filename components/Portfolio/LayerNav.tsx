'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const chapters = [
  ['projects', 'Interface'],
  ['application', 'Application'],
  ['data', 'Data'],
  ['connected', 'Desktop'],
];

export default function LayerNav() {
  const [active, setActive] = useState('projects');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -35% 0px', threshold: [0, 0.1, 0.3, 0.6] }
    );
    chapters.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Explore the software layers"
      className="layer-navigation sticky top-0 z-20 -mx-5 border-y border-[#c9c9bf] bg-[#f6f5ef]/95 px-5 backdrop-blur-md sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16"
    >
      <div className="flex items-center justify-between gap-4 py-3 md:py-4">
        <span className="hidden font-mono text-[10px] uppercase tracking-widest text-[#62675f] lg:block">
          Scroll beneath the surface ↓
        </span>
        <div className="grid w-full grid-cols-4 gap-1 lg:w-auto lg:gap-3">
          {chapters.map(([id, label], index) => (
            <a
              key={id}
              href={`#${id}`}
              aria-label={
                id === 'connected'
                  ? '04 Desktop and connected systems'
                  : `${String(index + 1).padStart(2, '0')} ${label}`
              }
              aria-current={active === id ? 'location' : undefined}
              className="relative rounded px-1.5 py-3 text-center text-[10px] sm:px-4 sm:text-xs"
            >
              {active === id && (
                <motion.span
                  layoutId="chapter-indicator"
                  className="absolute inset-0 rounded bg-[#e5e5da]"
                  transition={{ type: 'spring', stiffness: 250, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <span className="mr-1 font-mono text-[9px] text-[#a65332] sm:mr-2">
                  0{index + 1}
                </span>
                {id === 'connected' ? (
                  <>
                    <span className="sm:hidden">Desktop</span>
                    <span className="hidden sm:inline">Desktop & systems</span>
                  </>
                ) : (
                  label
                )}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
