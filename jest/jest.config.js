module.exports = {
  testEnvironment: 'node',
  verbose: false,
  globals: {
    __DEV__: true,
  },
  rootDir: '../',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@)/'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleDirectories: ['node_modules', 'src/app'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/jest/__mocks__/styleMock.js',
  },
  coverageDirectory: '<rootDir>/jest/coverage',
};
