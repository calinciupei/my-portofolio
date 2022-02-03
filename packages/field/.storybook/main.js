const custom = require("./webpack.config");

module.exports = {
  stories: [
    "../components/**/*.stories.@(tsx|jsx)",
    "../theme/**/*.stories.@(tsx|jsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
    "@storybook/addon-postcss",
    "storybook-dark-mode",
    "@storybook/addon-options",
    "@storybook/addon-controls"
  ],
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  }
};