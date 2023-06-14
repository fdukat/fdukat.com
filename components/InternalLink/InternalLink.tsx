import Link from 'next/link';

type InternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function InternalLink({ href, children }: InternalLinkProps) {
  return (
    <Link
      href={href}
      className="text-primary font-semibold bg-gradient-to-r from-brand to-brand bg-beforeHoverPosition bg-beforeHoverSize bg-no-repeat hover:bg-afterHoverSize transition-all duration-150 ease-out"
    >
      {children}
    </Link>
  );
}
