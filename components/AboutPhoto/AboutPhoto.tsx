import Image from 'next/image';

import styles from './AboutPhoto.module.css';

export default function AboutPhoto() {
  return (
    <div className={styles.aboutPhotoWrapper}>
      <Image
        className={styles.aboutPhoto}
        src="/about_photo.jpg"
        alt=""
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  );
}
