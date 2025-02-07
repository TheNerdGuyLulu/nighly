import React from 'react';
import { View } from 'react-native';

import { ListDisplayType, ListDisplayTypeSwitch, SortBy } from 'app/components';
import { FlagSelector } from 'app/components/FlagSelector';

import { listHeaderStyles as styles } from './ListHeader.styles.ts';

type ListHeaderProps = {
  listDisplayType: ListDisplayType;
  onDisplayTypePressHandler: () => void;
  sortDirection: Nightly.SortDirection;
  sortBy: Nightly.SortBy;
  onSortByPress: () => void;
  onDirectionPress: () => void;
  onLanguageSelectPress: () => void;
};

export function ListHeader({
  listDisplayType,
  onDisplayTypePressHandler,
  sortBy,
  sortDirection,
  onSortByPress,
  onDirectionPress,
  onLanguageSelectPress,
}: Readonly<ListHeaderProps>) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.rightElementsWrapper}>
        <ListDisplayTypeSwitch
          type={listDisplayType}
          onPress={onDisplayTypePressHandler}
        />

        <View style={styles.flagSelectorWrapper}>
          <FlagSelector onPress={onLanguageSelectPress} />
        </View>
      </View>

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
