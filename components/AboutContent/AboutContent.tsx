import Link from 'next/link';
import styles from './AboutContent.module.css';

export default function AboutContent() {
  return (
    <div>
      <p className={styles.aboutContentReturn}>
        <Link href="/">{'< Return'}</Link>
      </p>
      <p className={styles.aboutContentParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
        lobortis dui. Sed id egestas urna, ac venenatis felis. Suspendisse
        mattis, nunc sit amet aliquet consequat, magna libero faucibus magna,
        quis tempus dui ante eu sapien. Phasellus sollicitudin, ante sit amet
        tincidunt bibendum, elit ipsum facilisis urna, ut facilisis nulla arcu
        sit amet mi. Curabitur porta libero tortor, eget feugiat urna lacinia
        vel. Nullam consequat metus leo, et pellentesque lectus bibendum et.
        Suspendisse potenti. Donec tempus convallis diam, eu facilisis quam
        commodo ac. Pellentesque in nisi ante. Fusce vestibulum quam ac finibus
        lacinia. Maecenas porttitor lectus sem, at hendrerit magna suscipit non.
        Aliquam congue dolor ligula, vel sagittis enim sagittis ut.
      </p>
      <p className={styles.aboutContentParagraph}>
        Morbi sagittis enim vitae sollicitudin convallis. Suspendisse non orci
        sit amet tellus convallis vestibulum. Vestibulum congue gravida orci, at
        imperdiet erat. Sed ac ante mauris. Morbi massa sapien, consequat in
        euismod vitae, vulputate a enim. Praesent ut ultrices sem. Curabitur
        lorem quam, elementum vitae lorem sed, placerat faucibus libero. Ut in
        mauris ex. Curabitur efficitur neque in fermentum lacinia. Ut ante
        sapien, congue ut mauris vel, accumsan imperdiet turpis. Vivamus
        vehicula est in mauris eleifend molestie id tincidunt quam. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Mauris mattis odio non
        convallis volutpat. Phasellus nec nulla ac ex lobortis facilisis euismod
        pretium ante.
      </p>
      <p className={styles.aboutContentParagraph}>
        Cras metus augue, consectetur at ante ut, blandit bibendum ipsum. In nec
        tortor iaculis, vehicula nisl a, venenatis ipsum. Morbi sodales mi ut
        leo cursus blandit. Nulla facilisi. Duis ullamcorper ligula id efficitur
        vehicula. Morbi congue, sem ac varius vehicula, nibh ligula faucibus
        augue, et laoreet ipsum purus nec nunc. Morbi nec nulla suscipit nisl
        commodo euismod vitae quis leo. Vestibulum ante magna, sagittis ultrices
        augue sit amet, dictum lacinia metus. Nunc scelerisque est commodo elit
        consectetur aliquam at id nulla. Vestibulum semper tincidunt nibh.
        Curabitur sit amet congue massa, sed dignissim leo. Aenean ultricies,
        augue et ornare imperdiet, quam purus volutpat leo, ut tempus lorem mi
        eget quam. Vivamus lacinia tristique libero eu varius. Morbi ut
        pellentesque est.
      </p>
    </div>
  );
}
