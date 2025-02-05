module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort', 'i18next'],
  rules: {
    'no-console': 'warn',
    'i18next/no-literal-string': 'warn',
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          ['^\\u0000'],
          ['^react', '/^react-(native)$/', '^@?\\w'],
          ['^app/[^/]+(/.*|$)'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
  ignorePatterns: ['ios', 'android'],
};
