import { StyleSheet } from 'react-native-unistyles';

export const fullDescriptionBottomSheetStyles = StyleSheet.create(
  (theme, runtime) => ({
    scrollView: {
      flex: 1,
      paddingHorizontal: theme.sizes.s16,
    },
    text: {
      paddingBottom: runtime.insets.bottom,
    },
  }),
);
