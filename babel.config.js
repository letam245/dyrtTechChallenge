module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/context',
          '@context': './src/hooks',
          '@hooks': './src/hooks',
          '@hooks': './src/screens',
          '@types': './src/types',
          '@utils': './src/utils',
        }
      },
    ],
  ],
};