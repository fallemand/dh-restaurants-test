module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testRegex: '\\/tests\\/unit\\/.*(test|spec)\\.jsx?$',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  coverageReporters: [
    'json',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/tests/unit/mocks/styleMock.js',
    '\\.(png)$': '<rootDir>/tests/unit/mocks/styleMock.js',
  },
  collectCoverageFrom: [
    '*.{js}',
    'api/**/*.{js,jsx}',
    'app/**/*.{js,jsx}',
    'services/**/*.{js,jsx}',
  ],
  setupFiles: ['<rootDir>/tests/unit/setup.js'],
};
