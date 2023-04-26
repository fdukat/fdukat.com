import Head from 'next/head';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import PostsList from '@/components/PostList';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Filip Dukat</title>
      </Head>
      <Container>
        <Hero />
        <main>
          <PostsList />
        </main>
      </Container>
      <Footer />
    </>
  );
}
