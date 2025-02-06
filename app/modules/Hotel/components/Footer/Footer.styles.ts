import { StyleSheet } from 'react-native-unistyles';

export const footerStyles = StyleSheet.create((theme, runtime) => ({
  wrapper: {
    paddingBottom: runtime.insets.bottom + theme.sizes.s8,
    paddingHorizontal: theme.sizes.s16,
    paddingTop: theme.sizes.s12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
  },
}));
