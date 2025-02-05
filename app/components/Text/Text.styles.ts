import { StyleSheet } from 'react-native-unistyles';

export const textStyles = StyleSheet.create(theme => ({
  text: {
    color: theme.colors.text1,
    variants: {
      variant: {
        button1: {
          fontSize: 18,
          fontFamily: theme.fontFamilies.MADETommySoftMedium,
        },
        header1: {
          fontSize: theme.fontSizes.s24,
          fontFamily: theme.fontFamilies.MADETommySoftMedium,
        },
        header2: {
          fontSize: theme.fontSizes.s20,
          fontFamily: theme.fontFamilies.MADETommySoftMedium,
        },
        body1Medium: {
          fontSize: theme.fontSizes.s16,
          fontFamily: theme.fontFamilies.MADETommySoftMedium,
        },
        body2: {
          fontSize: theme.fontSizes.s14,
          fontFamily: theme.fontFamilies.MADETommySoftRegular,
        },
        body2Medium: {
          fontSize: theme.fontSizes.s14,
          fontFamily: theme.fontFamilies.MADETommySoftMedium,
        },
        body2Black: {
          fontSize: theme.fontSizes.s14,
          fontFamily: theme.fontFamilies.MADETommySoftBold,
        },
        body3: {
          fontSize: theme.fontSizes.s13,
          fontFamily: theme.fontFamilies.MADETommySoftRegular,
        },
        caption1: {
          fontSize: theme.fontSizes.s12,
          fontFamily: theme.fontFamilies.MADETommySoftRegular,
        },
      },
    },
  },
}));
