import type { AppProps } from 'next/app';

import { Roboto } from 'next/font/google';

import '../styles/reset.css';
import '../styles/global.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}
