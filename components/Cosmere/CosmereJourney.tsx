'use client';

import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useCalmMotion } from '@/components/Portfolio/Motion';
import { worlds } from './worlds';

type World = (typeof worlds)[number];

function WorldDrawing({ world }: { world: World }) {
  return (
    <svg
      viewBox="0 0 400 220"
      role="img"
      aria-label={`Original abstract illustration: ${world.motif}`}
      className="h-auto w-full"
    >
      <defs>
        <clipPath id={`clip-${world.id}`}>
          <rect x="0" y="0" width="400" height="220" rx="4" />
        </clipPath>
      </defs>
      <g
        clipPath={`url(#clip-${world.id})`}
        fill="none"
        stroke="#a65332"
        strokeWidth="1"
      >
        {world.shapes === 'mist' && (
          <>
            {Array.from({ length: 12 }, (_, i) => (
              <path
                key={i}
                opacity={0.25 + i * 0.045}
                d={`M-20 ${50 + i * 12} Q100 ${i % 2 === 0 ? 10 : 180} 210 ${70 + i * 10} T430 ${30 + i * 15}`}
              />
            ))}
            <circle
              cx="270"
              cy="73"
              r="29"
              fill="#a65332"
              stroke="none"
              opacity=".65"
            />
          </>
        )}
        {world.shapes === 'storm' && (
          <>
            {Array.from({ length: 7 }, (_, i) => (
              <path
                key={i}
                opacity={0.2 + i * 0.1}
                d={`M${40 + i * 18} 200 L${160 + i * 8} ${20 + i * 7} L${210 + i * 14} 150 L${265 + i * 11} ${60 + i * 10} L${350 + i * 13} 210`}
              />
            ))}
            <path
              d="M25 55 Q160 -10 370 50 M5 75 Q180 10 395 70"
              strokeDasharray="3 6"
            />
          </>
        )}
        {world.shapes === 'ribbon' &&
          Array.from({ length: 16 }, (_, i) => (
            <path
              key={i}
              opacity={0.2 + i * 0.045}
              d={`M${20 + i * 8} 190 C${230 + i * 6} 180 ${60 + i * 10} 5 ${250 + i * 7} 30`}
            />
          ))}
        {world.shapes === 'lines' && (
          <>
            <circle cx="200" cy="110" r="78" />
            <circle cx="200" cy="110" r="50" strokeDasharray="2 7" />
            <path d="M90 110 H310 M200 10 V210 M145 55 L255 165 M145 165 L255 55" />
            <rect
              x="162"
              y="72"
              width="76"
              height="76"
              transform="rotate(45 200 110)"
            />
            <circle cx="200" cy="110" r="7" fill="#a65332" />
          </>
        )}
      </g>
    </svg>
  );
}

