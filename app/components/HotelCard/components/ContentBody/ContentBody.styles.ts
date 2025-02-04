import { StyleSheet } from 'react-native-unistyles';

export const contentBodyStyles = StyleSheet.create(theme => ({
  wrapper: {
    flex: 1,
    padding: theme.sizes.s6,
    rowGap: theme.sizes.s6,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  nameText: {
    flex: 1,
  },
  bodyWrapper: {
    variants: {
      displayType: {
        card: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        },
        list: {},
      },
    },
  },
  ratingLocationWrapper: {
    rowGap: theme.sizes.s4,
  },
  pricingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  priceText: {
    color: '#003049',
  },
  durationText: {
    color: '#434346',
  },
}));
