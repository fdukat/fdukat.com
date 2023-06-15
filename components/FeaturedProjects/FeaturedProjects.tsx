import ExternalLink from '@/components/ExternalLink';

export default function FeaturedProjects() {
  return (
    <section className="container mx-auto my-32">
      <h2 className="text-primary font-bold text-3xl mt-16 mb-8 text-center">Featured Projects</h2>
      <ul className="flex flex-wrap justify-center gap-16 mx-auto m-12 text-primary">
        <li>
          <h3 className="text-center text-xl">
            <ExternalLink href="https://github.com/fdukat/fdukat.com">fdukat.com</ExternalLink>
          </h3>
          <p className="text-center italic font-light my-2">
            Next.js, Typescript, TailwindCSS, MDX
          </p>
        </li>
        <li>
          <h3 className="text-center text-xl">
            <ExternalLink href="https://github.com/fdukat/patrykdukat.com">
              patrykdukat.com
            </ExternalLink>
          </h3>
          <p className="text-center italic font-light my-2">Next.js, Typescript, TailwindCSS</p>
        </li>
      </ul>
    </section>
  );
}
