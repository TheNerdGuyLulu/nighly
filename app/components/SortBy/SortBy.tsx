import React from 'react';
import {Pressable, PressableProps, Text, View} from 'react-native';

import {IconArrowUpDown} from 'app/assets';

import {sortByStyles as styles} from './SortBy.styles.ts';

type SortByProps = {
  sortBy: string;
} & PressableProps;

export function SortBy({sortBy, style, ...rest}: SortByProps) {
  return (
    <Pressable {...rest} style={style}>
      <View style={styles.sortWrapper}>
        <IconArrowUpDown style={styles.sortIcon} />
        <Text
          style={{
            fontFamily: 'MADE Tommy Soft',
            color: '#313131',
          }}>
          Sort by {sortBy}
        </Text>
      </View>
    </Pressable>
  );
}
