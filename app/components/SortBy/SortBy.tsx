import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { IconArrowUpDown } from 'app/assets';

import { Text } from '../Text';

import { sortByStyles as styles } from './SortBy.styles.ts';

type SortByProps = {
  sortBy: string;
} & TouchableOpacityProps;

export function SortBy({ sortBy, style, ...rest }: SortByProps) {
  const { theme } = useUnistyles();

  return (
    <TouchableOpacity {...rest} style={style}>
      <View style={styles.sortWrapper}>
        <IconArrowUpDown color={theme.colors.text1} style={styles.sortIcon} />
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
