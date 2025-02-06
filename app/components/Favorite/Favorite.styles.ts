import { StyleSheet } from 'react-native-unistyles';

export const favoriteStyles = StyleSheet.create(theme => ({
  pressable: {
    width: theme.sizes.s20,
    height: theme.sizes.s20,
    shadowColor: theme.colors.shadow1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
}));
