import Link from 'next/link';
import styles from './PostsSinglePost.module.css';

export default function PostsSinglePost({ children, title, date, href }: Props) {
  return (
    <article className={styles.postsSinglePost}>
      <p className={styles.postsSinglePostDate}>{date}</p>
      <Link className={styles.postsSinglePostLink} href={href}>
        <h3 className={styles.postsSinglePostTitle}>{title}</h3>
        <p className={styles.postsSinglePostDescription}>{children}</p>
      </Link>
    </article>
  );
}

interface Props {
  title: string;
  date: string;
  children: string;
  href: string;
}
