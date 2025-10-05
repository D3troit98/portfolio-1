"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SectionAnimator = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.1, // Percentage of element in view to trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SectionAnimator;
