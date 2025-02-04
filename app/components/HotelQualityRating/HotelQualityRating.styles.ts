import { StyleSheet } from 'react-native-unistyles';

export const hotelQualityRatingStyles = StyleSheet.create(theme => ({
  wrapper: { flexDirection: 'row', columnGap: theme.sizes.s4 },
  starIcon: {
    width: theme.sizes.s16,
    height: theme.sizes.s16,
    color: '#FFD33C',
  },
}));
