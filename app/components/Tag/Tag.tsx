import React, { FC } from 'react';
import { ColorValue, TouchableOpacity } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Text } from 'app/components';

import { tagStyles as styles } from './Tag.styles.ts';

export type TagProps = {
  icon?: FC<SvgProps>;
  description: string;
  onPress?: () => void;
  color?: ColorValue;
};

export function Tag({
  icon: Icon,
  description,
  onPress,
  color,
}: Readonly<TagProps>) {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      style={styles.wrapper(color)}>
      {Icon && <Icon style={styles.icon} />}
      <Text variant={'body2'}>{description}</Text>
    </TouchableOpacity>
  );
}
