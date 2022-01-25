const sharedJestConfig = require("../../jest.share.config");

module.exports = Object.assign(sharedJestConfig, {
  testMatch: ["**/*.test.js"],
  globals: {
    "ts-jest": {
      tsconfig: "../../tsconfig.json"
    }
  }
});
