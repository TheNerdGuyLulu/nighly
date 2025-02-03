import React, {useCallback, useMemo} from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HotelGridCard, HotelListCard} from 'app/components/HotelCard';
import {ListHeader} from 'app/modules/Home/components';
import {useApi} from 'app/modules/Home/hooks/useApi.ts';
import {useListDisplayType} from 'app/modules/Home/hooks/useListDisplayType.ts';

export function Home() {
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

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<Nightly.Hotel>) => {
      if (listDisplayType === 'list') {
        return <HotelListCard {...item} />;
      }
      return <HotelGridCard {...item} />;
    },
    [listDisplayType],
  );

  return (
    <SafeAreaView edges={['top']}>
      <FlatList<Nightly.Hotel>
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        data={data}
        renderItem={renderItem}
        // I will not add keyExtract since data items contain an id key, which by default will be selected
        // It checks item.key, then item.id, and then falls back to using the index
        // https://reactnative.dev/docs/flatlist#keyextractor
      />
    </SafeAreaView>
  );
}
