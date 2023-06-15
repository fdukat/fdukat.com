import InternalLink from '@/components/InternalLink';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="container mx-auto mt-12 md:mt-24 lg:mt-48 flex justify-center items-center flex-col">
      <h1 className="text-7xl text-primary font-bold mb-24 text-center">Error 404</h1>
      <Image
        src="/periculum.gif"
        width={500}
        height={300}
        alt=""
        className="w-[90%] md:w-[500px] mx-auto"
      />
      <p className="text-sm text-secondary font-light mt-6 text-center w-[90%] mx-auto">
        It looks like you&apos;re lost, try to use <em>periculum</em> like Harry and{' '}
        <InternalLink href="/">return to main page</InternalLink>
      </p>
    </div>
  );
}
