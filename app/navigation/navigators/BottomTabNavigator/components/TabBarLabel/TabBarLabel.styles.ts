import { StyleSheet } from 'react-native-unistyles';

export const tabBarLabelStyles = StyleSheet.create(theme => ({
  text: {
    variants: {
      focused: {
        true: {
          color: theme.colors.text1,
        },
        false: {
          color: theme.colors.text5,
        },
      },
    },
  },
}));
