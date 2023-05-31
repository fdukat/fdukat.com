import HeroIconsList from './HeroIconsList';

import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className={styles.heroWrapper}>
      <h1 className={styles.heroHeading}>Welcome!</h1>
      <p className={styles.heroSubheading}>
        My name is <strong>Filip</strong> and I am <strong>21-year-old software developer</strong>{' '}
        from <strong>Poland</strong>.
      </p>
      <p className={styles.heroSubheading}>
        As a programmer, I feel <strong>passionate</strong> about{' '}
        <strong>creating beautiful user-friendly applications</strong> and{' '}
        <strong>constantly expand my knowledge</strong>.
      </p>
      <p className={styles.heroSubheading}>
        If you would like to know more about me,{' '}
        <span className={styles.heroSubheadingSpan}>
          <Link href="/about">check out this page</Link>
        </span>
        .
      </p>
      <p className={styles.heroSubheading}>
        Below, you can find links to my <strong>resume</strong> and{' '}
        <strong>social media profiles</strong>:
      </p>
      <HeroIconsList />
    </header>
  );
}
