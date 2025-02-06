import { StyleSheet } from 'react-native-unistyles';

export const hotelStyles = StyleSheet.create(theme => ({
  headerWrapper: {
    backgroundColor: theme.colors.background2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border1,
  },
  bodyWrapper: {
    padding: theme.sizes.s16,
  },
}));
