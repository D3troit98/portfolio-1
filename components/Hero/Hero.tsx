"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import ContactDialog from './ContactDialog';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero = () => (
  <Section row nopadding>
    <motion.div
      className="w-full md:w-4/5 flex flex-col"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <SectionTitle main>
          Ebuka Duruaku <br />
          Welcome to My Personal Portfolio
        </SectionTitle>
      </motion.div>
      <motion.div variants={item}>
        <SectionText>
          I&apos;m a full-stack developer in Lagos, Nigeria, specializing in HTML,
          CSS, JavaScript, React, and Next.js. I have experience with Node.js,
          MongoDB, RESTful APIs, Git, testing, and Agile methodology. My
          expertise includes state management, React Hooks, and server-side
          rendering. I&apos;m passionate about building functional applications
          with code.
        </SectionText>
      </motion.div>
      <motion.div variants={item} className="flex items-center gap-4 mt-4">
        <ContactDialog />

        <Button
          asChild
          variant="secondary"
          className="h-12
          bg-gradient-to-l
          from-orange-500 to-purple-600
          hover:from-orange-600 hover:to-purple-700
          dark:from-[#ff622e] dark:to-[#B133FF]
          dark:hover:from-[#ff622e] dark:hover:to-[#B133FF]
          text-white"
        >
          <Link
            target="_blank"
            href="/documents/Ebuka-Micheal-Duruaku-Resume-20240623.pdf"
            className="flex items-center gap-2"
          >
            <FileText className="w-5 h-5" />
            View my CV
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  </Section>
);

export default Hero;
