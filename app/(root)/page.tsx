import { Layout } from '@/layout/Layout';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Hero from '@/components/Hero/Hero';
import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation';
import Projects from '@/components/Projects/Projects';
import Technologies from '@/components/Technologies/Technologies';
import Timeline from '@/components/TimeLine/TimeLine';
import Acomplishments from '@/components/Acomplishments/Acomplishments';

export default async function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden flex">
        <Hero />
        <BackgroundAnimation />
      </section>

      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
}
