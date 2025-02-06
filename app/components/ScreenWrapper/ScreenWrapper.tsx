import React from 'react';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

import { screenWrapperStyles as styles } from './ScreenWrapper.styles.ts';

type ScreenWrapperProps = SafeAreaViewProps;

export function ScreenWrapper(props: Readonly<ScreenWrapperProps>) {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      {...props}
      style={[styles.wrapper, props.style]}
    />
  );
}
