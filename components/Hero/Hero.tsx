import Link from 'next/link';

import {
  Github,
  Linkedin,
  Twitter,
  BookOpen,
  FileText,
} from 'feather-icons-react/build';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.heroWrapper}>
      <h1 className={styles.heroHeading}>Hello there!</h1>
      <p className={styles.heroParagraph}>
        My name is Filip and I am a 21-year-old software developer from Poland.
      </p>
      <p className={styles.heroParagraph}>
        I feel passionate about creating beautiful and easy-to-maintain code,
        learning new things and technology in general.
      </p>
      <p className={styles.heroParagraph}>
        If you would like to know more about me and my journey,{' '}
        <Link href="/">
          <span className={styles.heroSpan}>click here</span>
        </Link>
        .
      </p>
      <ul className={styles.heroIconList}>
        <li className={styles.heroIcon}>
          <a
            href="https://github.com/fdukat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
        </li>
        <li className={styles.heroIcon}>
          <a
            href="https://www.linkedin.com/in/fdukat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li className={styles.heroIcon}>
          <a
            href="https://www.goodreads.com/user/show/164254455-filip-dukat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen />
          </a>
        </li>
        <li className={styles.heroIcon}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <FileText />
          </a>
        </li>
      </ul>
    </header>
  );
}
