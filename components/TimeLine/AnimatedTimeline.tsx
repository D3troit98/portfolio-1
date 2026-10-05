'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { TimeLineData } from '@/constants/constants';

const AnimatedTimeline = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.13 } } }}
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-white/10" />
      <motion.span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-px origin-top bg-[#78c8c1]/50"
        variants={{ hidden: { scaleY: reducedMotion ? 1 : 0 }, visible: { scaleY: 1 } }}
        transition={{ duration: reducedMotion ? 0 : 1.2, ease: 'easeOut' }}
      />
      <ol aria-label="Development journey" className="pl-6 sm:pl-8">
      {TimeLineData.map((item, index) => (
        <motion.li
          key={item.year}
          className="group relative pb-8 last:pb-0"
          variants={{ hidden: { opacity: reducedMotion ? 1 : 0, x: reducedMotion ? 0 : 16 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: reducedMotion ? 0 : 0.45, ease: 'easeOut' }}
        >
          <motion.span
            aria-hidden="true"
            className={`absolute -left-[28px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-[#0f1624] sm:-left-[36px] ${index === 0 ? 'bg-[#78c8c1]' : 'bg-slate-500'}`}
            variants={{ hidden: { scale: reducedMotion ? 1 : 0 }, visible: { scale: 1 } }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
          />
          <p className={`font-mono text-xs ${index === 0 ? 'text-[#78c8c1]' : 'text-slate-500'}`}>{item.year}</p>
          <h3 className="mt-2 text-lg font-medium text-slate-200 transition-colors group-hover:text-[#78c8c1]">{item.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{item.text}</p>
        </motion.li>
      ))}
      </ol>
    </motion.div>
  );
};

export default AnimatedTimeline;
