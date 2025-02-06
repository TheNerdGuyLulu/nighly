import { StyleSheet } from 'react-native-unistyles';

export const detailsFavouriteHeaderElementStyles = StyleSheet.create(
  (theme, runtime) => ({
    ff: {
      position: 'absolute',
      zIndex: 2,
      top: runtime.insets.top + theme.sizes.s8,
    },
    favorite: {},
  }),
);
