import {StyleSheet} from 'react-native-unistyles';

export const hotelListCardStyles = StyleSheet.create((theme, runtime) => {
  const thumbnailWidth = runtime.screen.width / 3.5;

  return {
    wrapper: {
      flexDirection: 'row',
      minHeight: 120,
      borderRadius: theme.sizes.s8,
      overflow: 'hidden',
      borderWidth: 0.5,
      borderColor: '#eee',
      backgroundColor: '#fbfdff',
    },
    thumbnail: {
      width: thumbnailWidth,
      height: 'auto',
    },
  };
});
