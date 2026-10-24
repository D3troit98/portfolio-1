'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

const CalmMotion = createContext(false);

export function useCalmMotion() {
  const paused = useContext(CalmMotion);
  const reduced = useReducedMotion();
  return paused || reduced;
}

export function MotionRoot({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const calm = paused || !!reduced;
  return (
    <CalmMotion.Provider value={calm}>
      <MotionConfig reducedMotion={calm ? 'always' : 'user'}>
        <div className={calm ? 'folio-motion-off' : undefined}>{children}</div>
        <button
          type="button"
          aria-pressed={paused}
          aria-label={paused ? 'Enable full motion' : 'Reduce motion'}
          onClick={() => setPaused((value) => !value)}
          className="motion-toggle fixed right-4 bottom-4 z-30 rounded-full border border-[#c9c9bf] bg-[#f6f5ef] px-4 py-2.5 font-mono text-[10px] text-[#242b26] shadow-sm transition-colors hover:bg-[#e5e5da] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a65332]"
        >
          Motion: {calm ? 'reduced' : 'full'}
        </button>
      </MotionConfig>
    </CalmMotion.Provider>
  );
}

export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useCalmMotion();
  return (
    <motion.div
      className={className}
      initial={{ y: reduced ? 0 : 28, opacity: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
