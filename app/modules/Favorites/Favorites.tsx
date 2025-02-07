import React from 'react';

import { useGetHotels } from 'app/api/queries/useGetHotels.ts';
import { useFavorites, useSorting } from 'app/hooks';
import {
  BottomTabNavigatorScreenNames,
  BottomTabNavigatorScreenProps,
} from 'app/navigation';

import { HotelList } from '../components';

type FavoritesProps =
  BottomTabNavigatorScreenProps<BottomTabNavigatorScreenNames.Favorites>;

export function Favorites({ navigation }: Readonly<FavoritesProps>) {
  const { favorites } = useFavorites();

  const { data } = useGetHotels();

  const sorting = useSorting({
    hotels: data?.filter(d => favorites.includes(d.id)),
  });

  return <HotelList {...sorting} navigation={navigation} />;
}
