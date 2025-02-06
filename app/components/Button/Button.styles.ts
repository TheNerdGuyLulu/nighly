import { StyleSheet } from 'react-native-unistyles';

export const buttonStyles = StyleSheet.create(theme => ({
  pressable: {
    paddingVertical: theme.sizes.s6,
    paddingHorizontal: theme.sizes.s12,
    borderRadius: theme.sizes.s4,
    backgroundColor: '#22223b',
  },
  text: {
    color: theme.colors.text4,
  },
}));
