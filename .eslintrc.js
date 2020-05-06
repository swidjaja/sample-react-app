module.exports = {
  extends: ['airbnb'],
  env: {
    'browser': true,
    'node': true,
    'es6': true,
    'jest': true,
  },
  ignorePatterns: [
    'build',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: [
          'config/**',
          '**/__tests__/**',
          '**/*.test.js',
          '**/jest.*.js',
        ],
      },
    ],
  },
};
