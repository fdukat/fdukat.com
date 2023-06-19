import { ChevronLeft } from 'react-feather';
import InternalLink from '../InternalLink';

export default function ArticleHeader({ title, description, date }: any) {
  return (
    <header className="pt-36 mb-16">
      <InternalLink
        href="/"
        className="text-primary font-semibold bg-gradient-to-r from-brand to-brand bg-beforeHoverPosition bg-beforeHoverSize bg-no-repeat hover:bg-afterHoverSize transition-all duration-150 ease-out"
      >
        <ChevronLeft className="inline" />
        Return
      </InternalLink>
      <h1 className="text-6xl font-bold mt-5 mb-10">{title}</h1>
      <p className="text-2xl text-secondary font-light">{description}</p>
      <hr className="border-none h-[1px] bg-[#181c24] mt-10 mb-5" />
      <p className="font-semibold text-secondary text-right">{date}</p>
    </header>
  );
}
