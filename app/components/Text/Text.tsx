import React from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';

import {textStyles as styles} from './Text.styles.ts';

type TextProps = RNTextProps &
  Required<Pick<Parameters<typeof styles.useVariants>[0], 'variant'>>;

export function Text({style, variant, ...props}: TextProps) {
  styles.useVariants({
    variant,
  });

  return <RNText {...props} style={[styles.text, style]} />;
}