function WorldChapter({
  world,
  index,
  onEnter,
}: {
  world: World;
  index: number;
  onEnter: (index: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { margin: '-20% 0px -35% 0px' });
  const reduced = useCalmMotion();
  useEffect(() => {
    if (visible) onEnter(index);
  }, [visible, index, onEnter]);
  return (
    <section
      id={`world-${world.id}`}
      ref={ref}
      className="world-chapter relative scroll-mt-28 border-t border-[#c9c9bf] py-14 md:flex md:min-h-[78dvh] md:flex-col md:justify-center md:py-20"
    >
      <motion.div
        initial={{ y: reduced ? 0 : 24, opacity: 1 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="folio-eyebrow">
          Stop {world.number} / {world.series}
        </p>
        <div className="mt-5 flex items-start justify-between gap-3">
          <h2 className="text-5xl tracking-[-.05em] lg:text-6xl">
            {world.name}
          </h2>
          <span className="pt-3 font-mono text-[10px] text-[#a65332]">
            {world.number} / 04
          </span>
        </div>
        <h3 className="mt-5 text-xl tracking-tight">{world.title}</h3>
        <p className="mt-5 max-w-md text-sm leading-8 text-[#62675f]">
          {world.description}
        </p>
        <div className="my-6 border-y border-[#d7d6cf] py-3">
          <WorldDrawing world={world} />
        </div>
        <p className="max-w-md border-l-2 border-[#a65332] pl-5 text-sm leading-7 text-[#62675f]">
          {world.observation}
        </p>
      </motion.div>
    </section>
  );
}

function Atlas({
  active,
  onTravel,
}: {
  active: number;
  onTravel: (index: number) => void;
}) {
  const reduced = useCalmMotion();
  const world = worlds[active];
  return (
    <div className="overflow-hidden rounded-lg bg-[#252e29] text-[#f6f5ef]">
      <div className="flex justify-between border-b border-white/15 px-5 py-5 font-mono text-[9px] uppercase tracking-widest text-[#c0c7c0]">
        <span>The reader’s atlas</span>
        <span>Four connected worlds</span>
      </div>
      <div className="relative">
        <svg
          viewBox="0 0 500 500"
          role="img"
          aria-label={`Illustrated route through the Cosmere. Current world: ${world.name}.`}
          className="mx-auto w-full max-w-[500px]"
        >
          <defs>
            <pattern
              id="atlas-grid"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M25 0H0V25"
                fill="none"
                stroke="#748273"
                strokeWidth=".4"
                opacity=".3"
              />
            </pattern>
          </defs>
          <rect width="500" height="500" fill="url(#atlas-grid)" />
          <circle
            cx="250"
            cy="250"
            r="195"
            fill="none"
            stroke="#83927e"
            strokeWidth=".6"
            opacity=".4"
          />
          <circle
            cx="250"
            cy="250"
            r="125"
            fill="none"
            stroke="#83927e"
            strokeWidth=".6"
            strokeDasharray="2 8"
            opacity=".4"
          />
          {Array.from({ length: 30 }, (_, i) => (
            <circle
              key={i}
              cx={30 + ((i * 137) % 440)}
              cy={25 + ((i * 97) % 440)}
              r={i % 4 === 0 ? 1.5 : 0.8}
              fill="#c5cbbb"
              opacity={0.2 + (i % 4) * 0.12}
            />
          ))}
          <path
            d="M130 160 Q225 30 345 125 Q460 240 370 345 Q260 455 145 370"
            fill="none"
            stroke="#77836f"
            strokeWidth="1"
            strokeDasharray="3 7"
          />
          <motion.path
            d="M130 160 Q225 30 345 125 Q460 240 370 345 Q260 455 145 370"
            fill="none"
            stroke="#e2af88"
            strokeWidth="1.5"
            initial={false}
            animate={{ pathLength: active / 3 }}
            transition={{ duration: reduced ? 0 : 0.85, ease: 'easeInOut' }}
          />
          {worlds.map((item, index) => (
            <g key={item.id} opacity={active === index ? 1 : 0.55}>
              <circle
                cx={item.x}
                cy={item.y}
                r={active === index ? 34 : 24}
                fill="#303e33"
                stroke={active === index ? '#e2af88' : '#83927e'}
                strokeWidth="1"
              />
              <circle
                cx={item.x}
                cy={item.y}
                r="15"
                fill={active === index ? '#a65332' : '#4d5d4c'}
              />
              <path
                d={`M${item.x - 36} ${item.y + 6} Q${item.x} ${item.y + 22} ${item.x + 36} ${item.y - 5}`}
                fill="none"
                stroke="#b9c3ab"
                strokeWidth=".7"
              />
              <text
                x={item.x}
                y={item.y + 54}
                textAnchor="middle"
                fill="#f6f5ef"
                fontSize="12"
                fontFamily="monospace"
              >
                {item.name}
              </text>
            </g>
          ))}
          <motion.g
            animate={{ x: world.x, y: world.y }}
            transition={{
              type: 'spring',
              stiffness: 70,
              damping: 22,
              duration: reduced ? 0 : undefined,
            }}
          >
            <path d="M0 -46 L4 -39 L0 -32 L-4 -39Z" fill="#edc4a5" />
          </motion.g>
          <text
            x="250"
            y="265"
            fill="#b4beac"
            textAnchor="middle"
            fontFamily="serif"
            fontStyle="italic"
            fontSize="19"
          >
            the Cosmere
          </text>
        </svg>
      </div>
      <div className="border-t border-white/15 px-5 py-5 sm:px-7">
        <div aria-live="polite" aria-atomic="true" className="min-h-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={world.id}
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: reduced ? 1 : 0 }}
              transition={{ duration: reduced ? 0 : 0.18 }}
              className="flex items-baseline justify-between gap-3"
            >
              <span className="text-xl tracking-tight">{world.name}</span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#d9b292]">
                {world.motif}
              </span>
            </motion.p>
          </AnimatePresence>
        </div>
        <div
          role="group"
          aria-label="Choose a world to visit"
          className="grid grid-cols-4 gap-1"
        >
          {worlds.map((item, index) => (
            <button
              key={item.id}
              onClick={() => onTravel(index)}
              aria-pressed={active === index}
              className={`min-h-10 rounded px-1 py-2 text-[10px] transition-colors ${active === index ? 'bg-[#f6f5ef] text-[#252e29]' : 'text-[#c0c7c0] hover:bg-white/10'}`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CosmereJourney() {
  const [active, setActive] = useState(0);
  const route = useRef<HTMLDivElement>(null);
  const reduced = useCalmMotion();
  const { scrollYProgress } = useScroll({
    target: route,
    offset: ['start start', 'end end'],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const travel = (index: number) => {
    setActive(index);
    document
      .getElementById(`world-${worlds[index].id}`)
      ?.scrollIntoView({
        behavior: reduced ? 'instant' : 'smooth',
        block: 'start',
      });
  };
  return (
    <div ref={route}>
      <div className="sticky top-0 z-20 -mx-5 border-y border-[#c9c9bf] bg-[#f6f5ef]/95 px-5 py-3 backdrop-blur-md sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16">
        <nav aria-label="World journey" className="grid grid-cols-4 gap-1">
          {worlds.map((world, index) => (
            <button
              key={world.id}
              aria-current={active === index ? 'location' : undefined}
              onClick={() => travel(index)}
              className={`relative min-h-10 rounded px-1 py-2 text-xs ${active === index ? 'text-[#a65332]' : 'text-[#62675f]'}`}
            >
              <span className="mr-1 font-mono text-[9px]">{world.number}</span>
              {world.name}
            </button>
          ))}
        </nav>
        <motion.div
          aria-hidden="true"
          className="absolute right-0 bottom-0 left-0 h-px origin-left bg-[#a65332]"
          style={{ scaleX: progress }}
        />
      </div>
      <div className="grid gap-10 py-10 md:grid-cols-[1fr_.9fr] md:gap-14 lg:gap-24">
        <aside
          aria-label="Cosmere journey map"
          className="self-start md:sticky md:top-24"
        >
          <Atlas active={active} onTravel={travel} />
          <p className="mt-4 font-mono text-[9px] leading-5 text-[#62675f]">
            An imagined route / Original artwork / Not to scale
          </p>
        </aside>
        <div>
          {worlds.map((world, index) => (
            <WorldChapter
              key={world.id}
              world={world}
              index={index}
              onEnter={setActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
