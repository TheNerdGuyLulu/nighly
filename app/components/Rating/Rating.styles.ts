import { StyleSheet } from 'react-native-unistyles';

export const ratingStyles = StyleSheet.create(theme => ({
  ratingWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    columnGap: theme.sizes.s8,
    backgroundColor: '#eae8e8',
    padding: theme.sizes.s4,
    borderRadius: theme.sizes.s4,
  },
}));
