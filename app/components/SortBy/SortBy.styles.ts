import {StyleSheet} from 'react-native-unistyles';

export const sortByStyles = StyleSheet.create(theme => ({
  sortWrapper: {
    flexDirection: 'row',
    columnGap: theme.sizes.s6,
    alignItems: 'center',
  },
  sortIcon: {
    width: theme.sizes.s16,
    height: theme.sizes.s16,
    color: '#b998dd',
  },
}));
