import { StyleSheet } from 'react-native-unistyles';

export const indicatorsStyles = StyleSheet.create(theme => ({
  wrapper: {
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
    bottom: theme.sizes.s6,
    gap: theme.sizes.s6,
    paddingHorizontal: theme.sizes.s20,
  },
}));
