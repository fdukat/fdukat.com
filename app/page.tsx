import Hero from '@/components/Hero';
import Posts from '@/components/Posts';

export const metadata = {
  title: 'Home | Filip Dukat',
};

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Posts />
      </main>
    </>
  );
}
