const { remarkCodeHike } = require('@code-hike/mdx');

/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: 'nord',
          lineNumbers: true,
          showCopyButton: true,
          staticMediaQuery: 'only screen, (max-width: 650px)',
        },
      ],
    ],
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
