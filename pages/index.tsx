import Head from 'next/head';

import Container from '@/components/Container';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Filip Dukat</title>
      </Head>
      <Container>
        <Hero />
      </Container>
    </>
  );
}
