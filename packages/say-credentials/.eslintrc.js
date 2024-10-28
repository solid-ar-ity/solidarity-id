/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/saylint.js"],
  parserOptions: {
    project: true,
  },
};
