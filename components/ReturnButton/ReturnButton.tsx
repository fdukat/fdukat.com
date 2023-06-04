import { ChevronLeft } from 'react-feather';

import styles from './ReturnButton.module.css';
import Link from 'next/link';

export default function ReturnButton() {
  return (
    <button className={styles.returnButtonWrapper}>
      <Link href="/" className={styles.returnButtonLink}>
        <ChevronLeft size={20} /> Return
      </Link>
    </button>
  );
}
