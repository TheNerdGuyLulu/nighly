/** @type {import('react-native-unistyles/plugin').UnistylesPluginOptions} */
const unistylesPluginOptions = {
  autoProcessRoot: 'app',
};

const plugins = [
  [
    'module-resolver',
    {
      root: ['.'],
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.android.js',
        '.android.tsx',
        '.ios.js',
        '.ios.tsx',
      ],
    },
  ],
  'react-native-reanimated/plugin',
];

if (process.env.NODE_ENV !== 'test') {
  plugins.push(['react-native-unistyles/plugin', unistylesPluginOptions]);
}

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: plugins,
};
