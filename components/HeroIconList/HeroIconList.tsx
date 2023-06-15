import { BookOpen, FileText, GitHub, Linkedin } from 'react-feather';
import InternalLink from '@/components/InternalLink';
import ExternalLink from '@/components/ExternalLink';

export default function HeroIconList() {
  return (
    <ul className="flex justify-center gap-6 w-[90%] mx-auto m-12">
      <li>
        <InternalLink href="/resume.pdf">
          <FileText size={32} className="hover:text-brand" />
        </InternalLink>
      </li>
      <li>
        <ExternalLink href="https://github.com/fdukat">
          <GitHub size={32} className="hover:text-brand" />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://www.linkedin.com/in/fdukat/">
          <Linkedin size={32} className="hover:text-brand" />
        </ExternalLink>
      </li>
      <li>
        <ExternalLink href="https://www.goodreads.com/user/show/164254455-filip-dukat">
          <BookOpen size={32} className="hover:text-brand" />
        </ExternalLink>
      </li>
    </ul>
  );
}
