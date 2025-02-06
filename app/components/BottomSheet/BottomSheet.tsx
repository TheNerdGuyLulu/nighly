import React, { ForwardedRef, forwardRef } from 'react';
import { useWindowDimensions } from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetProps,
} from '@gorhom/bottom-sheet';

export type BottomSheet = BottomSheetModal;

function renderBackdrop(props: BottomSheetBackdropProps) {
  return (
    <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
  );
}

function BottomSheetBase(
  props: Readonly<BottomSheetProps>,
  ref: ForwardedRef<BottomSheetModal>,
) {
  const { height } = useWindowDimensions();

  return (
    <BottomSheetModal
      ref={ref}
      {...props}
      maxDynamicContentSize={height * 0.8}
      enableDynamicSizing={true}
      backdropComponent={renderBackdrop}
    />
  );
}

export const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(
  BottomSheetBase,
);
