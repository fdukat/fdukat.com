import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A software developer from Poland with a focus on React. Passionate about building elegant and functional web applications. From design to deployment, tries to implement top-quality solutions tailored to project needs."
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
