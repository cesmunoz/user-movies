module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  testEnvironment: 'jest-environment-jsdom-sixteen',
  globals: {
    babelConfig: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
}
