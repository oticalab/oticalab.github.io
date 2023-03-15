module.exports = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: "never",
  trailingComma: "es5",
  arrowParens: "avoid",
  overrides: [
    { files: "*.md", options: { proseWrap: "always" } },
    { files: "*.mdx", options: { proseWrap: "always" } },
  ],
};
