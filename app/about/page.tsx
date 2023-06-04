import Paragraph from '@/components/Paragraph';
import Photo from '@/components/Photo';
import ReturnButton from '@/components/ReturnButton';

export default function About() {
  return (
    <main>
      <ReturnButton />
      <Photo />
      <Paragraph>
        Hey there! Ever since I can remember, I&apos;ve always had a knack for{' '}
        <span>creating things</span>. Whether it was building cool stuff with Lego bricks, getting
        lost in the worlds of my fantasy stories, or tweaking video games using mission editors, I
        got a serious kick out of building things from scratch. That&apos;s when I fell head over
        heels for programming. The idea that I could have an impact on the digital realm that
        millions of people use every day? It gives me goosebumps!
      </Paragraph>
      <Paragraph>
        My coding adventure began back in 2017 when I started creating simple HTML projects for
        school. Since then, my passion for web development has taken off like a rocket. Right now,
        I&apos;m focused on expanding my knowledge of <span>React</span>, but I&apos;m totally open
        to diving into backend development too. Lately, I&apos;ve been having a blast experimenting
        with <span>Next.js</span> - it&apos;s become my go-to framework for new projects.
      </Paragraph>
      <Paragraph>
        I&apos;m all about that <span>team spirit</span>. Collaboration is my jam, and I genuinely
        thrive on receiving feedback. Growing as a software developer gets me super pumped! I&apos;m
        constantly working on my skills, both the technical stuff and the soft skills too. Ready to
        tackle any professional adventure that comes my way.
      </Paragraph>
      <Paragraph>
        When I&apos;m not knee-deep in code, you&apos;ll probably find me playing video games,
        diving into a good book, practicing martial arts, or just vibing to some awesome music. If
        you&apos;re on the lookout for an ambitious person who&apos;s a speedy learner and totally
        up for taking the full-stack path,{' '}
        <span>
          <a href="https://www.linkedin.com/in/fdukat/" target="_blank" rel="noopener noreferrer">
            let&apos;s chat
          </a>
        </span>
        ! I&apos;m all ears for a potential collaboration or just geeking out about programming in
        general.
      </Paragraph>
    </main>
  );
}
