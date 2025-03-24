import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Platforms - World Class Tutoring',
  description:
    'Get world class tutoring from world class tutors. Unlock your educational potential with SP HUB.',
};

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
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
}
