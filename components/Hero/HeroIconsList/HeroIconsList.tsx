import { BookOpen, FileText, GitHub, Linkedin } from 'react-feather';

import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './HeroIconsList.module.css';
import HeroIconsListElement from './HeroIconsListElement';

export default function HeroIconsList() {
  return (
    <ul className={styles.heroIconsList}>
      <HeroIconsListElement>
        <FileText className={styles.heroIconsListElementIcon} size={25} />
        <VisuallyHidden>Resume</VisuallyHidden>
      </HeroIconsListElement>
      <HeroIconsListElement>
        <GitHub className={styles.heroIconsListElementIcon} size={25} />
        <VisuallyHidden>Github</VisuallyHidden>
      </HeroIconsListElement>
      <HeroIconsListElement>
        <Linkedin className={styles.heroIconsListElementIcon} size={25} />
        <VisuallyHidden>Linkedin</VisuallyHidden>
      </HeroIconsListElement>
      <HeroIconsListElement>
        <BookOpen className={styles.heroIconsListElementIcon} size={25} />
        <VisuallyHidden>Goodreads</VisuallyHidden>
      </HeroIconsListElement>
    </ul>
  );
}
