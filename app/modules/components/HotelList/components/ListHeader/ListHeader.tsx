import React from 'react';
import { View } from 'react-native';

import { ListDisplayType, ListDisplayTypeSwitch, SortBy } from 'app/components';

import { listHeaderStyles as styles } from './ListHeader.styles.ts';

type ListHeaderProps = {
  listDisplayType: ListDisplayType;
  onDisplayTypePressHandler: () => void;
  sortDirection: Nightly.SortDirection;
  sortBy: Nightly.SortBy;
  onSortByPress: () => void;
  onDirectionPress: () => void;
};

export function ListHeader({
  listDisplayType,
  onDisplayTypePressHandler,
  sortBy,
  sortDirection,
  onSortByPress,
  onDirectionPress,
}: Readonly<ListHeaderProps>) {
  return (
    <View style={styles.wrapper}>
      <ListDisplayTypeSwitch
        type={listDisplayType}
        onPress={onDisplayTypePressHandler}
      />

      <SortBy
        direction={sortDirection}
        sortByPressable={{
          onPress: onSortByPress,
        }}
        directionPressable={{
          onPress: onDirectionPress,
        }}
        sortBy={sortBy}
      />
    </View>
  );
}
