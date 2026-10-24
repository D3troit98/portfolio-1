'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useCalmMotion } from '@/components/Portfolio/Motion';

export default function SpringField() {
  const bounds = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [stiffness, setStiffness] = useState(160);
  const [damping, setDamping] = useState(12);
  const reduced = useCalmMotion();
  const animation = useRef<ReturnType<typeof animate>[]>([]);
  const length = useTransform(() => Math.hypot(x.get(), y.get()));
  const angle = useTransform(
    () => (Math.atan2(y.get(), x.get()) * 180) / Math.PI
  );
  const stop = useCallback(
    () => animation.current.forEach((control) => control.stop()),
    []
  );
  useEffect(() => stop, [stop]);
  const release = () => {
    stop();
    const settings = reduced
      ? { duration: 0 }
      : { type: 'spring' as const, stiffness, damping };
    animation.current = [animate(x, 0, settings), animate(y, 0, settings)];
  };

  return (
    <div className="overflow-hidden rounded-lg border border-[#48574c] bg-[#252e29] text-[#f6f5ef]">
      <div className="flex justify-between border-b border-white/15 px-5 py-4 font-mono text-[10px] text-[#c0c7c0]">
        <span>01 / SPRING FIELD</span>
        <span>Pull → release → return</span>
      </div>
      <div
        ref={bounds}
        className="spring-playground relative mx-4 my-4 h-[290px] rounded border border-white/10 sm:mx-6 sm:h-[330px]"
      >
        <div className="layer-grid pointer-events-none absolute inset-0 opacity-30" />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 h-px w-px bg-[#e3b491]"
          style={{ scaleX: length, rotate: angle, transformOrigin: '0 50%' }}
        />
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6f5ef]"
        />
        <motion.button
          type="button"
          drag
          dragConstraints={bounds}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={stop}
          onDragEnd={release}
          onKeyDown={(event) => {
            const deltas: Record<string, [number, number]> = {
              ArrowLeft: [-20, 0],
              ArrowRight: [20, 0],
              ArrowUp: [0, -20],
              ArrowDown: [0, 20],
            };
            const delta = deltas[event.key];
            if (delta) {
              event.preventDefault();
              stop();
              x.set(Math.max(-95, Math.min(95, x.get() + delta[0])));
              y.set(Math.max(-95, Math.min(95, y.get() + delta[1])));
            }
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              release();
            }
          }}
          style={{ x, y, touchAction: 'none' }}
          aria-label="Spring node. Drag and release, or use arrow keys to move and Enter to release."
          className="spring-node absolute top-1/2 left-1/2 -mt-6 -ml-6 flex size-12 cursor-grab items-center justify-center rounded-full border border-[#edc4a5] bg-[#a65332] active:cursor-grabbing"
        >
          <span
            aria-hidden="true"
            className="size-3 rounded-full border border-[#edc4a5]"
          />
        </motion.button>
        <p className="pointer-events-none absolute right-3 bottom-3 left-3 text-center font-mono text-[9px] text-[#c0c7c0]">
          Drag the node · Arrow keys + Enter also work
        </p>
      </div>
      <div className="grid gap-5 border-t border-white/15 p-5 sm:grid-cols-[1fr_1fr_auto] sm:items-end sm:p-6">
        <label className="lab-range-label">
          Stiffness <output>{stiffness}</output>
          <input
            aria-label="Spring stiffness"
            type="range"
            min="60"
            max="400"
            step="10"
            value={stiffness}
            onChange={(e) => setStiffness(Number(e.target.value))}
          />
        </label>
        <label className="lab-range-label">
          Damping <output>{damping}</output>
          <input
            aria-label="Spring damping"
            type="range"
            min="5"
            max="35"
            value={damping}
            onChange={(e) => setDamping(Number(e.target.value))}
          />
        </label>
        <button onClick={release} className="lab-dark-button">
          Release node ↗
        </button>
      </div>
    </div>
  );
}
