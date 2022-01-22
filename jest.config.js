const config = {
  preset: 'react-native',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['./node_modules', './src'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./setup-tests.js'],
};

module.exports = config;
