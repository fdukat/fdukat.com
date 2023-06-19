export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <article className="w-[90%] md:w-[70%] mx-auto text-primary pb-24">{children}</article>;
}
