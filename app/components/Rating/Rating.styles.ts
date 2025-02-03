import {StyleSheet} from 'react-native-unistyles';

export const ratingStyles = StyleSheet.create(theme => ({
  ratingWrapper: {
    flexDirection: 'row',
    columnGap: theme.sizes.s8,
    alignItems: 'center',
    backgroundColor: '#eae8e8',
    padding: theme.sizes.s4,
    borderRadius: theme.sizes.s4,
  },
  starIcon: {
    width: 15,
    height: 15,
    color: '#9b5de5',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'MADE Tommy Soft',
  },
}));
