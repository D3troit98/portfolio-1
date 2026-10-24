'use client';

import { useEffect, useRef, useState } from 'react';
import { useCalmMotion } from './Motion';
import { AnimatePresence, motion, useInView } from 'framer-motion';

const layers = [
  {
    name: 'Interface',
    tools: 'React · TypeScript · Next.js',
    title: 'The part you feel.',
    description:
      'Clear interfaces, reusable components, and considered interactions. This is where a system meets a person.',
    target: '#projects',
    link: 'Explore web projects',
  },
  {
    name: 'Application',
    tools: 'Rust · Go · Node.js',
    title: 'The logic underneath.',
    description:
      'APIs, application behaviour, and the work of making existing software more reliable.',
    target: '#application',
    link: 'Explore application work',
  },
  {
    name: 'Data',
    tools: 'PostgreSQL · MongoDB · SQL',
    title: 'The memory of a system.',
    description:
      'Backend development with Django and PostgreSQL, plus database integration in desktop applications.',
    target: '#data',
    link: 'Explore database experience',
  },
  {
    name: 'Desktop & connected systems',
    shortName: 'Desktop & systems',
    tools: 'C++ · Qt / QML · AWS IoT',
    title: 'Beyond the browser.',
    description:
      'C++ and Qt desktop applications, OpenCV image processing projects, and professional AWS IoT integrations.',
    target: '#connected',
    link: 'Explore desktop & connected work',
  },
];

export default function LayerExplorer() {
  const [active, setActive] = useState(0);
  const reduced = useCalmMotion();
  const explorerRef = useRef<HTMLElement>(null);
  const inView = useInView(explorerRef, { amount: 0.35 });
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const rotating =
    !reduced && !paused && !hovered && !focused && inView && pageVisible;

  useEffect(() => {
    const updateVisibility = () =>
      setPageVisible(document.visibilityState === 'visible');
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () =>
      document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % layers.length),
      6500
    );
    return () => window.clearInterval(timer);
  }, [rotating, active]);
  const layer = layers[active];

  return (
    <aside
      ref={explorerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setFocused(false);
      }}
      className="layer-explorer relative overflow-hidden rounded-lg bg-[#252e29] text-[#f6f5ef]"
      aria-label="Explore the layers of my work"
    >
      <div className="relative flex justify-between border-b border-white/15 px-6 py-5 font-mono text-[10px] uppercase tracking-widest text-[#c0c7c0]">
        <span>System explorer</span>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          disabled={!!reduced}
          aria-pressed={paused}
          aria-label={
            paused
              ? 'Resume automatic layer rotation'
              : 'Pause automatic layer rotation'
          }
          className="min-h-8 rounded border border-white/20 px-2 text-[9px] uppercase tracking-wider hover:bg-white/10 disabled:cursor-default disabled:opacity-70"
        >
          {reduced ? 'Manual mode' : paused ? 'Resume ↻' : 'Pause Ⅱ'}
        </button>
      </div>
      <div
        className="layer-stage relative flex h-[240px] items-center justify-center sm:h-[270px]"
        aria-hidden="true"
      >
        <div className="layer-grid absolute inset-0 opacity-30" />
        {layers.map((item, index) => (
          <motion.div
            key={item.name}
            className={`system-plane absolute flex items-center justify-between rounded-md border px-5 ${active === index ? 'border-[#d9a27d] bg-[#a65332] text-white' : 'border-[#6a776b] bg-[#303d34] text-[#b9c1b9]'}`}
            animate={{
              y: (index - 1.5) * 53 - (active === index ? 12 : 0),
              x: (index - 1.5) * -13,
              rotateX: reduced ? 0 : 52,
              rotateZ: reduced ? 0 : -25,
              scale: active === index ? 1.04 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 140,
              damping: 23,
              duration: reduced ? 0 : undefined,
            }}
            style={{
              width: '66%',
              height: 84,
              zIndex: active === index ? 6 : 4 - index,
            }}
          >
            <span className="font-mono text-[10px]">0{index + 1}</span>
            <span className="text-sm tracking-tight">
              {'shortName' in item ? item.shortName : item.name}
            </span>
            <span>↗</span>
          </motion.div>
        ))}
      </div>
      <div className="relative px-6 pb-7 sm:px-8">
        <div
          className="grid grid-cols-2 gap-2 border-y border-white/15 py-4"
          role="group"
          aria-label="Choose a software layer"
        >
          {layers.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              aria-label={`0${index + 1} ${item.name}`}
              aria-pressed={active === index}
              aria-controls="layer-description"
              className={`layer-choice flex min-h-10 items-center gap-2 rounded px-2 py-2 text-left text-xs transition-colors ${active === index ? 'bg-white/10 text-[#f1c7a6]' : 'text-[#c0c7c0] hover:bg-white/5'}`}
            >
              <span className="font-mono text-[9px] opacity-70">
                0{index + 1}
              </span>
              {'shortName' in item ? item.shortName : item.name}
            </button>
          ))}
        </div>
        <div
          id="layer-description"
          className="min-h-[230px] pt-5"
          aria-live={rotating ? 'off' : 'polite'}
          aria-atomic="true"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : -6 }}
              transition={{ duration: reduced ? 0 : 0.18 }}
            >
              <p className="font-mono text-[10px] text-[#c0c7c0]">
                {layer.tools}
              </p>
              <h2 className="mt-3 text-2xl tracking-tight">{layer.title}</h2>
              <p className="mt-3 max-w-sm text-xs leading-6 text-[#c0c7c0]">
                {layer.description}
              </p>
              <a
                href={layer.target}
                className="mt-5 inline-flex items-center gap-5 text-xs text-[#f1c7a6] underline-offset-4 hover:underline"
              >
                {layer.link}
                <span aria-hidden="true">↘</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </aside>
  );
}
