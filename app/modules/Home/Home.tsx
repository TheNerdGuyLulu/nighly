import React, { useCallback, useMemo, useRef } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import {
  BottomSheet,
  HotelGridCard,
  HotelListCard,
  ScreenWrapper,
} from 'app/components';
import {
  BottomTabNavigatorScreenNames,
  BottomTabNavigatorScreenProps,
  RootNavigatorScreenNames,
} from 'app/navigation';

import { ListHeader, SortBottomSheet } from './components';
import { homeStyles as styles } from './Home.styles.ts';
import { useApi, useListDisplayType, useSorting } from './hooks';

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

type HomeProps =
  BottomTabNavigatorScreenProps<BottomTabNavigatorScreenNames.Home>;

export function Home({ navigation }: Readonly<HomeProps>) {
  const { listDisplayType, onToggleListDisplayType } = useListDisplayType();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const { data } = useApi();

  const {
    sortedHotels,
    sortOptions,
    sortBy,
    setSortBy,
    sortDirection,
    toggleSortDirection,
  } = useSorting({
    hotels: data,
  });

  const ListHeaderComponent = useMemo(() => {
    const onSortByPress = () => bottomSheetRef.current?.present();
    return (
      <ListHeader
        onSortByPress={onSortByPress}
        onDirectionPress={toggleSortDirection}
        onDisplayTypePressHandler={onToggleListDisplayType}
        listDisplayType={listDisplayType}
        sortBy={sortBy}
        sortDirection={sortDirection}
      />
    );
  }, [
    listDisplayType,
    onToggleListDisplayType,
    sortBy,
    sortDirection,
    toggleSortDirection,
  ]);

  const onPress = useCallback(
    (hotel: Nightly.Hotel) => () => {
      navigation.navigate(RootNavigatorScreenNames.Hotel, {
        hotel,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Nightly.Hotel>) => {
      if (listDisplayType === 'list') {
        return <HotelListCard onPress={onPress(item)} hotel={item} />;
      }
      return <HotelGridCard onPress={onPress(item)} hotel={item} />;
    },
    [listDisplayType, onPress],
  );

  return (
    <>
      <ScreenWrapper>
        <FlatList<Nightly.Hotel>
          contentContainerStyle={styles.contentContainer}
          ListHeaderComponent={ListHeaderComponent}
          ItemSeparatorComponent={ItemSeparatorComponent}
          data={sortedHotels}
          renderItem={renderItem}
          // I will not add keyExtract since data items contain an id key, which by default will be selected
          // It checks item.key, then item.id, and then falls back to using the index
          // https://reactnative.dev/docs/flatlist#keyextractor
        />
      </ScreenWrapper>
      <SortBottomSheet
        sortBy={sortBy}
        ref={bottomSheetRef}
        onSelect={setSortBy}
        options={sortOptions}
      />
    </>
  );
}
