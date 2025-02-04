import { StyleSheet } from 'react-native-unistyles';

export const hotelQualityRatingStyles = StyleSheet.create(theme => ({
  wrapper: { flexDirection: 'row', columnGap: theme.sizes.s4 },
  starIcon: {
    color: '#FFD33C',
    variants: {
      size: {
        normal: {
          width: theme.sizes.s16,
          height: theme.sizes.s16,
        },
        large: {
          width: theme.sizes.s20,
          height: theme.sizes.s20,
        },
      },
    },
  },
}));
