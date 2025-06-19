// /** @type {import('jest').Config} */

// export const config = {
//   verbose: true,
// };

// export default {
//   transform: {},
//   testEnvironment: "jsdom",
//   setupFiles: ["<rootDir>/test/setupFiles.js"],
// };

/** @type {import('jest').Config} */
export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.(js|jsx)",
    "<rootDir>/src/**/?(*.)(test|spec).(js|jsx)"
  ],
  collectCoverageFrom: [
    "src/**/*.(js|jsx)",
    "!src/index.js",
    "!src/reportWebVitals.js"
  ],
  verbose: true,
};