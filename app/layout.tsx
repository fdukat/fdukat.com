import { Noto_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import '@/styles/loadAnimation.css';
import '@/styles/tailwind.css';

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
      <body className={`${notoSans.className} bg-background`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
