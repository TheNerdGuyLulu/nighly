import { StyleSheet } from 'react-native-unistyles';

export const listHeaderStyles = StyleSheet.create(theme => ({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.sizes.s20,
  },
  sortDisplayItemWrapper: {
    padding: theme.sizes.s6,
    borderRadius: theme.sizes.s6,
    backgroundColor: '#e5e5e5',
    minHeight: theme.sizes.s32,
    justifyContent: 'center',
  },
}));
