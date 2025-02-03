import React, {useCallback, useMemo} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HotelGridCard, HotelListCard} from 'app/components';
import {HomeNavigatorScreenProps} from 'app/navigation';
import {HomeNavigatorScreenNames} from 'app/navigation/constants';

import {ListHeader} from './components';
import {homeStyles as styles} from './Home.styles.ts';
import {useApi, useListDisplayType} from './hooks';

const ItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

type HomeProps = HomeNavigatorScreenProps<HomeNavigatorScreenNames.Home>;

export function Home({navigation}: HomeProps) {
  const {listDisplayType, onToggleListDisplayType} = useListDisplayType();

  const {data, sortBy} = useApi();

  const ListHeaderComponent = useMemo(() => {
    return (
      <ListHeader
        onDisplayTypePressHandler={onToggleListDisplayType}
        listDisplayType={listDisplayType}
        sortBy={sortBy}
      />
    );
  }, [listDisplayType, onToggleListDisplayType, sortBy]);

  const onPress = useCallback(
    (hotel: Nightly.Hotel) => () => {
      navigation.navigate(HomeNavigatorScreenNames.Hotel, {
        hotel,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Nightly.Hotel>) => {
      if (listDisplayType === 'list') {
        return <HotelListCard onPress={onPress(item)} hotel={item} />;
      }
      return <HotelGridCard onPress={onPress(item)} hotel={item} />;
    },
    [listDisplayType],
  );

  return (
    <SafeAreaView edges={['top', 'left', 'right']}>
      <FlatList<Nightly.Hotel>
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        data={data}
        renderItem={renderItem}
        // I will not add keyExtract since data items contain an id key, which by default will be selected
        // It checks item.key, then item.id, and then falls back to using the index
        // https://reactnative.dev/docs/flatlist#keyextractor
      />
    </SafeAreaView>
  );
}
