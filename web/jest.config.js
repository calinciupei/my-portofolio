const sharedJestConfig = require("../jest.share.config");

module.exports = Object.assign(sharedJestConfig, {
  testMatch: ["**/*.test.js"],
  transform: {
    ".+\\.(css)$": "jest-css-modules-processor"
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json"
    }
  }
});
