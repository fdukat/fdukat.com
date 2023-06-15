import InternalLink from '@/components/InternalLink';
import HeroIconList from '@/components/HeroIconList';

export default function Hero() {
  return (
    <header className="text-white text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl  md:text-7xl font-black text-primary mt-10 md:mt-36 mb-12">
          <span className="block py-5">🚀</span>
          Welcome, my name is Filip.
        </h1>
        <div className="text-lg text-secondary w-[90%] mx-auto">
          <p className="p-3">
            I&apos;m all about turning ideas into stunning, user-friendly applications through the
            power of code. Working with web technologies, both on the{' '}
            <span className="text-primary font-semibold">frontend</span> and{' '}
            <span className="text-primary font-semibold">backend</span>, is where I find my true
            passion.
          </p>
          <p className="p-3">
            Currently, my focus is on expanding{' '}
            <span className="text-primary font-semibold">Next.js</span> knowledge and broadening my
            overall web development skill set. I believe that continuously expanding one&apos;s
            techical foundation is one of key factors to succeed.
          </p>
          <p className="p-3">
            If you&apos;re curious to know more about my journey, hop over to the{' '}
            <InternalLink href="/about">About Me</InternalLink> page.
          </p>
        </div>
        <HeroIconList />
      </div>
    </header>
  );
}
