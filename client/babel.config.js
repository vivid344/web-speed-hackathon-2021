module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: { version: "3.8", proposals: true },
        modules: 'commonjs',
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        development: true,
      },
    ],
  ],
};
