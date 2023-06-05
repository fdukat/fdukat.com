import ReturnButton from '@/components/ReturnButton';

import '@code-hike/mdx/dist/index.css';
import '../../styles/post.css';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ReturnButton />
      <article>{children}</article>
    </>
  );
}
