/** @type {import('jest').Config} */

export const config = {
  verbose: true,
};

export default {
  transform: {},
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test/setupFiles.js"],
};
