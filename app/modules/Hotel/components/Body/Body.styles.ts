import { StyleSheet } from 'react-native-unistyles';

export const bodyStyles = StyleSheet.create(theme => ({
  wrapper: {
    rowGap: theme.sizes.s26,
  },
  blockWrapper: {
    rowGap: theme.sizes.s8,
  },
  featuresTagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.sizes.s12,
  },
}));
