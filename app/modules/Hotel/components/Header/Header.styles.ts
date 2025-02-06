import { StyleSheet } from 'react-native-unistyles';

export const headerStyles = StyleSheet.create((theme, runtime) => ({
  wrapper: {
    padding: theme.sizes.s16,
    rowGap: theme.sizes.s8,
  },
  ratingsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: theme.sizes.s16,
  },
}));
