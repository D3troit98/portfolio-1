import { Layout } from '@/layout/Layout';
import Hero from '@/components/Hero/Hero';
import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation';
import Projects from '@/components/Projects/Projects';
import Technologies from '@/components/Technologies/Technologies';
import Timeline from '@/components/TimeLine/TimeLine';
import Acomplishments from '@/components/Acomplishments/Acomplishments';
import SectionAnimator from '@/components/SectionAnimator/SectionAnimator';

export default async function Home() {
  return (
    <Layout>
      <SectionAnimator>
        <section className="relative overflow-hidden flex">
          <Hero />
          <BackgroundAnimation />
        </section>
      </SectionAnimator>
      <SectionAnimator>
        <Projects />
      </SectionAnimator>
      <SectionAnimator>
        <Technologies />
      </SectionAnimator>
      <SectionAnimator>
        <Timeline />
      </SectionAnimator>
      <SectionAnimator>
        <Acomplishments />
      </SectionAnimator>
    </Layout>
  );
}
