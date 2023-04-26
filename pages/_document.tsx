import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Hey, my name is Filip, I am a software developer and this is a place for my thoughts and opinions about programming. Welcome!"
        />
        <meta
          name="keywords"
          content="Filip, Dukat, Software Developer, Frontend, React, Next.js, Programming, Poland, Polska, programista, engineer, programmer, blog"
        />
        <meta name="author" content="Filip Dukat" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
