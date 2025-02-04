import { StyleSheet } from 'react-native-unistyles';

export const hotelGridCardStyles = StyleSheet.create((theme, runtime) => {
  const imageHeight = runtime.screen.height / 5;

  return {
    wrapper: {
      borderRadius: theme.sizes.s8,
      borderWidth: 0.5,
      borderColor: '#eee',
      overflow: 'hidden',
      backgroundColor: '#fbfdff',
    },
    thumbnail: {
      width: '100%',
      height: imageHeight,
    },
  };
});
