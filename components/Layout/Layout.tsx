import Link from 'next/link';

import { MDXProvider } from '@mdx-js/react';

import styles from './Layout.module.css';

const Heading = {
  H1: ({ children }) => <h1 className={styles.heading1}>{children}</h1>,
  H2: ({ children }) => <h2 className={styles.heading2}>{children}</h2>,
  H3: ({ children }) => <h3 className={styles.heading3}>{children}</h3>,
  H4: ({ children }) => <h4 className={styles.heading4}>{children}</h4>,
  H5: ({ children }) => <h5 className={styles.heading5}>{children}</h5>,
  H6: ({ children }) => <h6 className={styles.heading6}>{children}</h6>,
};

const Paragraph = {
  P: ({ children }) => <p className={styles.paragraph}>{children}</p>,
};

const ArticleLink = {
  Anchor: ({ children, ...rest }) => (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  ),
};

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  p: Paragraph.P,
  a: ArticleLink.Anchor,
};

export default function Layout({ children, meta }: any) {
  return (
    // @ts-ignore
    <MDXProvider components={components}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{meta.title}</h1>
        <p className={styles.date}>{meta.date}</p>
        <p className={styles.return}>
          <Link href="/">{'< Return'}</Link>
        </p>
        {children}
      </div>
    </MDXProvider>
  );
}
