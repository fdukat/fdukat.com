import HeroIconsList from './HeroIconsList';

import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className={styles.heroWrapper}>
      <h1 className={styles.heroHeading}>Welcome!</h1>
      <p className={styles.heroSubheading}>
        My name is Filip and I am a software developer from Poland.
      </p>
      <p className={styles.heroSubheading}>
        I feel passionate about creating applications that are user-friendly and constantly expand
        my knowledge.
      </p>
      <p className={styles.heroSubheading}>
        Check out{' '}
        <span className={styles.heroSubheadingSpan}>
          <Link href="/about">about page</Link>
        </span>{' '}
        if you would like to know more about my journey.
      </p>
      <p className={styles.heroSubheading}>
        Below, you can find links to my resume and social media profiles:
      </p>
      <HeroIconsList />
    </header>
  );
}
