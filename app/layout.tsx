import { Noto_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import '@/styles/loadAnimation.css';
import '@/styles/tailwind.css';
import '@code-hike/mdx/dist/index.css';
import Script from 'next/script';

const notoSans = Noto_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  description:
    'Join me on a coding adventure as I explore web development on a path to become a full-stack developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script
        id="analytics"
        async
        src="https://fdukat-analytics.vercel.app/tracker.js"
        data-ackee-server="https://fdukat-analytics.vercel.app"
        data-ackee-domain-id="18994671-ea21-4f9d-bac1-73398cc82540"
      />
      <body className={`${notoSans.className} bg-background min-h-screen relative`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
