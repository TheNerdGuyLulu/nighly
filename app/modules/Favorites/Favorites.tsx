import React from 'react';

import { HotelList } from 'app/modules/components';
import { useApi, useSorting } from 'app/modules/Home/hooks';
import {
  BottomTabNavigatorScreenNames,
  BottomTabNavigatorScreenProps,
} from 'app/navigation';
import { StateManager } from 'app/state';

type FavoritesProps =
  BottomTabNavigatorScreenProps<BottomTabNavigatorScreenNames.Favorites>;

export function Favorites({ navigation }: Readonly<FavoritesProps>) {
  const favorites = StateManager.favorites.use.favorites();

  const { data } = useApi();

  const sorting = useSorting({
    hotels: data?.filter(d => favorites.includes(d.id)),
  });

  return <HotelList {...sorting} navigation={navigation} />;
}
