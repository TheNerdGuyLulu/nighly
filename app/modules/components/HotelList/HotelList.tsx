import React, { useCallback, useMemo, useRef } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import {
  BottomSheet,
  HotelGridCard,
  HotelListCard,
  LanguageSelectorBottomSheet,
  ScreenWrapper,
  useListDisplayType,
} from 'app/components';
import { useFavorites, useSorting } from 'app/hooks';
import { RootNavigatorScreenNames } from 'app/navigation';

import { ListHeader, SortBottomSheet } from './components';
import { hotelListStyles as styles } from './HotelList.styles.ts';

type HotelListProps = {
  navigation: NavigationProp<any>;
} & ReturnType<typeof useSorting>;

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

export function HotelList({
  navigation,
  sortedHotels,
  sortBy,
  setSortBy,
  sortDirection,
  toggleSortDirection,
  sortOptions,
}: HotelListProps) {
  const { listDisplayType, onToggleListDisplayType } = useListDisplayType();
  const sortingBottomSheetRef = useRef<BottomSheet>(null);
  const languageSelectBottomSheetRef = useRef<BottomSheet>(null);

  const { getIsFavorite, toggleFavorite } = useFavorites();

  const ListHeaderComponent = useMemo(() => {
    const onSortByPress = () => sortingBottomSheetRef.current?.present();
    const onLanguageSelectPress = () =>
      languageSelectBottomSheetRef.current?.present();

    return (
      <ListHeader
        onSortByPress={onSortByPress}
        onDirectionPress={toggleSortDirection}
        onDisplayTypePressHandler={onToggleListDisplayType}
        listDisplayType={listDisplayType}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onLanguageSelectPress={onLanguageSelectPress}
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
      const isFavorite = getIsFavorite(item.id);
      const toggleFav = () => toggleFavorite(item.id);

      if (listDisplayType === 'list') {
        return (
          <HotelListCard
            onPress={onPress(item)}
            hotel={item}
            isFavorite={isFavorite}
            onFavoritePress={toggleFav}
          />
        );
      }
      return (
        <HotelGridCard
          onPress={onPress(item)}
          hotel={item}
          isFavorite={isFavorite}
          onFavoritePress={toggleFav}
        />
      );
    },
    [getIsFavorite, listDisplayType, onPress, toggleFavorite],
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
        ref={sortingBottomSheetRef}
        onSelect={setSortBy}
        options={sortOptions}
      />
      <LanguageSelectorBottomSheet ref={languageSelectBottomSheetRef} />
    </>
  );
}
