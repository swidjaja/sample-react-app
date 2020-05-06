module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: 'last 2 versions',
        },
        exclude: [
          'transform-regenerator',
          'transform-async-to-generator',
        ],
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties', { loose: true },
    ],
    '@babel/plugin-proposal-object-rest-spread',
    'babel-plugin-transform-react-remove-prop-types',
    '@babel/plugin-transform-react-jsx',
  ],
};
