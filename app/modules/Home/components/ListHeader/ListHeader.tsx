import React from 'react';
import {View} from 'react-native';

import {ListDisplayType, ListDisplayTypeSwitch, SortBy} from 'app/components';

import {listHeaderStyles as styles} from './ListHeader.styles.ts';

type ListHeaderProps = {
  listDisplayType: ListDisplayType;
  onDisplayTypePressHandler: () => void;
  sortBy: string;
};

export function ListHeader({
  listDisplayType,
  onDisplayTypePressHandler,
  sortBy,
}: ListHeaderProps) {
  return (
    <View style={styles.wrapper}>
      <ListDisplayTypeSwitch
        style={styles.sortDisplayItemWrapper}
        type={listDisplayType}
        onPress={onDisplayTypePressHandler}
      />

      <SortBy sortBy={sortBy} style={styles.sortDisplayItemWrapper} />
    </View>
  );
}
