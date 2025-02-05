import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Text } from '../Text';

import { buttonStyles as styles } from './Button.styles.ts';

export type ButtonProps = TouchableOpacityProps & {
  text?: string;
};

export function Button({ style, children, text, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.pressable, style]}>
      {children ?? (
        <Text style={styles.text} variant={'button1'}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
