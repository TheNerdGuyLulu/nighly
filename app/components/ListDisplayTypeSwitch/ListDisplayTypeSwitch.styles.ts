import { StyleSheet } from 'react-native-unistyles';

export const listDisplayTypeSwitchStyles = StyleSheet.create(theme => ({
  pressable: {
    padding: theme.sizes.s6,
    borderRadius: theme.sizes.s6,
    backgroundColor: theme.colors.background3,
    minHeight: theme.sizes.s32,
    justifyContent: 'center',
  },
  icon: {
    width: theme.sizes.s20,
    height: theme.sizes.s20,
  },
}));
