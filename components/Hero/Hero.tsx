import HeroIconsList from './HeroIconsList';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.heroWrapper}>
      <h1 className={styles.heroHeading}>Welcome!</h1>
      <p className={styles.heroSubheading}>
        My name is Filip and I am 21-year-old software developer from Poland.
      </p>
      <p className={styles.heroSubheading}>
        As a programmer, I feel passionate about creating beautiful user-friendly applications and
        constantly expand my knowledge.
      </p>
      <p className={styles.heroSubheading}>
        If you would like to know more about me, check out this page.
      </p>
      <p className={styles.heroSubheading}>
        Below, you can find links to my resume and social media profiles:
      </p>
      <HeroIconsList />
    </header>
  );
}
