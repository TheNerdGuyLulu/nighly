import { ColorValue } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const tagStyles = StyleSheet.create(theme => ({
  wrapper: (color?: ColorValue) => ({
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: theme.sizes.s8,
    paddingHorizontal: theme.sizes.s12,
    backgroundColor: color ?? '#c8c8f426',
    borderRadius: theme.sizes.s6,
    columnGap: theme.sizes.s8,
  }),
  icon: {
    width: theme.sizes.s26,
    height: theme.sizes.s26,
    color: theme.colors.DarkBlue1,
  },
}));
