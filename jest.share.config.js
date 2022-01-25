module.exports = {
  coverageReporters: ["text", "html", "cobertura"],
  testEnvironment: "jsdom",
  preset: "ts-jest/presets/js-with-ts",
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80
    }
  }
};
