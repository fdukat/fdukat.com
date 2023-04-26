import { Rss } from 'feather-icons-react/build';

import styles from './PostList.module.css';

export default function postList() {
  return (
    <section className={styles.postListWrapper}>
      <h2 className={styles.postListHeading}>
        Blog posts <Rss size={16} />
      </h2>
      <article className={styles.postListElement}>
        <p className={styles.postListElementDate}>26th April 2023</p>
        <h3 className={styles.postListElementHeading}>
          Post title about something very random
        </h3>
        <p className={styles.postListElementDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          viverra quis nibh gravida mattis.
        </p>
      </article>
      <article className={styles.postListElement}>
        <p className={styles.postListElementDate}>25th April 2023</p>
        <h3 className={styles.postListElementHeading}>
          Very interesting post title
        </h3>
        <p className={styles.postListElementDescription}>
          Ut non elit vitae odio semper posuere. Proin in congue tortor. Proin
          feugiat ligula ut porttitor pellentesque. Etiam tempor placerat
          tristique.
        </p>
      </article>
      <article className={styles.postListElement}>
        <p className={styles.postListElementDate}>24th April 2023</p>
        <h3 className={styles.postListElementHeading}>
          Third post title that is very informative
        </h3>
        <p className={styles.postListElementDescription}>
          Sed consectetur leo ex, nec imperdiet turpis gravida et. Phasellus et
          congue lacus, et fringilla lorem.
        </p>
      </article>
    </section>
  );
}
