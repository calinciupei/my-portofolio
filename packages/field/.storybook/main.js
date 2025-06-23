import { module as _module } from "./webpack.config";

export const stories = ["../components/**/*.stories.@(tsx|jsx)", "../theme/**/*.stories.@(tsx|jsx)"];
export const addons = [
  "@storybook/addon-a11y",
  "@storybook/addon-actions",
  "@storybook/addon-docs",
  "@storybook/addon-knobs",
  "@storybook/addon-viewport",
  "@storybook/addon-postcss",
  "storybook-dark-mode",
  "@storybook/addon-options",
  "@storybook/addon-controls"
];
export async function webpackFinal(config) {
  return { ...config, module: { ...config.module, rules: _module.rules } };
}
