import { StyleSheet } from 'react-native-unistyles';

export const hotelGridCardStyles = StyleSheet.create((theme, runtime) => {
  const imageHeight = runtime.screen.height / 5;

  return {
    wrapper: {
      borderRadius: theme.sizes.s8,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.border1,
      overflow: 'hidden',
      backgroundColor: theme.colors.background2,
    },
    favorite: {
      position: 'absolute',
      zIndex: 2,
      top: theme.sizes.s8,
      right: theme.sizes.s12,
    },
    thumbnail: {
      width: '100%',
      height: imageHeight,
    },
  };
});
