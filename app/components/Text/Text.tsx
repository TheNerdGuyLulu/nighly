import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import { textStyles as styles } from './Text.styles.ts';

type TextStylesVariants = Required<Parameters<typeof styles.useVariants>[0]>;

export type TextVariants = TextStylesVariants['variant'];

export type TextProps = RNTextProps & Pick<TextStylesVariants, 'variant'>;

export function Text({ style, variant, ...props }: Readonly<TextProps>) {
  styles.useVariants({
    variant,
  });

  return <RNText {...props} style={[styles.text, style]} />;
}
