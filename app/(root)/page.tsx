import type { Metadata } from 'next';
import Portfolio from '@/components/Portfolio/Portfolio';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: 'https://www.d3troit.dev/' },
};

export default function Home() {
  return <Portfolio />;
}
