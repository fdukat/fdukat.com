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
        <p className={styles.postListElementDate}>27th April 2023</p>
        <h3 className={styles.postListElementHeading}>
          <Link href="/blog/example" className={styles.postListElementLink}>
            Example blog post title
          </Link>
        </h3>
        <p className={styles.postListElementDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra quis nibh gravida mattis.
        </p>
      </article>
      <article className={styles.postListElement}>
        <p className={styles.postListElementDate}>26th April 2023</p>
        <h3 className={styles.postListElementHeading}>
          <Link href="/blog/example" className={styles.postListElementLink}>
            Second example blog post title
          </Link>
        </h3>
        <p className={styles.postListElementDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra quis nibh gravida mattis.
        </p>
      </article>
      <article className={styles.postListElement}>
        <p className={styles.postListElementDate}>25th April 2023</p>
        <h3 className={styles.postListElementHeading}>
          <Link href="/blog/example" className={styles.postListElementLink}>
            Third example blog post title
          </Link>
        </h3>
        <p className={styles.postListElementDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra quis nibh gravida mattis.
        </p>
      </article>
    </section>
  );
}
