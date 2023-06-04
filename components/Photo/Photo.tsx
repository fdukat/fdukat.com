import Image from 'next/image';

import styles from './Photo.module.css';

export default function Photo() {
  return (
    <div className={styles.photoWrapper}>
      <Image className={styles.photoContent} src="/about_photo.jpg" fill alt="" />
    </div>
  );
}
