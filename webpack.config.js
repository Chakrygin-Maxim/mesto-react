const path = require("path");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  plugins: [
    new PrettierPlugin({
      printWidth: 100,
      singleQuote: true,
      trailingComma: "all",
      bracketSpacing: true,
      jsxBracketSameLine: false,
      tabWidth: 2,
      semi: true,
    }),
  ],
  devtool: "inline-source-map",
};
