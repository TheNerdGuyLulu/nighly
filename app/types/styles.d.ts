import {appTheme} from 'app/theme/theme.ts';

type AppThemes = typeof appTheme;

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}
