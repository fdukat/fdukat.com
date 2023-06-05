import '@code-hike/mdx/dist/index.css';
import '../styles/reset.css';
import '../styles/global.css';

import { Lato } from 'next/font/google';

const lato = Lato({ weight: ['300', '400', '700'], subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
