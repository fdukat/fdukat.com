import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <p className={styles.footerContent}>
        Crafted with 💜 by Filip Dukat &copy; 2023
      </p>
    </footer>
  );
}
