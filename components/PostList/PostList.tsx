import Link from 'next/link';

import { Rss } from 'feather-icons-react/build';

import styles from './PostList.module.css';

export default function postList() {
  return (
    <section className={styles.postListWrapper}>
      <h2 className={styles.postListHeading}>
        Blog posts <Rss size={16} />
      </h2>
      <article className={styles.postListElement}>
        <p className={styles.postListElementDate}>8 May 2023</p>
        <h3 className={styles.postListElementHeading}>
          <Link href="/blog/hello_world" className={styles.postListElementLink}>
            Hello World!
          </Link>
        </h3>
        <p className={styles.postListElementDescription}>
          In this intro post, I share reasons behind starting and blog and
          adopting learn-in-public mindset.
        </p>
      </article>
    </section>
  );
}
