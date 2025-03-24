import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, MessageSquareText } from 'lucide-react';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';

const Hero = () => (
  <Section row nopadding>
    <div className="w-full md:w-4/5 flex flex-col">
      <SectionTitle main>
        Ebuka Duruaku <br />
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I&apos;m a full-stack developer in Lagos, Nigeria, specializing in HTML,
        CSS, JavaScript, React, and Next.js. I have experience with Node.js,
        MongoDB, RESTful APIs, Git, testing, and Agile methodology. My expertise
        includes state management, React Hooks, and server-side rendering.
        I&apos;m passionate about building functional applications with code.
      </SectionText>
      <div className="flex items-center gap-4 mt-4">
        <Button
          asChild
          className="h-12
          bg-gradient-to-l
          from-purple-600 to-teal-500
          hover:from-purple-700 hover:to-teal-600
          dark:from-[#B133FF] dark:to-[#00DBD8]
          dark:hover:from-[#B133FF] dark:hover:to-[#00DBD8]
          text-white"
        >
          <Link
            href="https://wa.me/message/IGUCQGTDTLLOG1"
            target="_blank"
            className="flex items-center gap-2"
          >
            <MessageSquareText className="w-5 h-5" />
            WhatsApp Me
          </Link>
        </Button>

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
      </div>
    </div>
  </Section>
);

export default Hero;
