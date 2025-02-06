import { StyleSheet } from 'react-native-unistyles';

export const indicatorStyles = StyleSheet.create(theme => ({
  indicator: {
    width: theme.sizes.s20,
    height: theme.sizes.s6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border2,
    borderRadius: theme.sizes.s4,
  },
}));
