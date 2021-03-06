module.exports = function config(api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ];
  const plugins = ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-optional-chaining"];

  return {
    presets,
    plugins
  };
};
