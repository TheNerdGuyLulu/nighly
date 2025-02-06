import { ColorValue } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const tagStyles = StyleSheet.create(theme => ({
  wrapper: (color?: ColorValue) => ({
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: theme.sizes.s6,
    paddingHorizontal: theme.sizes.s8,
    backgroundColor: color ?? theme.colors.background4,
    borderRadius: theme.sizes.s6,
    columnGap: theme.sizes.s8,
  }),
  icon: {
    width: theme.sizes.s20,
    height: theme.sizes.s20,
    color: theme.colors.icon2,
  },
}));
