import Link from 'next/link';
import styles from './AboutContent.module.css';

export default function AboutContent() {
  return (
    <div>
      <p className={styles.aboutContentReturn}>
        <Link href="/">{'< Return'}</Link>
      </p>
      <p className={styles.aboutContentParagraph}>
        Greetings! As you can remember from the main page, my name is{' '}
        <span className={styles.aboutSpan}>Filip</span> and I am 21 years old.
        From a very young age, I have always been drawn to exciting and engaging
        activities, with a distaste for monotony and stagnation. This drive
        eventually led me to the world of programming.
      </p>
      <p className={styles.aboutContentParagraph}>
        It all started with an online C++ course, though I soon discovered that
        this approach wasn&apos;t the best fit for me. I then dabbled in writing
        small plugins for Minecraft in Java, but found it to be similarly
        lacking in long-term appeal. I also experimented with Python, Ruby, and
        C#, but failed to find anything that truly captivated me. The magic
        happened when I discovered{' '}
        <span className={styles.aboutSpan}>web development</span>.
      </p>
      <p className={styles.aboutContentParagraph}>
        Currently, I devote most of my time to expanding my{' '}
        <span className={styles.aboutSpan}>frontend development</span>{' '}
        expertise, primarily through my work with{' '}
        <span className={styles.aboutSpan}>React</span>. Recently, I&apos;ve
        also begun integrating <span className={styles.aboutSpan}>Next.js</span>{' '}
        into my new projects. In the future, I aspire to become a full-stack
        developer.
      </p>
      <p className={styles.aboutContentParagraph}>
        Beyond programming, I seek out a wide variety of interesting pursuits -
        you might find me immersed in a good book, traveling, playing chess,
        basketball, mixing up some delicious mojitos, or practicing martial
        arts. On occasion, I even venture into the woods with friends to engage
        in airsoft battles.
      </p>
      <p className={styles.aboutContentParagraph}>
        I believe that my commitment to self-improvement, attention to detail,
        and strong communication skills make me an excellent asset to any
        programming team. If you&apos;re interested in discussing this topic, or
        have any other questions, please don&apos;t hesitate to{' '}
        <span className={styles.aboutSpan}>
          <a
            href="https://www.linkedin.com/in/fdukat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reach out
          </a>
        </span>
        .
      </p>
    </div>
  );
}
