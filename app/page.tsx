import BlogPosts from '@/components/BlogPosts';
import FeaturedProjects from '@/components/FeaturedProjects';
import Hero from '@/components/Hero';

export const metadata = {
  title: 'Home | fdukat.com',
};

export default function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <FeaturedProjects />
    </main>
  );
}
