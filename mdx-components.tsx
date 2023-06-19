import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => <h2 className="text-3xl font-semibold py-5">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold py-5">{children}</h3>,
    p: ({ children }) => <p className="font-normal text-lg text-secondary py-5">{children}</p>,
  };
}
