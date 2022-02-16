const sharedJestConfig = require("../jest.share.config");

module.exports = Object.assign(sharedJestConfig, {
  testMatch: ["**/*.test.js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    ".+\\.(css)$": "jest-css-modules-processor"
  }
});
