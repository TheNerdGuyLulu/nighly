import { StyleSheet } from 'react-native-unistyles';

export const sortBottomSheetStyles = StyleSheet.create((theme, runtime) => ({
  bottomSheetView: {
    paddingBottom: runtime.insets.bottom + theme.sizes.s8,
    paddingHorizontal: theme.sizes.s16,
  },
  titleText: {
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border1,
    paddingVertical: theme.sizes.s12,
    marginBottom: theme.sizes.s12,
  },
  optionsWrapper: {
    rowGap: theme.sizes.s4,
  },
  pressable: (active: boolean) => ({
    paddingHorizontal: theme.sizes.s8,
    borderRadius: theme.sizes.s6,
    backgroundColor: active ? theme.colors.background5 : undefined,
    paddingVertical: theme.sizes.s12,
  }),
}));
