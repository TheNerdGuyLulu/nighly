import {StyleSheet} from 'react-native-unistyles';

export const contentBodyStyles = StyleSheet.create(theme => ({
  bodyWrapper: {
    flex: 1,
    padding: 8,
    rowGap: 6,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: theme.sizes.s8,
  },
  nameText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'MADE Tommy Soft',
  },
  locationText: {
    fontSize: 13,
    fontFamily: 'MADE Tommy Soft',
  },
  pricingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
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
