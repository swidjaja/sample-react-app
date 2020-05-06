module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  coveragePathIgnorePatterns: [
    '/__tests__/',
    '/config/',
    '.config.js',
    '/coverage/lcov-report/',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/config/jest/jest.enzyme',
  ],
};
