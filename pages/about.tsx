import Head from 'next/head';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import AboutPhoto from '@/components/AboutPhoto';
import AboutContent from '@/components/AboutContent';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>(WIP) About | Filip Dukat</title>
      </Head>
      <Container>
        <AboutPhoto />
        <AboutContent />
      </Container>
      <Footer />
    </>
  );
}
