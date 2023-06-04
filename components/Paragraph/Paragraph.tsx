import styles from './Paragraph.module.css';

export default function Paragraph({ children }: React.PropsWithChildren) {
  return <p className={styles.paragraph}>{children}</p>;
}
