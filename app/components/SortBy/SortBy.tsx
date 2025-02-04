import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { TouchableProps } from 'react-native-svg';

import { IconArrowUpDown } from 'app/assets';

import { Text } from '../Text';

import { sortByStyles as styles } from './SortBy.styles.ts';

type SortByProps = {
  sortBy: string;
} & TouchableProps;

export function SortBy({ sortBy, style, ...rest }: SortByProps) {
  return (
    <TouchableOpacity {...rest} style={style}>
      <View style={styles.sortWrapper}>
        <IconArrowUpDown style={styles.sortIcon} />
        <Text
          variant={'body3'}
          style={{
            color: '#313131',
          }}>
          Sort by {sortBy}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
