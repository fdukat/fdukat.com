import InternalLink from '../InternalLink';

export default function BlogPosts() {
  return (
    <section className="container mx-auto my-32">
      <h2 className="text-primary font-bold text-3xl mt-16 mx-16 mb-8 text-center md:text-left">
        Blog Posts
      </h2>
      <ul className="w-[70%] mx-auto m-12 text-primary">
        <li className="py-4">
          <h3 className="text-xl">
            <InternalLink href="">Example article title</InternalLink>
          </h3>
          <p className="text-secondary text-base font-extralight my-1">14th June 2023</p>
          <p className="text-justify font-light text-lg my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi autem
            alias, quod consectetur veniam nisi eligendi error rerum eveniet corrupti numquam enim.
            Minima debitis numquam unde magni, nemo veritatis!
          </p>
        </li>
        <li className="py-4">
          <h3 className="text-xl">
            <InternalLink href="">Another example article title</InternalLink>
          </h3>
          <p className="text-secondary text-base font-extralight my-1">14th June 2023</p>
          <p className="text-justify font-light text-lg my-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsam culpa sed at iure
            vero ex dolorum. Sint repudiandae error, dignissimos, harum aliquam, numquam quam ipsa
            aperiam sit ad cumque.
          </p>
        </li>
      </ul>
    </section>
  );
}
