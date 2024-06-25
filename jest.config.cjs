module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/setupTests.js'],
  moduleFileExtensions: ['js', 'mjs'],
};
