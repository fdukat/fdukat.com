import InternalLink from '@/components/InternalLink';
import Image from 'next/image';
import { ChevronLeft } from 'react-feather';

export const metadata = {
  title: 'About | fdukat.com',
};

export default function About() {
  return (
    <main className="container flex flex-wrap mx-auto gap-5 pt-16 pb-24 justify-center">
      <div className="text-secondary text-lg text-justify lg:w-[55%] mx-auto">
        <InternalLink
          href="/"
          className="mx-5 text-primary font-semibold bg-gradient-to-r from-brand to-brand bg-beforeHoverPosition bg-beforeHoverSize bg-no-repeat hover:bg-afterHoverSize transition-all duration-150 ease-out"
        >
          <ChevronLeft className="inline" />
          Return
        </InternalLink>
        <h1 className="text-primary font-bold text-3xl p-5 pt-8">About Me</h1>
        <p className="p-5">
          Hey there! Ever since I can remember, I&apos;ve always had a knack for creating things.
          Whether it was building cool stuff with Lego bricks, getting lost in the worlds of fantasy
          stories, or tweaking video games using mission editors, I got a serious kick out of
          building things from scratch. That&apos;s when I fell head over heels for programming. The
          idea that I could have an impact on the digital realm that millions of people use every
          day? It gives me goosebumps!
        </p>
        <p className="p-5 mx-auto">
          My coding adventure began back in 2017 when I started creating simple HTML projects for
          school. Since then, my passion for{' '}
          <strong className="text-primary font-semibold">web development</strong> has taken off like
          a rocket. Right now, I&apos;m focused on expanding my knowledge of{' '}
          <strong className="text-primary font-semibold">React</strong>, but I&apos;m totally open
          to diving into <strong className="text-primary font-semibold">backend development</strong>{' '}
          too. My dream is to become{' '}
          <strong className="text-primary font-semibold">a full-stack developer</strong>. Lately,
          I&apos;ve been having a blast experimenting with{' '}
          <strong className="text-primary font-semibold">Next.js</strong> - it&apos;s become my
          go-to framework for new projects.
        </p>
        <p className="p-5 mx-auto">
          I&apos;m all about that{' '}
          <strong className="text-primary font-semibold">team spirit</strong>. Collaboration is my
          jam, and I genuinely thrive on receiving feedback. Growing as a software developer gets me
          super pumped! I&apos;m constantly working on my skills, both the technical stuff and the
          soft skills too. Ready to tackle any professional adventure that comes my way.
        </p>
        <p className="p-5 mx-auto">
          When I&apos;m not knee-deep in code, you&apos;ll probably find me playing video games,
          diving into a good book, practicing martial arts, or just vibing to some awesome music. If
          you&apos;re on the lookout for an{' '}
          <strong className="text-primary font-semibold">ambitious</strong> person who&apos;s a
          speedy learner and totally up for taking the full-stack path, let&apos;s chat! I&apos;m
          all ears for a potential collaboration or just geeking out about programming in general.
        </p>
      </div>
      <div className="flex">
        <Image
          src="/about_photo.webp"
          alt="Filip Dukat"
          height={400}
          width={400}
          priority
          className="border object-cover max-h-[400px] max-w-[90%] mx-auto lg:max-w-full my-10"
        />
      </div>
    </main>
  );
}
