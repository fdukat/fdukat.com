import { BookOpen, FileText, GitHub, Linkedin } from 'react-feather';

import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './HeroIconsList.module.css';
import HeroIconsListElement from './HeroIconsListElement';

export default function HeroIconsList() {
  return (
    <ul className={styles.heroIconsList}>
      <HeroIconsListElement>
        <FileText className={styles.heroIconsListElementIcon} size={30} />
        <VisuallyHidden>Resume</VisuallyHidden>
      </HeroIconsListElement>
      <HeroIconsListElement>
        <a href="https://github.com/fdukat" target="_blank" rel="noopener noreferrer">
          <GitHub className={styles.heroIconsListElementIcon} size={30} />
        </a>
        <VisuallyHidden>Github</VisuallyHidden>
      </HeroIconsListElement>
      <HeroIconsListElement>
        <a href="https://www.linkedin.com/in/fdukat/" target="_blank" rel="noopener noreferrer">
          <Linkedin className={styles.heroIconsListElementIcon} size={30} />
        </a>
        <VisuallyHidden>Linkedin</VisuallyHidden>
      </HeroIconsListElement>
      <HeroIconsListElement>
        <a
          href="https://www.goodreads.com/user/show/164254455-filip-dukat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BookOpen className={styles.heroIconsListElementIcon} size={30} />
        </a>
        <VisuallyHidden>Goodreads</VisuallyHidden>
      </HeroIconsListElement>
    </ul>
  );
}
