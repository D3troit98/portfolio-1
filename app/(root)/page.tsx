import { Layout } from '@/layout/Layout';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Hero from '@/components/Hero/Hero';
import BackgroundAnimation from '@/components/BackgrooundAnimation/BackgroundAnimation';
import Projects from '@/components/Projects/Projects';
import Technologies from '@/components/Technologies/Technologies';
import Timeline from '@/components/TimeLine/TimeLine';
import Acomplishments from '@/components/Acomplishments/Acomplishments';

export default async function Home() {
  //     {
  //   searchParams,
  // }: {
  //   params: Promise<{ tutorId: string }>;
  //   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  // }
  //   const currSearchParams = await searchParams;
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      {/* <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments /> */}
    </Layout>
  );
}
