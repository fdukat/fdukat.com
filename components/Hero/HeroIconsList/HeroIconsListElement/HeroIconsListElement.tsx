import styles from './HeroIconsListElement.module.css';

export default function HeroIconsListElement({ children }: React.PropsWithChildren) {
  return (
    <li className={styles.heroIconsListElement}>
      <button className={styles.heroIconsListElementButton}>{children}</button>
    </li>
  );
}
