"use client";

import { motion, useReducedMotion } from 'framer-motion';

const SectionAnimator = ({ children }: { children: React.ReactNode }) => {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div initial={{ opacity: 1, y: reducedMotion ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: reducedMotion ? 0 : 0.45, ease: 'easeOut' }} style={{ opacity: 1 }}>
      {children}
    </motion.div>
  );
};

export default SectionAnimator;
