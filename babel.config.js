module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          root: './',
          src: './src',
          assets: './assets',
          components: './src/components',
          utils: './src/utils',
        },
      },
    ],
  ],
};
