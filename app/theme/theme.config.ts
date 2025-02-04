import { StyleSheet } from 'react-native-unistyles';

import { appTheme } from './theme.ts';

StyleSheet.configure({
  themes: appTheme,
  settings: {
    initialTheme: 'lightTheme',
  },
});
