const jestShared = import("../../jest.share.config");

module.exports = Object.assign(jestShared, {
  testMatch: ["./**/?(*.)+(test).[jt]s?(x)"],
  transform: {
    ".+\\.(css)$": "jest-css-modules-processor"
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg-mock.js"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  setupFiles: ["../../test-setup.js"]
})