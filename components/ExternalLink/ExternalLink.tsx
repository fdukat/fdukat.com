type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary font-semibold bg-gradient-to-r from-brand to-brand bg-beforeHoverPosition bg-beforeHoverSize bg-no-repeat hover:bg-afterHoverSize transition-all duration-150 ease-out"
    >
      {children}
    </a>
  );
}
