module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFiles: ["./tests/unit/setupFiles/browserMocks.js"],
  globalSetup: "./tests/unit/globalSetup/timezone.js"
};
