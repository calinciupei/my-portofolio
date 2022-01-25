const custom = require("./webpack.config");

module.exports = {
  stories: [
    "../components/**/*.stories.@(tsx|jsx)",
    "../theme/**/*.stories.@(tsx|jsx)"
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-options",
    "@storybook/addon-viewport"
  ],
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  }
};