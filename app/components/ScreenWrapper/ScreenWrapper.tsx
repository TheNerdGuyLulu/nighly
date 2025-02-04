import React from 'react';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

type ScreenWrapperProps = SafeAreaViewProps;

export function ScreenWrapper(props: ScreenWrapperProps) {
  return <SafeAreaView edges={['top', 'left', 'right']} {...props} />;
}
