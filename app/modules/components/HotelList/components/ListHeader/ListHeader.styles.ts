import { StyleSheet } from 'react-native-unistyles';

export const listHeaderStyles = StyleSheet.create(theme => ({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.sizes.s20,
  },
  rightElementsWrapper: {
    flexDirection: 'row',
    columnGap: theme.sizes.s12,
    alignItems: 'center',
  },
  flagSelectorWrapper: {
    width: theme.sizes.s32,
    height: theme.sizes.s32,
    padding: theme.sizes.s4,
  },
  sortDisplayItemWrapper: {
    padding: theme.sizes.s6,
    borderRadius: theme.sizes.s6,
    backgroundColor: theme.colors.background3,
    minHeight: theme.sizes.s32,
    justifyContent: 'center',
  },
}));
