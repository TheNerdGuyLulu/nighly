import {StyleSheet} from 'react-native-unistyles';

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
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'MADE Tommy Soft',
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
  locationText: {
    fontSize: 13,
    fontFamily: 'MADE Tommy Soft',
  },
  pricingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#003049',
    fontFamily: 'MADE Tommy Soft',
  },
  durationText: {
    fontSize: 12,
    color: '#434346',
    fontFamily: 'MADE Tommy Soft',
  },
}));
