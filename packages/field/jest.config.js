const jestShared = require("../../jest.share.config");

module.exports = Object.assign(jestShared, {
  testMatch: ["./**/?(*.)+(test).[jt]s?(x)"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    ".+\\.(css)$": "jest-css-modules-processor"
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg-mock.js"
  }
})