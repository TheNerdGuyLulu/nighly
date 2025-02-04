import { StyleSheet } from 'react-native-unistyles';

export const textStyles = StyleSheet.create(theme => ({
  text: {
    fontFamily: theme.fontFamilies.MADETommySoft,
    variants: {
      variant: {
        body1Medium: {
          fontSize: theme.fontSizes.s16,
          fontWeight: '500',
        },
        body2Black: {
          fontSize: theme.fontSizes.s14,
          fontWeight: '700',
        },
        body3: {
          fontWeight: '400',
          fontSize: theme.fontSizes.s13,
        },
        Caption1: {
          fontSize: theme.fontSizes.s12,
          fontWeight: '400',
        },
      },
    },
  },
}));
