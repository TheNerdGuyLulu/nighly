import React, { FC } from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Text } from 'app/components';

import { tagStyles as styles } from './Tag.styles.ts';

export type TagProps = {
  icon?: FC<SvgProps>;
  description: string;
};

export function Tag({ icon: Icon, description }: TagProps) {
  return (
    <View style={styles.wrapper}>
      {Icon && <Icon style={styles.icon} />}
      <Text variant={'body2'}>{description}</Text>
    </View>
  );
}
