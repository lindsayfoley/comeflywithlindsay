const withSass = require('@zeit/next-sass');

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withSass({
  cssModules: true
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "tsx", "ts"]
});
