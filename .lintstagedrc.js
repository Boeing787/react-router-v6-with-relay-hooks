module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  // jsonlint can process only one file at a time.
  '*.json': (filenames) =>
    filenames.map(
      (filename) => `jsonlint --in-place --sort-keys '${filename}'`
    ),
};
