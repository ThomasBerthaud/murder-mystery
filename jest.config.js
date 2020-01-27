module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  setupFiles: ["./tests/setupFiles/browserMocks.js"],
  globalSetup: "./tests/globalSetup/timezone.js"
};
