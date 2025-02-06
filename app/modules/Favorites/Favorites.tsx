import React from 'react';

import { useApi, useSorting } from 'app/hooks';
import {
  BottomTabNavigatorScreenNames,
  BottomTabNavigatorScreenProps,
} from 'app/navigation';
import { StateManager } from 'app/state';

import { HotelList } from '../components';

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
