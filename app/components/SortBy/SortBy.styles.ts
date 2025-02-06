import { StyleSheet } from 'react-native-unistyles';

export const sortByStyles = StyleSheet.create(theme => ({
  wrapper: {
    minHeight: theme.sizes.s32,
    flexDirection: 'row',
    columnGap: theme.sizes.s6,
  },
  pressable: {
    padding: theme.sizes.s6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background3,
    borderRadius: theme.sizes.s6,
  },
  sortIcon: {
    width: theme.sizes.s16,
    height: theme.sizes.s16,
  },
  text: {
    color: '#313131',
  },
}));
