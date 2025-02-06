import { StyleSheet } from 'react-native-unistyles';

export const carouselStyles = StyleSheet.create((_, runtime) => ({
  image: {
    width: runtime.screen.width,
    height: runtime.screen.height / 2.5,
  },
}));
